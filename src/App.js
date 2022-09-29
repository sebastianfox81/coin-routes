import React from 'react'
import { CssBaseline, Box, Grid, Container } from '@mui/material'

import { Header } from './components/Header'
import { CoinDropDown } from './components/CoinDropDown'
import { LineChart } from './components/LineChart'
import { OrderBook } from './components/OrderBook'
import { Bids } from './components/Bids'

import { useGlobalContext } from './context'

function App() {
  const {
    currency,
    handleChange,
    aggregation,
    handleAggChange,
    bidsLineChart,
    asksLineChart,
    bidsArr,
    asksArr,
  } = useGlobalContext()
  return (
    <div className='App' style={{ maxHeight: '95vh' }}>
      <CssBaseline />
      <Container maxWidth='xl'>
        <Grid
          container
          spacing={2}
          justifyContent='space-between'
          sx={{ marginBottom: '20px' }}
        >
          <Grid item>
            <Header />
          </Grid>
          <Grid item>
            <CoinDropDown currency={currency} handleChange={handleChange} />
          </Grid>
        </Grid>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4} justifyContent='space-between'>
            <Grid item xs={12} sm={8} md={8} lg={10}>
              <Bids />
              <LineChart
                bidsLineChart={bidsLineChart}
                asksLineChart={asksLineChart}
              />
            </Grid>
            <Grid item spacing={4} xs={12} sm={4} md={4} lg={2}>
              <OrderBook
                aggregation={aggregation}
                handleAggChange={handleAggChange}
                bidsArr={bidsArr}
                asksArr={asksArr}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  )
}

export default App
