import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import BestAsk from './BestAsk'

describe('BestAsk', () => {
  it('should render text correctly', () => {
    render(<BestAsk />)
    const titleEl = screen.getByTestId('best-ask-title')
    const askPriceTitleEl = screen.getByTestId('ask-price-title')
    const askQtyTitleEl = screen.getByTestId('ask-qty-title')

    const titleValue = 'Best Ask'
    const askPriceTitle = 'Ask Price'
    const askQtyTitle = 'Ask Qty'

    expect(titleEl.textContent).toBe(titleValue)
    expect(askPriceTitleEl.textContent).toBe(askPriceTitle)
    expect(askQtyTitleEl.textContent).toBe(askQtyTitle)
  })
  it('should render amounts correctly', () => {
    const props = {
      bestAskPrice: '123',
      bestAskQty: '456',
    }
    render(<BestAsk {...props} />)
    const bestAskAmountEl = screen.getByTestId('best-ask-amount')
    const bestAskQtyEl = screen.getByTestId('best-ask-quantity')

    expect(bestAskAmountEl.textContent).toBe('123')
    expect(bestAskQtyEl.textContent).toBe('456')
  })
})
