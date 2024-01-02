const blogsRouter = require('express').Router()
const middleware = require('../utils/middleware')
const jwt = require('jsonwebtoken')
const Blogs = require('../models/blogs')
const User = require('../models/users')

/**
 * Funktio palauttaa tietokannan kaiken sisällön JSON olioina.
 */
blogsRouter.get('/', async (request, response) => {
    //const blogs = await Blogs.find({})
    try
    {
        console.log('GET ALL BLOG POSTS')
        const blogs = await Blogs.find({}).populate('user', {
            username: 1,
            name: 1,
        })
        response.json(blogs)
    }
    catch (error)
    {
        console.log('ERROR IN LOADING BLOGS FROM DB! Error: \n', error)
    }
})

/**
 * Funktio palauttaa yksittäisen olion tietokannasta, jos sellaisen löytää.
 */
blogsRouter.get('/:id', async (request, response) => {
    const blogs = await Blogs.findById(request.params.id).populate('user', {
        username: 1,
        name: 1,
    })
    if (blogs) {
        response.json(blogs)
    } else {
        response.status(404).json(blogs)
    }
})

/*const getUser = async ( username ) => {
    try
    {
        const _user = await User.find((user) => user.username === username)
        console.log('user: ', _user)
        return _user
    }
    catch(error)
    {
        console.log('ERROR: ', error)
        return ''
    }
}*/

/**
 * Funktio lisää olion tietokantaan.
 */
blogsRouter.post('/', async (request, response, next) => {

    console.log('Blogsrouter - aloitetaan olion tallentaminen tietokantaan.')

    const body = request.body

    //await middleware.userExtractor(request, response, next)
    request = await middleware.userExtractor(request, response, next)
    request = await middleware.tokenExtractor(request, response, next)
    const decodedToken = jwt.verify(request.token, process.env.SECRET)
    
    if (!decodedToken.id) {
        return response.status(401).json({ error: 'token invalid' })
    }

    if (request.user) {
        console.log('TÄNNE TULI MYÖS')
        console.log()
        let user = undefined
        if (Array.isArray(request.user)) {
            user = request.user[0]
        } else {
            user = request.user
        }
        
        const blogs = new Blogs({
            title: body.title,
            author: body.author,
            url: body.url,
            likes: body.likes,
            user: user._id,
        })

        const savedBlog = await blogs.save()

        //Nämä kaksi riviä tallentavat tiedon luoduista blogeista!
        user.blogs = user.blogs.concat(savedBlog._id)
        await user.save()
        console.log('savedBlog: ', savedBlog)
        response.status(201).json(savedBlog)
    }
})

/**
 * Funktio poistaa tietokannasta olion, jos authorization token on ok. Jos authorization token puuttuu niin ilmoitetaan väärästä tokenista.
 * (Viikko 4 tehtävä 4.21)
 */
blogsRouter.delete('/:id', async (request, response) => {
    const deleteID = request.params.id
    request = middleware.tokenExtractor(request, response)
    const decodedToken = jwt.verify(request.token, process.env.SECRET)

console.log('DELETE TOKEN: ', decodedToken)

    if (!decodedToken.id) {
        return response
            .status(401)
            .json({ error: 'token invalid - NOTHING was deleted' })
    } else {
        await Blogs.findByIdAndRemove(deleteID)
        await User.findByIdAndRemove
        response.status(204).end()
        return response.status()
    }
})

/**
 * Funtkio päivittää olemassaolevan olion tietokannassa.
 */
blogsRouter.put('/:id', (request, response, next) => {
    const body = request.body

    const blogs = {
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes,
    }

    Blogs.findByIdAndUpdate(request.params.id, blogs, { new: true })
        .then((updatedBlogs) => {
            response.json(updatedBlogs)
        })
        .catch((error) => next(error))
})

module.exports = blogsRouter
