import React from 'react'

const AggDropdown = ({ aggregation, handleAggChange }) => {
  const handleChange = (e) => {
    handleAggChange(e.target.value)
  }

  return (
    <div>
      <div>
        <select
          value={aggregation}
          onChange={handleChange}
          data-testid='agg-input'
        >
          <option value={0.01}>.01</option>
          <option value={0.5}>.50</option>
          <option value={1}>1</option>
          <option value={2.5}>2.5</option>
        </select>
      </div>
    </div>
  )
}

export default AggDropdown
