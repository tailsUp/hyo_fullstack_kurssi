const logger = require('./logger')

/**
 * Funktio lokittaa konsoliin pyynnön tietoja.
 * @param {Request} request     - pyyntö.
 * @param {Response} response   - vastaus.
 * @param {Next} next           - eteenpäin siirrettävä virheviesti.
 */
const requestLogger = (request, response, next) => {
  logger.info('Method:', request.method)
  logger.info('Path:  ', request.path)
  logger.info('Body:  ', request.body)
  logger.info('---')
  next()
}

/**
 * Funktio lokittaa virheviestin jos kutsutaan osoitetta jota applikaatiossa ei ole.
 * @param {Request} request     - pyyntö.
 * @param {Response} response   - vastaus. 
 */
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

/**
 * Funktio lokittaa virheviestit kun tiedon käsittelyssä tapahtuu virhe.
 * @param {Error} error       - tapahtunut virhe. 
 * @param {Request} request   - pyyntö. 
 * @param {Response} response - vastaus.
 * @param {Next} next         - eteenpäin siirrettävä virheviesti.
 * @returns 
 */
const errorHandler = (error, request, response, next) => {
  logger.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }
  next(error)
}

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler
}