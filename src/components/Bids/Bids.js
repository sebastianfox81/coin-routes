import * as React from 'react'
import { useGlobalContext } from '../../context'
import { styled } from '@mui/material/styles'
import { Box, Grid, Card } from '@mui/material'

import BestAsk from './BestAsk'
import BestBid from './BestBid'

const Item = styled(Card)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'black',
  boxShadow: 'none',
}))

export default function Bids() {
  const { bestAskPrice, bestAskQty, bestBidPrice, bestBidQty } = useGlobalContext()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <Item>
            <BestBid bestBidPrice={bestBidPrice} bestBidQty={bestBidQty}/>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Item>
            <BestAsk bestAskPrice={bestAskPrice} bestAskQty={bestAskQty}/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  )
}
