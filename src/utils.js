export const roundToAggregation = (price, aggregation) => {
  return Math.floor(price / aggregation) * aggregation
}

export const priceGrouping = (levelsArr) => {
  const priceSizeMap = {}
  levelsArr?.forEach((level) => {
    const price = level[0]
    const size = level[1]
    if (priceSizeMap.hasOwnProperty(price)) {
      let addSizes = priceSizeMap[price] + size
      priceSizeMap[price] = Number.parseFloat(addSizes).toFixed(8)
    } else {
      priceSizeMap[price] = Number.parseFloat(size).toFixed(8)
    }
  })
  return Object.entries(priceSizeMap)
}

export const groupByAggregation = (levelsArr, aggregation) => {
  const roundAllPrices = levelsArr?.map((level) => {
    const roundedPrice = roundToAggregation(level[0], aggregation)
    return [roundedPrice.toFixed(2), Number(level[1])]
  })
  return priceGrouping(roundAllPrices)
}
