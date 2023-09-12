const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/users')

/**
 * Funktio palauttaa kaikki käyttäjät.
 */
usersRouter.get('/', async (request, response) => {
    //const users = await User.find({})
    console.log('USERS')
    const users = await User.find({}).populate('blogs', {title: 1, author: 1, url: 1, likes: 1})

    response.json(users)
  })

  /**
   * Funktio lisää käyttäjän.
   */
usersRouter.post('/', async (request, response) => {
    const body = request.body

    const saltRounds = 10
    const _passwordHash = await bcrypt.hash(body.passwordHash, saltRounds)

    const user = new User({
        username: body.username,
        name: body.username || '',
        passwordHash: _passwordHash,
    })

    const savedUser = await user.save()
    response.status(201).json(savedUser)
})

module.exports = usersRouter