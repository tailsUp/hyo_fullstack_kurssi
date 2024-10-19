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

/**
 * Funktio etsii headereista Bearer authorization tiedon, muokkaa sen ja asettaa token kenttään.
 * @param {Request} request 
 * @param {Response} response 
 * @param {Next} next 
 * @returns request
 */
const tokenExtractor = (request, response, next) => {
  try 
  {
    request.rawHeaders.map(function(_h)
    {
      if(_h.includes("Bearer")) 
      {
        request.token = _h.replace('Bearer ', '')
      }
        return _h
      });
    return request
  }
  catch (error) 
  {
    console.log('Error in converting token from header to request. ', error)
    next()
  }
}

/**
 * Funktio etsii id:n perusteella käyttäjän tietokannasta ja palauttaa sen requestin user kentässä.
 * @param {Request} request 
 * @param {Response} response 
 * @param {Next} next 
 * @returns request
 */
const userExtractor = async (request, response, next) => {
  try 
  {
    const userID = request.body.userId || request.body.user
    let user = undefined
    if(userID === undefined) 
    {
      const userName = request.body.username
      //user = await Users.findByName(userName)
      user = await Users.find({ username: userName })
    }
    else 
    {
      user = await Users.findById(userID)
    }
    
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
