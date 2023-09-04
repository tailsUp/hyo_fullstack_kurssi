const blogsRouter = require('express').Router()
const Blogs = require('../models/blogs')

/**
 * Funktio palauttaa tietokannan kaiken sisällön JSON olioina.
 */
blogsRouter.get('/', (request, response) => {
    Blogs.find({}).then(blogs => {
        response.json(blogs)
    })
})

/**
 * Funktio palauttaa yksittäisen olion tietokannasta, jos sellaisen löytää.
 */
blogsRouter.get('/:id', (request, response, next) => {
    Blogs.findById(request.params.id)
        .then(blogs => {
            if (blogs) {
                response.json(blogs)
            } else {
                response.status(404).end()
            }
        })
        .catch(error => next(error))
})

/**
 * Funktio lisää olion tietokantaan.
 */
blogsRouter.post('/', (request, response, next) => {
    const body = request.body

    const blogs = new Blogs({
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes,
    })

    blogs.save()
        .then(savedBlogs => {
            response.json(savedBlogs)
        })
        .catch(error => next(error))
})

/**
 * Funktio poistaa tietokannasta olion.
 */
blogsRouter.delete('/:id', (request, response, next) => {
    Blogs.findByIdAndRemove(request.params.id)
        .then(() => {
            response.status(204).end()
        })
        .catch(error => next(error))
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
        .then(updatedBlogs => {
            response.json(updatedBlogs)
        })
        .catch(error => next(error))
})

module.exports = blogsRouter
