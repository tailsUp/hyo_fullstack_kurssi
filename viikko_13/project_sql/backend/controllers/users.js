const router = require('express').Router()
const { User, Blog } = require('../models')
const _error = require('../util/errorHandler')
const { Op } = require('sequelize')
const {logger } = require('../util/simpleLogger')
const { findByUsername } = require('../util/finders')
const { sessionExtractor, tokenExtractor } = require('../util/extractors')

/**
 * Funktio hakee kaikki käyttäjät.
 */
router.get('/', async (req, res) => {
  logger('Haetaan kaikki käyttäjät')
  const users = await User.findAll({
    include: {
      model: Blog,
      attributes: 
      { 
        attributes: ['title'],
        exclude: ['id', 'name', 'url', 'likes', 'username', 'author', 'user', 'userId', 'year', 'createdAt', 'updatedAt']
      },
    }
  })
  res.json(users)
})

/**
 * Funktio luo uuden käyttäjän.
 */
router.post('/', async (req, res, next) => {
  logger('Luodaan uusi käyttäjä')
  try
  {
    req.body.password = 'root'
    const user = await User.create(req.body)
    res.json(user)
  }
  catch(er) 
  {
    logger('Käyttäjän lisäyksessä tapahtui virhe!')
    if(_error.checkEmail(er.errors)) 
    {
      return _error.errorHandler({ name: 'errorEmail' }, req, res, next)
    }
    return _error.errorHandler({ name: 'errorX' }, req, res, next)
  }
})

/**
 * Funktio hakee käyttäjän id:n perusteella.
 */
router.get('/:id', async (req, res) => {
  logger('Haetaan käyttäjä id:llä')
  let where = {}

  if(req.query.read && req.query.read === 'true')
  {
    where = { is_read: { [Op.is]: true } }
  }
  else if(req.query.read && req.query.read === 'false')
  {
    where = { is_read: { [Op.is]: false } }
  }

  const user = await User.findByPk(req.params.id, {
    include: [
      {
        model: Blog,
        attributes: 
        { 
          attributes: ['title'],
          exclude: ['id', 'name', 'url', 'likes', 'username', 'author', 'user', 'userId', 'year', 'createdAt', 'updatedAt']
        }
      },
      {
        model: Blog,
        as: 'readings',
        attributes: 
        { 
          exclude: ['id', 'name', 'username', 'user', 'userId', 'createdAt', 'updatedAt']
        },
        through: {
        as: 'readingList',
        attributes: ['isRead', 'id'],
        where,
        },
      }
    ]
  })
  if (user) {
    res.json(user)
  } else {
    res.status(404).end()
  }
})

/**
 * Funktio päivittää käyttäjän username kentän avulla.
 */
router.put('/:username', tokenExtractor, sessionExtractor, findByUsername, async (req, res, next) => {
  logger('Päivitetään käyttäjän tietoja')
  try 
  {
    if (req.user[0]) 
    {
      req.user[0].username = req.body.username
      await req.user[0].save()
      return res.json(req.user)
      //res.json(req.blog)
    }
    logger('Käyttäjää ei ole')
    return _error.errorHandler({ name: 'errorX' }, req, res, next)
  }
  catch(er) 
  {
    logger('Käyttäjätunnuksen päivityksessä tapahtui virhe')
    if(_error.checkEmail(er.errors)) 
    {
      return _error.errorHandler({ name: 'errorEmail' }, req, res, next)
    }
    return _error.errorHandler({ name: 'errorX' }, req, res, next)
  }
})

module.exports = router