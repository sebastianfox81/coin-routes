import {
  EMPTY_ARRAYS,
  HANDLE_SNAPSHOT_DATA,
  UPDATE_LEVELS,
  HANDLE_CHANGE,
  HANDLE_AGG_CHANGE,
} from './constants'

const reducer = (state, action) => {
  if (action.type === EMPTY_ARRAYS) {
    return {
      ...state,
      bidsArr: [],
      asksArr: [],
      bidsLineChart: [],
      asksLineChart: [],
    }
  }
  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      currency: action.payload,
      bidsArr: [],
      asksArr: [],
      bidsLineChart: [],
      asksLineChart: [],
    }
  }
  if (action.type === UPDATE_LEVELS) {
    const { best_bid, best_ask, side, last_size, time } = action.payload
    // let newTime = time.slice(11,19)
    if (side === 'buy') {
      return {
        ...state,
        bestBidPrice: best_bid,
        bestBidQty: last_size,
        bidsArr: [[best_bid, last_size, side], ...state.bidsArr],
        bidsLineChart: [...state.bidsLineChart, [best_bid, time]],
      }
    } else {
      return {
        ...state,
        bestAskPrice: best_ask,
        bestAskQty: last_size,
        asksArr: [[best_ask, last_size, side], ...state.asksArr],
        asksLineChart: [...state.asksLineChart, [best_ask, time]],
      }
    }
  }

  if (action.type === HANDLE_SNAPSHOT_DATA) {
    const { bids, asks } = action.payload

    return {
      ...state,
      bidsArr: bids,
      asksArr: asks,
    }
  }
  if (action.type === HANDLE_AGG_CHANGE) {
    return {
      ...state,
      aggregation: action.payload,
    }
  }
  return state
}

export default reducer
