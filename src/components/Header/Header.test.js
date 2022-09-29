import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from './Header'

describe('BestAsk', () => {
  it('should render text correctly', () => {
    render(<Header />)
    const headerTitleEl = screen.getByTestId('header-title')

    const titleValue = 'CoinRoutes'

    expect(headerTitleEl.textContent).toBe(titleValue)
  })
})
