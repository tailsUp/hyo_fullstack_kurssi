/**
 * Funktio palauttaa käännetyn String muuttujan.
 */
const reverse = (string) => {
  return string
    .split('')
    .reverse()
    .join('')
}

/**
 * Funktio palauttaa taulukon summien keskiarvon.
 */
const average = array => {
  const reducer = (sum, item) => {
    return sum + item
  }
  return array.length === 0
    ? 0
    : array.reduce(reducer, 0) / array.length
}

module.exports = {
  reverse,
  average,
}
