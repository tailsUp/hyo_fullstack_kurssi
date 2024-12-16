const router = require('express').Router()
const { Op } = require('sequelize')

const { Blog } = require('../models')
const { User } = require('../models')
const _error = require('../util/errorHandler')

const blogFinder = async (req, res, next) => {
  req.blog = await Blog.findByPk(req.params.id)
  next()
}

router.get('/', async (req, res) => {
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
  if (req.query.search) {
    where = {
      [Op.or]: [
        { title: { [Op.iLike]: `%${req.query.search}%` } },
        { author: { [Op.iLike]: `%${req.query.search}%` } }
      ]
    }
  }

  const notes = await Blog.findAll({
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

  res.json(notes)
})


router.post('/', async (req, res, next) => {
  console.log('----- ----- -----')
  console.log('Luodaan uusi blogi')
  console.log('----- ----- -----')
  try {
    const blog = await Blog.create({...req.body})
    console.log(blog.body)
    res.json(blog)
  } catch(e) {
    if(e.message === 'Validation error: yearError') 
    { 
      return _error.errorHandler({ name: 'errorY' }, req, res, next)
    }
    return _error.errorHandler({ name: 'errorX' }, req, res, next)
  }
})

router.get('/:id', blogFinder, async (req, res) => {
  //const Blog = await Blog.findByPk(req.params.id)
  console.log('----- ----- -----')
  console.log('Haetaan blogia idn perusteella')
  console.log('----- ----- -----')
  if (req.blog) {
    res.json(req.blog)
    return res.json(req.blogs)
  } else {
    res.status(404).end()
  }
})

/**
 * Blogin tiedoissa oleva tieto lisääjästä pitää sopia yhteen poistajan nimimerkin kanssa.
 */
router.delete('/:id', blogFinder, async (req, res, next) => {
  console.log('----- ----- -----')
  console.log('Poistetaan blogi')
  console.log('----- ----- -----')
  //if (req.blog && req.blog.dataValues.username === req.body.username) {
  try
  {
    console.log('ID1: ', req.blog.dataValues.userId)
    console.log('ID2: ', req.body.userId)
    if (req.blog && req.blog.dataValues.userId === req.body.userId) {
      await req.blog.destroy()
      console.log('----- ----- -----')
      console.log('POISTETTU')
      console.log('----- ----- -----')
      res.status(204).end()
    }
    else 
    {
      console.log('USERID DOESNT MATCH!')
      _error.errorHandler({ name: 'errorX' }, req, res, next)
    }
    
  }
  catch(err)
  {
    console.log(err)
    _error.errorHandler({ name: 'errorX' }, req, res, next)
  }

  
})

router.put('/:id', blogFinder, async (req, res, next) => {
  console.log('----- ----- -----')
  console.log('Päivitetään blogi')
  console.log('----- ----- -----')
    //const blog = await Blog.findByPk(req.params.id)
    if (req.blog) {
      console.log(req.blog.toJSON())
      req.blog.likes = req.body.likes
      await req.blog.save()
      res.json(req.blog)
    } else {
      //return res.status(404).end()
      return _error.errorHandler({ name: 'errorX' }, req, res, next)
    }
})

module.exports = router