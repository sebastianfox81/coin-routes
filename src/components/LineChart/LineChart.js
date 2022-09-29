import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const LineChart = ({ bidsLineChart, asksLineChart }) => {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Real Time',
      },
    },
  }

  const newBids = bidsLineChart?.map((bid) => bid[0]).slice(-50)
  const newAsks = asksLineChart?.map((ask) => ask[0]).slice(-50)

  const labels = bidsLineChart
    ?.map((bid) => {
      const date = new Date(bid[1])
      return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    })
    .slice(-50)

  const data = {
    labels,
    datasets: [
      {
        label: 'Best Bid',
        data: newBids,
        borderColor: 'rgb(0,191,255)',
        backgroundColor: 'rgb(0,191,255, 0.5)',
      },
      {
        label: 'Best Ask',
        data: newAsks,
        borderColor: 'rgb(255,165,0)',
        backgroundColor: 'rgb(255,165,0,0.5)',
      },
    ],
  }

  return (
    <div style={{ margin: '30px 30px' }}>
      <Line options={options} data={data} data-testid='line-chart' />
    </div>
  )
}

export default LineChart
