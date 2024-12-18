const { User } = require('../models/user')
const jwt = require('jsonwebtoken')
const { logger } = require('../util/simpleLogger')
const { SECRET } = require('../util/config')
const { findUserByID, findSessionByID } = require('../util/finders')
const _error = require('../util/errorHandler')
/**
 * Funktio palauttaa käyttäjän tokenin
 * @param {Request} request 
 * @param {Response} response 
 * @param {Next} next 
 * @returns 
 */
const tokenExtractor = (request, response, next) => {
  logger('tokenExtractor')
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer '))
  {
    try
    {
      request.decodedToken = jwt.verify(authorization.substring(7), SECRET)
    }
    catch
    {
      logger('Error in converting token from header to request. TOKEN INVALID ')
      return response.status(401).json({ error: 'token invalid' })
    }
  }
  else
  {
    logger('Error in converting token from header to request. TOKEN MISSING ')
    return response.status(401).json(
    {
      error: 'token missing'
    })
  }
  next()
}

/**
 * Funktio etsii id:n perusteella käyttäjän tietokannasta ja palauttaa sen requestin user kentässä.
 * @param {Request} request 
 * @param {Response} response 
 * @param {Next} next 
 * @returns request
 */
const userExtractor = async (request, response, next) => {
  logger('userExtractor')
  try 
  {
    const userID = request.body.userId || request.body.user
    const user = await findUserByID(userID)
    if(user) 
    {
      request.user = user
    }
    next()
  }
  catch (err)
  {
    return _error.errorHandler({ name: 'XXXXXXX' }, request, response, next)
  }
}

const sessionExtractor = async (request, response, next) => {
  logger('sessionExtractor')
  try
  {
    const authorization = request.get('authorization')
    //Bearer pitää "hakea" erikseen että toimii. Pelkkä auth ei riitä.
    if (authorization && authorization.toLowerCase().startsWith('bearer '))
    {
      request.decodedToken = jwt.verify(authorization.substring(7), SECRET)
      const _id = request.decodedToken.id
      const _sesId = request.decodedToken.sessionId
      const user = await findUserByID(_id)
      const session = await findSessionByID(_id, _sesId)
  
      if (!(session))
      {
        return _error.errorHandler({ name: 'TokenExpiredError' }, request, response, next)
      }
      if (!(session.active)) {
        return _error.errorHandler({ name: 'SessionExpiredError' }, request, response, next)
      }  
      if (user.disabled)
      {
        session.isValid = false
        await session.save()
        return _error.errorHandler({ name: 'UserDisabled' }, request, response, next)
      }
    }
    next()
  }
  catch(err)
  {
    return _error.errorHandler({ name: 'noSession' }, request, response, next)
  }
}

module.exports = { tokenExtractor, userExtractor, sessionExtractor }