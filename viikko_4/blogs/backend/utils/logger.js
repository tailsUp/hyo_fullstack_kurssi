/**
 * Funktio lokittaa konsoliin infoviestin.
 * @param  {...any} params - viestin sisältö.
 */
const info = (...params) => {
    console.log(...params)
}

/**
 * Funktio lokittaa konsoliin errorviestin.
 * @param  {...any} params - viestin sisältö.
 */
const error = (...params) => {
    console.error(...params)
}

module.exports = {
    info, error
}