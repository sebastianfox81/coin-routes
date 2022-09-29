import React from 'react'
import { Box, Typography } from '@mui/material'

const Header = () => {
  return (
    <div>
      <Box sx={{ backgroundColor: 'white', borderRadius: 2 }}>
        <Typography
          data-testid='header-title'
          align='center'
          variant='h4'
          gutterBottom={true}
          sx={{ color: '#1A2027', marginTop: 3, padding: 1 }}
        >
          CoinRoutes
        </Typography>
      </Box>
    </div>
  )
}

export default Header
