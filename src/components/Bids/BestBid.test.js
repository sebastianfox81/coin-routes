import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import BestBid from './BestBid'

describe('BestBid', () => {
  it('should render text correctly', () => {
    render(<BestBid />)
    const titleEl = screen.getByTestId('best-bid-title')
    const bidPriceTitleEl = screen.getByTestId('bid-price-title')
    const bidQtyTitleEl = screen.getByTestId('bid-qty-title')

    const titleValue = 'Best Bid'
    const bidPriceTitle = 'Bid Price'
    const bidQtyTitle = 'Bid Qty'

    expect(titleEl.textContent).toBe(titleValue)
    expect(bidPriceTitleEl.textContent).toBe(bidPriceTitle)
    expect(bidQtyTitleEl.textContent).toBe(bidQtyTitle)
  })
  it('should render amounts correctly', () => {
    const props = {
      bestBidPrice: '123',
      bestBidQty: '456',
    }
    render(<BestBid {...props} />)
    const bestBidPriceEl = screen.getByTestId('best-bid-price')
    const bestBidQtyEl = screen.getByTestId('best-bid-quantity')

    expect(bestBidPriceEl.textContent).toBe('123')
    expect(bestBidQtyEl.textContent).toBe('456')
  })
})
