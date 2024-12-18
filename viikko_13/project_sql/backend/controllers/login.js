const jwt = require('jsonwebtoken')
const router = require('express').Router()
const { logger } = require('../util/simpleLogger')
const { SECRET } = require('../util/config')
const Session = require('../models/session')
const { findUserByUsername, findSessionByUserId } = require('../util/finders')
const _error = require('../util/errorHandler')

/**
 * Funktiota käytetään käyttäjän kirjaamiseen sisään ohjelmaan.
 */
router.post('/', async (request, response, next) => {
  logger('Login user (backend)')
  const body = request.body
  const _username = body.username
  const user = await findUserByUsername(_username)

  const passwordCorrect = body.password === 'root'

  if (!(user && passwordCorrect))
  {
    return _error.errorHandler({ name: 'errorX' }, request, response, next)
  }

  if (user.disabled)
  {
    return _error.errorHandler({ name: 'errorX' }, request, response, next)
  }

  const _id = user.id
  const exists = await findSessionByUserId(_id)
  console.log('EXISTS: ', exists)
  if(exists) 
  {
    console.log('Tuhotaan vanhat sessiot.')
    await exists.destroy()
  }

  const newSession = await Session.create(
  {
    userId: user.id,
    active: true,
  })

  const userSession = {
    username: user.username,
    id: user.id,
    sessionId: newSession.id
  }

  const token = jwt.sign(userSession, SECRET)
  //console.log('TOKEN: ', token)
  response.status(200).send(
  { 
    token, 
    username: user.username, 
    name: user.name 
  })
})

module.exports = router