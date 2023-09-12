const logger = require('./logger')
const Users = require('../models/users')

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

  if (error.name === 'CastError') 
  {
    return response.status(400).send({ error: 'malformatted id' })
  } 
  else if (error.name === 'ValidationError') 
  {
    return response.status(400).json({ error: error.message })
  } 
  else if (error.name === 'JsonWebTokenError') 
  {
    return response.status(400).json({ error: 'token missing or invalid' })
  }
  else if (error.name === 'TokenExpiredError') 
  {    
    return response.status(401).json({ error: 'token expired' })
  }
  next(error)
}

const tokenExtractor = (request, response, next) => {
  try 
  {
    const token = request.rawHeaders[3].replaceAll('Bearer ', '')
    if (token) 
    {    
      request.token = token
      
    }
    return request
  }
  catch (error) 
  {
    console.log('Error in converting token from header to request. ', error)
    next()
  }
}

const userExtractor = async (request, response, next) => {
  try 
  {
    const user = await Users.findById(request.body.userId)
    if(user) 
    {
      request.user = user
    }
    return request
  }
  catch (error)
  {
    console.log('Virhe käyttäjän haussa: ', error)
    next()
  }
}

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler,
  tokenExtractor,
  userExtractor,
}
