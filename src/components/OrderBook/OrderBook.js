import React, { useState, useEffect } from 'react'
import { priceGrouping, roundToAggregation } from '../../utils'
import { AggDropdown } from '../AggDropdown'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'

const OrderBook = ({ aggregation, handleAggChange, bidsArr, asksArr }) => {
  const [asksRows, setAsksRows] = useState([])
  const [bidsRows, setBidsRows] = useState([])

  useEffect(() => {
    const groupByAggregation = (levelsArr, aggregation) => {
      const roundAllPrices = levelsArr?.map((level) => {
        const roundedPrice = roundToAggregation(level[0], aggregation)
        return [roundedPrice.toFixed(2), Number(level[1])]
      })
      return priceGrouping(roundAllPrices)
    }

    const groupedAsksArr = groupByAggregation(asksArr, aggregation)
    const groupedBidsArr = groupByAggregation(bidsArr, aggregation)

    const asksRows = groupedAsksArr.slice(0, 8)
    const bidsRows = groupedBidsArr.slice(0, 8)

    setAsksRows(asksRows)
    setBidsRows(bidsRows)
  }, [asksArr, bidsArr, aggregation])

  const spread = (bidsRows?.[0]?.[0] - asksRows?.[0]?.[0]) || 0

  return (
    <div style={{ marginBottom: '100px' }}>
      <TableContainer component={Paper} sx={{ backgroundColor: 'black' }}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell data-testid='size-text' sx={{ color: 'white' }}>
                Market Size
              </TableCell>
              <TableCell data-testid='price-text' sx={{ color: 'white' }}>
                Price(USD)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bidsRows?.map((bid, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white' }}>{isNaN(bid?.[1]) ? '' : bid?.[1]}</TableCell>
                <TableCell sx={{ color: 'red' }}>{isNaN(bid?.[0]) ? '' : bid?.[0]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableHead>
            <TableRow sx={{ backgroundColor: 'rgb(0,0,0,0.3)' }}>
              <TableCell data-testid='spread-text' sx={{ color: 'white' }}>
                USD Spread
              </TableCell>
              <TableCell sx={{ color: 'white' }}>{spread.toFixed(2)}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {asksRows?.map((ask, index) => {
              return (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell sx={{ color: 'white' }}>{isNaN(ask?.[1]) ? '' : ask?.[1]}</TableCell>
                  <TableCell sx={{ color: 'green' }}>{isNaN(ask?.[0]) ? '' : ask?.[0]}</TableCell>
                </TableRow>
              )
            })}
            <TableRow>
              <TableCell data-testid='agg-text' sx={{ color: 'white' }}>
                Aggregation
              </TableCell>
              <TableCell>
                <AggDropdown
                  aggregation={aggregation}
                  handleAggChange={handleAggChange}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default OrderBook
