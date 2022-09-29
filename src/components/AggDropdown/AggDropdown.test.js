import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import AggDropdown from './AggDropdown'

describe('AggDropdown', () => {
  test('aggregate input should be rendered', () => {
    render(<AggDropdown />)
    const aggInputEl = screen.getByTestId('agg-input')
    expect(aggInputEl).toBeInTheDocument()
  })
  it('should have a value on first render', () => {
    render(<AggDropdown />)
    const aggInputEl = screen.getByTestId('agg-input')
    expect(aggInputEl.value).toBe('0.01')
  })
})
