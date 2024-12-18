/**
 * Kun konsolille lokittaa kehitys vaiheessa kaikkea tietoa niin tätä funktiota voi käyttää
 * apuna haluttujen tekstien korostamiseen konsolilla. 
 */
const logger = (msg) => {
    console.log('----- ----- -----')
    console.log(msg)
    console.log('----- ----- -----')
}

module.exports = { logger }