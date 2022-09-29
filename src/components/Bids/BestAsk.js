import React from 'react'
import { Grid } from '@mui/material'

const BestAsk = ({ bestAskPrice, bestAskQty }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{ backgroundColor: 'rgb(255,165,0)' }}>
        <h2 data-testid='best-ask-title' style={{ color: 'white' }}>
          Best Ask
        </h2>
      </Grid>
      <Grid item xs={6} sx={{ borderRight: 'solid 2px lightgrey' }}>
        <p
          data-testid='best-ask-amount'
          style={{ color: 'black', fontWeight: 'bold' }}
        >
          {bestAskPrice}
        </p>
        <p data-testid='ask-price-title' style={{ color: 'black' }}>
          Ask Price
        </p>
      </Grid>
      <Grid item xs={6}>
        <p
          data-testid='best-ask-quantity'
          style={{ color: 'black', fontWeight: 'bold' }}
        >
          {bestAskQty}
        </p>
        <p data-testid='ask-qty-title' style={{ color: 'black' }}>
          Ask Qty
        </p>
      </Grid>
    </Grid>
  )
}

export default BestAsk
