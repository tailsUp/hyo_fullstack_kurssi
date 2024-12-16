const router = require('express').Router()
//const { ValidationError } = require('sequelize')
const { User } = require('../models')
//const { Note } = require('../models')
const { Blog } = require('../models')
const error = require('../util/errorHandler')

const findByUsername = async (req, res, next) => {
  console.log('----- ----- -----')
  console.log('Etsitään käyttäjä käyttäjänimellä')
  console.log('----- ----- -----')
  req.user = await User.findAll({
    where: {
      username: req.params.username,
    }
  })
  next()
}

router.get('/', async (req, res) => {
  console.log('----- ----- -----')
  console.log('Haetaan kaikki käyttäjät')
  console.log('----- ----- -----')
  const users = await User.findAll({
    include: {
      model: Blog,
      attributes: 
      { 
        attributes: ['title'],
        //exclude: ['id', 'name', 'url', 'likes', 'username', 'author', 'user', 'userId']
        exclude: ['id', 'name', 'url', 'likes', 'username', 'author', 'user', 'userId', 'year', 'createdAt', 'updatedAt']
      }
    }
  })
  res.json(users)
})

router.post('/', async (req, res, next) => {
  console.log('----- ----- -----')
  console.log('Luodaan uusi käyttäjä')
  console.log('----- ----- -----')
  try
  {
    req.body.password = 'root'
    const user = await User.create(req.body)
    res.json(user)
  }
  catch(er) 
  {
    console.log('----- ----- -----')
    console.log('Käyttäjän lisäyksessä tapahtui virhe!', er)
    console.log('----- ----- -----')
    if(error.checkEmail(er.errors)) 
    {
      console.log('ASDASDADSAD')
      return error.errorHandler({ name: 'errorEmail' }, req, res, next)
    }
    return error.errorHandler({ name: 'errorX' }, req, res, next)
  }
})

router.get('/:id', async (req, res) => {
  console.log('----- ----- -----')
  console.log('Luodaan käyttäjä id:llä')
  console.log('----- ----- -----')
  const user = await User.findByPk(req.params.id)
  if (user) {
    res.json(user)
  } else {
    res.status(404).end()
  }
})

router.put('/:username', findByUsername, async (req, res, next) => {
  console.log('----- ----- -----')
  console.log('Päivitetään käyttäjätunnus')
  console.log('----- ----- -----')
  try 
  {
    if (req.user[0]) 
      {
      req.user[0].username = req.body.username
      await req.user[0].save()
      return res.json(req.user)
      //res.json(req.blog)
    }
    console.log('----- ----- -----')
    console.log('Käyttäjää ei ole')
    console.log('----- ----- -----')
    return error.errorHandler({ name: 'errorX' }, req, res, next)
  }
  catch(er) 
  {
    console.log('----- ----- -----')
    console.log('Käyttäjätunnuksen päivityksessä tapahtui virhe')
    console.log('----- ----- -----')
    if(error.checkEmail(er.errors)) 
    {
      return error.errorHandler({ name: 'errorEmail' }, req, res, next)
    }
    return error.errorHandler({ name: 'errorX' }, req, res, next)
  }

})

module.exports = router