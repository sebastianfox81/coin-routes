import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LineChart from './LineChart'

describe('LineChart', () => {
  it('should render chart component to the screen', () => {
    render(<LineChart />)
    const chart = screen.getByTestId('line-chart')
    expect(chart).toBeInTheDocument()
  })
})
