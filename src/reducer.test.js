import reducer from './reducer'
import { EMPTY_ARRAYS, HANDLE_SNAPSHOT_DATA, UPDATE_LEVELS, HANDLE_CHANGE, HANDLE_AGG_CHANGE } from './constants'
describe('reducer', () => {
  it('handles action type EMPTY_ARRAYS properly', () => {
    const initialState = {
      currency: 'BTC-USD',
      bestBidPrice: '123',
      bestBidQty: '456',
      bestAskPrice: '789',
      bestAskQty: '098',
      bidsArr: [1],
      asksArr: [1],
      bidsLineChart: [1],
      asksLineChart: [1],
      aggregation: 0.01,
    }

    const result = reducer(initialState, { type: EMPTY_ARRAYS })

    expect(result.bidsArr.length).toBe(0)
    expect(result.asksArr.length).toBe(0)
    expect(result.bidsLineChart.length).toBe(0)
    expect(result.asksLineChart.length).toBe(0)
  })
  it('handles action type HANDLE_CHANGE properly', () => {
    const initialState = {
      currency: 'BTC-USD',
      bestBidPrice: '123',
      bestBidQty: '456',
      bestAskPrice: '789',
      bestAskQty: '098',
      bidsArr: [1],
      asksArr: [1],
      bidsLineChart: [1],
      asksLineChart: [1],
      aggregation: 0.01,
    }

    const result = reducer(initialState, {
      type: HANDLE_CHANGE,
      payload: 'ETH-USD',
    })

    expect(result.currency).toBe('ETH-USD')
    expect(result.bidsArr.length).toBe(0)
    expect(result.asksArr.length).toBe(0)
    expect(result.bidsLineChart.length).toBe(0)
    expect(result.asksLineChart.length).toBe(0)
  })
  it('handles action type UPDATE_LEVELS properly', () => {
    const initialState = {
      currency: 'BTC-USD',
      bestBidPrice: '123',
      bestBidQty: '456',
      bestAskPrice: '1234',
      bestAskQty: '098',
      bidsArr: [1],
      asksArr: [1],
      bidsLineChart: [1],
      asksLineChart: [1],
      aggregation: 0.01,
    }

    const result = reducer(initialState, {
      type: UPDATE_LEVELS,
      payload: {
        best_bid: '1234',
        best_ask: '1234',
        side: 'buy',
        last_size: '0.00343',
        time: '3243214214',
      },
    })

    expect(result.bestBidPrice).toBe('1234')
    expect(result.bestBidQty).toBe('0.00343')
    expect(result.bidsArr[0].length).toBe(3)
    expect(result.bidsLineChart.length).toBe(2)
  })

  it('handles action type HANDLE_SNAPSHOT_DATA properly', () => {
    const initialState = {
      currency: 'BTC-USD',
      bestBidPrice: '123',
      bestBidQty: '456',
      bestAskPrice: '789',
      bestAskQty: '098',
      bidsArr: [1],
      asksArr: [1],
      bidsLineChart: [1],
      asksLineChart: [1],
      aggregation: 0.01,
    }

    const result = reducer(initialState, {
      type: HANDLE_SNAPSHOT_DATA,
      payload: {
        bids: [[1, 2], [[3, 4]]],
        asks: [
          [5, 6],
          [7, 8],
          [9, 10],
        ],
      },
    })

    expect(result.bidsArr.length).toBe(2)
    expect(result.asksArr.length).toBe(3)
  })
  it('handles action type HANDLE_AGG_CHANGE properly', () => {
    const initialState = {
      currency: 'BTC-USD',
      bestBidPrice: '123',
      bestBidQty: '456',
      bestAskPrice: '789',
      bestAskQty: '098',
      bidsArr: [1],
      asksArr: [1],
      bidsLineChart: [1],
      asksLineChart: [1],
      aggregation: 0.01,
    }

    const result = reducer(initialState, {
      type: HANDLE_AGG_CHANGE,
      payload: 0.05,
    })

    expect(result.aggregation).toBe(0.05)
  })
})
