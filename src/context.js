import React, { useContext, useReducer, useEffect, useRef } from 'react'
import {
  EMPTY_ARRAYS,
  HANDLE_SNAPSHOT_DATA,
  UPDATE_LEVELS,
  HANDLE_CHANGE,
  HANDLE_AGG_CHANGE,
} from './constants'
import reducer from './reducer'

const AppContext = React.createContext()

const initialState = {
  currency: 'BTC-USD',
  bestBidPrice: '',
  bestBidQty: '',
  bestAskPrice: '',
  bestAskQty: '',
  bidsArr: [],
  asksArr: [],
  bidsLineChart: [],
  asksLineChart: [],
  aggregation: 0.01,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const wsLevel2 = useRef(null)
  const wsTicker = useRef(null)

  // Ticker channel request
  useEffect(() => {
    dispatch({ type: EMPTY_ARRAYS })
    wsTicker.current = new WebSocket('wss://ws-feed.exchange.coinbase.com')
    const tickerRequest = {
      type: 'subscribe',
      product_ids: [state.currency],
      channels: ['ticker'],
    }

    wsTicker.current.onopen = () => {
      wsTicker.current.send(JSON.stringify(tickerRequest))
      console.log('webSocket opened', tickerRequest)
    }

    wsTicker.current.onclose = () => console.log('closed connection')
    wsTicker.onerror = (e) => console.log('Websocket error:', e)

    const webSocketCurrent = wsTicker.current
    return () => {
      webSocketCurrent.close()
    }
  }, [state.currency])

  // Level 2 channel request
  useEffect(() => {
    dispatch({ type: EMPTY_ARRAYS })
    wsLevel2.current = new WebSocket('wss://ws-feed.exchange.coinbase.com')
    const l2Request = {
      type: 'subscribe',
      product_ids: [state.currency],
      channels: ['level2'],
    }

    wsLevel2.current.onopen = () => {
      wsLevel2.current.send(JSON.stringify(l2Request))
      console.log('webSocket opened', l2Request)
    }

    wsLevel2.current.onclose = () => console.log('closed connection')
    wsLevel2.onerror = (e) => console.log('Websocket error:', e)

    const webSocketCurrent = wsLevel2.current
    return () => {
      webSocketCurrent.close()
    }
  }, [state.currency])

  // Incoming messages
  useEffect(() => {
    if (!wsLevel2.current) return
    // level2 response
    wsLevel2.current.onmessage = (e) => {
      const msg = JSON.parse(e.data)
      if (msg.type === 'snapshot') {
        dispatch({ type: HANDLE_SNAPSHOT_DATA, payload: msg })
      }
    }
    // ticker response
    wsTicker.current.onmessage = (e) => {
      const msg = JSON.parse(e.data)
      dispatch({ type: UPDATE_LEVELS, payload: msg })
    }
  }, [state.currency])

  const handleChange = (value) => {
    dispatch({ type: HANDLE_CHANGE, payload: value })
  }

  const handleAggChange = (value) => {
    dispatch({ type: HANDLE_AGG_CHANGE, payload: value })
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleChange,
        handleAggChange,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }
