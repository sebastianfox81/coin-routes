import * as React from 'react'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import {
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from '@mui/material'

const CoinDropDown = ({ currency, handleChange }) => {
  const handleCurrencyChange = (event: SelectChangeEvent) => {
    handleChange(event.target.value)
  }

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120, marginTop: 3 }}>
        <InputLabel
          data-testid='label-text'
          id='demo-simple-select-helper-label'
        >
          Coin
        </InputLabel>
        <Select
          data-testid='coin-input'
          labelId='demo-simple-select-helper-label'
          id='demo-simple-select-helper'
          value={currency}
          label='Currency'
          onChange={handleCurrencyChange}
        >
          <MenuItem value='BTC-USD'>BTC-USD</MenuItem>
          <MenuItem value='ETH-USD'>ETH-USD</MenuItem>
          <MenuItem value='LTC-USD'>LTC-USD</MenuItem>
          <MenuItem value='BCH-USD'>BCH-USD</MenuItem>
        </Select>
        <FormHelperText>Select currency</FormHelperText>
      </FormControl>
    </div>
  )
}

export default CoinDropDown
