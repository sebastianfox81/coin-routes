import { render, screen,  } from '@testing-library/react'
import '@testing-library/jest-dom'
import OrderBook from './OrderBook'

describe('OrderBook', () => {
  it('should render market size text in order book', () => {
    render(<OrderBook />)
    const sizeTextEl  = screen.getByTestId('size-text')
    expect(sizeTextEl.textContent).toBe('Market Size')
  })
  it('should render price text in order book', () => {
    render(<OrderBook />)
    const priceTextEl  = screen.getByTestId('price-text')
    expect(priceTextEl.textContent).toBe('Price(USD)')
  })
  it('should render spred text in order book', () => {
    render(<OrderBook />)
    const spreadTextEl  = screen.getByTestId('spread-text')
    expect(spreadTextEl.textContent).toBe('USD Spread')
  })
  it('should render aggregation text in order book', () => {
    render(<OrderBook />)
    const aggTextEl  = screen.getByTestId('agg-text')
    expect(aggTextEl.textContent).toBe('Aggregation')
  })
})