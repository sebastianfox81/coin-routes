import React from 'react'
import { Grid } from '@mui/material'

const BestBid = ({ bestBidPrice, bestBidQty}) => {

  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        sx={{ backgroundColor: 'rgb(0,191,255)', padding: 'none' }}
      >
        <h2 data-testid='best-bid-title'style={{ color: 'white' }}>Best Bid</h2>
      </Grid>
      <Grid item xs={6} sx={{ borderRight: 'solid 2px lightgrey' }}>
        <p data-testid='best-bid-price'style={{ color: 'black', fontWeight: 'bold' }}>{bestBidPrice}</p>
        <p data-testid='bid-price-title' style={{ color: 'black' }}>Bid Price</p>
      </Grid>
      <Grid item xs={6}>
        <p data-testid='best-bid-quantity' style={{ color: 'black', fontWeight: 'bold' }}>{bestBidQty}</p>
        <p data-testid='bid-qty-title'style={{ color: 'black' }}>Bid Qty</p>
      </Grid>
    </Grid>
  )
}

export default BestBid
