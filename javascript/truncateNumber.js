const truncateNumber = (number, decimalSize = 2) => {
  const [integer, decimals = ''] = (String(number)).split('.')
  const truncatedDecimals = decimals.substring(0, decimalSize)
  return parseFloat(`${integer}.${truncatedDecimals}`)
}

export default truncateNumber
