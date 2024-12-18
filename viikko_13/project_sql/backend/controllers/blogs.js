const router = require('express').Router()
const { Op } = require('sequelize')
const { sessionExtractor, tokenExtractor } = require('../util/extractors')
const { Blog } = require('../models')
const { User } = require('../models')
const _error = require('../util/errorHandler')
const { blogFinder } = require('../util/finders')
const {logger } = require('../util/simpleLogger')

/**
 * Funktio hakee kaikki blogit.
 */
router.get('/', async (req, res) => {
  logger('Haetaan kaikki blogit')
  let where = {}
  /*
  13.13
  [Op.iLike]: '%hat',// ILIKE '%hat' (case insensitive) (PG only)
  if (req.query.search) {
    where.title = {
      [Op.iLike]: req.query.search
      //[Op.substring]: req.query.search
    }
  }*/

  //13.14
  if (req.query.search)
  {
    where = {
      [Op.or]: [
        { title: { [Op.iLike]: `%${req.query.search}%` } },
        { author: { [Op.iLike]: `%${req.query.search}%` } }
      ]
    }
  }

  const blogs = await Blog.findAll(
  {
    attributes: 
    { 
      exclude: ['userId'] 
    },
    include: 
    {
      model: User,
      attributes: ['name']
    },
    where,
    order: [ ['likes', 'DESC'] ] //13.15
  })
  res.json(blogs)
})

/**
 * Funktio luo uuden blogin
 * tokenExtractor, sessionValidator,
 */
router.post('/', tokenExtractor, sessionExtractor, async (req, res, next) => {
  logger('Luodaan uusi blogi')
  try
  {
    const blog = await Blog.create(
      {
        ...req.body
      })
    res.json(blog)
  }
  catch(e)
  {
    if(e.message === 'Validation error: yearError') 
    { 
      return _error.errorHandler({ name: 'errorY' }, req, res, next)
    }
    return _error.errorHandler({ name: 'errorX' }, req, res, next)
  }
})

/**
 * Funktio hakee yksittäisne blogin id perusteella.
 */
router.get('/:id', blogFinder, async (req, res) => {
  logger('Haetaan blogia idn perusteella')
  if (req.blog)
  {
    res.json(req.blog)
    return res.json(req.blogs)
  }
  else
  {
    res.status(404).end()
  }
})

/**
 * Funktio poistaa blogin jos poistopyynnön tekee blogin lisääjä.
 */
router.delete('/:id', tokenExtractor, sessionExtractor, blogFinder, async (req, res, next) => {
  logger('Poistetaan blogi')
  try
  {
    if (req.blog && req.blog.dataValues.userId === req.body.userId)
    {
      await req.blog.destroy()
      logger('POISTETTU')
      res.status(204).end()
    }
    else 
    {
      logger('Blogia ei löydy tai sinulla ei ole oikeuksia poistaa sitä')
      _error.errorHandler({ name: 'errorX' }, req, res, next)
    } 
  }
  catch(err)
  {
    _error.errorHandler({ name: 'errorX' }, req, res, next)
  }
})

/**
 * Funktio päivittää yksittäisen blogin tykkäysten määrän.
 */
router.put('/:id', tokenExtractor, sessionExtractor, blogFinder, async (req, res, next) => {
  logger('Päivitetään blogi')
  if (req.blog)
  {
    req.blog.likes = req.body.likes
    await req.blog.save()
    res.json(req.blog)
  }
  else
  {
    return _error.errorHandler({ name: 'errorX' }, req, res, next)
  }
})

module.exports = router