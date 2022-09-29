import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CoinDropDown from './CoinDropDown'

describe('CoinDropDown', () => {
  it('should have a text value', () => {
    render(<CoinDropDown />)
    const labelTextEl = screen.getByTestId('label-text')
    const labelTextValue = 'Coin'
    expect(labelTextEl.textContent).toBe(labelTextValue)
  })
})
