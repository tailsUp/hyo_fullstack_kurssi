const User = require('../models/user')
const jwt = require('jsonwebtoken')

/**
 * Funktio etsii headereista Bearer authorization tiedon, muokkaa sen ja asettaa token kenttään.
 * @param {Request} request 
 * @param {Response} response 
 * @param {Next} next 
 * @returns request
 */
/*const tokenExtractor = (request, response, next) => {
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
      console.log('----- ----- -----')
      console.log('Error in converting token from header to request. ', error)
      console.log('----- ----- -----')
      next()
    }
}*/

const tokenExtractor = (req, res, next) => {
  const authorization = req.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer '))
  {
      try
      {
          req.decodedToken = jwt.verify(authorization.substring(7), process.env.SECRET)
      }
      catch
      {
        console.log('----- ----- -----')
        console.log('Error in converting token from header to request. TOKEN INVALID ')
        console.log('----- ----- -----')
        return res.status(401).json({ error: 'token invalid' })
      }
  }
  else
  {
      console.log('----- ----- -----')
      console.log('Error in converting token from header to request. TOKEN MISSING ')
      console.log('----- ----- -----')
      return res.status(401).json(
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
    try 
    {
      const userID = request.body.userId || request.body.user
      const user = await User.findById(userID)
      if(user) 
      {
        console.log('USER: ', user)
        request.user = user
      }
      return request
    }
    catch (error)
    {
      console.log('----- ----- -----')
      console.log('Virhe käyttäjän haussa: ', error)
      console.log('----- ----- -----')
      next()
    }
}

module.exports = { tokenExtractor, userExtractor }