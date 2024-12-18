const router = require('express').Router()
const { Blog, User, List } = require('../models')
const _error = require('../util/errorHandler')
const { listFinder } = require('../util/finders')
const {logger } = require('../util/simpleLogger')
const { sessionExtractor, tokenExtractor } = require('../util/extractors')

/**
 * Funktio hakee kaikki lukulistat.
 */
router.get('/', async (req, res, next) => {
  logger('Haetaan lukulista')
  try
  {
    const list = await List.findAll({})
    res.json(list)
  }
  catch(err)
  {
    console.log(err)
    _error.errorHandler({ name: 'errorX' }, req, res, next)
  }
})

/**
 * Funktio hakee käyttäjän oman lukulistan.
 */
router.get('/:id', async (req, res, next) => {
  logger('Haetaan käyttäjän oma lukulista')
  try
  {
    const userList = await List.findAll(
      {
          where: 
          {
              userId: req.params.id
          }
      })
      res.json(userList)
  }
  catch(err)
  {
    _error.errorHandler({ name: 'errorX' }, req, res, next)
  }

})

/**
 * Funktio luo lukulista"elementin".
 */
router.post('/', tokenExtractor, sessionExtractor, async (req, res, next) => {
  try
  {
    logger('Luodaan lukulista')
    const u = await User.findByPk(req.body.userId)
    const b = await Blog.findByPk(req.body.blogId)
    if (u && b)
    {
      const list = await List.create(
      {
        blogId: b.dataValues.id,
        userId: u.dataValues.id
      })
      res.json(list)
    }
    else
    {
      logger('Käyttäjää tai blogia ei löydy!')
      _error.errorHandler({ name: 'errorX' }, req, res, next)
    }
  }
  catch(err)
  {
    console.log(err)
    _error.errorHandler({ name: 'errorX' }, req, res, next)
  }
})

/**
 * Funktio päivittää listan luettu-arvon sen id:n perusteella.
 */
router.put('/:id', tokenExtractor, sessionExtractor, listFinder, async (req, res, next) => {
  logger('Päivitetään listaa')
  if (req.list)
  {
    req.list.isRead = req.body.read
    await req.list.save()
    res.json(req.list)
  } 
  else
  {
    //return res.status(404).end()
    return _error.errorHandler({ name: 'errorX' }, req, res, next)
  }
})

module.exports = router