/**
 * Funktio lokittaa konsoliin infoviestin.
 * @param  {...any} params - viestin sisältö.
 */
const info = (...params) => {

    if (process.env.NODE_ENV !== 'test') 
    {
        console.log(...params)
    }
}

/**
 * Funktio lokittaa konsoliin errorviestin.
 * @param  {...any} params - viestin sisältö.
 */
const error = (...params) => {

    if (process.env.NODE_ENV !== 'test') 
    {
        console.error(...params)
    }
}

module.exports = {
    info, error
}
