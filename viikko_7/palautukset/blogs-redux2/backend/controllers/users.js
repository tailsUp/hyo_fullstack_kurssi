const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/users')

/**
 * Funktio palauttaa kaikki käyttäjät.
 */
usersRouter.get('/', async (request, response) => {
    console.log('GET ALL USERS')
    const users = await User.find({}).populate('blogs', {
        title: 1,
        author: 1,
        url: 1,
        likes: 1,
    })
    //const users = await User.find({})
    response.json(users)
})

/**
 * Funktio lisää käyttäjän.
 */
usersRouter.post('/', async (request, response) => {
    console.log('ADD NEW USER')
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

/**
 * Funtkio päivittää olemassaolevan olion tietokannassa.
 * Tämä tapahtuu mm. kun frontendissä poistetaan blogi.
 */
usersRouter.put('/:id', (request, response, next) => {
    const body = request.body

    console.log('userRouter update. BODY: ', body)

    const test = body.blogs.map((b) => {
        return b.id
    })

    const user = {
        username: body.username,
        blogs: test,
        __v: body.__v
    }

    console.log('MUOKATTU BLOGS USER: ', user)

    User.findByIdAndUpdate(request.params.id, user, { new: true })
        .then((updatedUser) => {
            response.json(updatedUser)
        })
        .catch((error) => next(error))
})

module.exports = usersRouter
