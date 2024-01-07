/* eslint-disable no-unused-vars */
const commentsRouter   = require('express').Router()
const User          = require('../models/users')
const Comments      = require('../models/comments')
const middleware    = require('../utils/middleware')
const jwt           = require('jsonwebtoken')

/**
 * Funktio palauttaa kaikki kommentit.
 */
commentsRouter.get('/', async (request, response) => {
    console.log('GET ALL COMMENTS')
    const comments = await Comments.find({})
    /*const comments = await Comments.find({}).populate('user', {
        username: 1,
        name: 1,
    })*/
    response.json(comments)
})

/**
 * Funktio lisää kommentin.
 */
commentsRouter.post('/', async (request, response, next) => {
    console.log('ADD NEW COMMENT')
    console.log('ASDASD: ', request.body)

    const body = request.body
    request = await middleware.userExtractor(request, response, next)
    request = await middleware.tokenExtractor(request, response, next)
    const decodedToken = jwt.verify(request.token, process.env.SECRET)

    if (!decodedToken.id) {
        return response.status(401).json({ error: 'token invalid' })
    }

    if (request.user) {
        let user = undefined
        if (Array.isArray(request.user)) {
            user = request.user[0]
        } else {
            user = request.user
        }
        
        const comment = new Comments({
            comment: body.comment,
            blogID: body.blogID,
            userID: body.userID,
        })

        const savedComment = await comment.save()

        //Nämä kaksi riviä tallentavat tiedon luoduista blogeista!
        console.log('savedBlog: ', savedComment)
        response.status(201).json(savedComment)
    }
})

module.exports = commentsRouter
