//Muut:
const express = require('express')
require('express-async-errors')
const app = express()
const cors = require('cors')
//Utils:
const middleware = require('./utilOLD/middleware')
const logger = require('./utilOLD/logger')
const config = require('./utilOLD/config')
//Controller:
const blogsRouter = require('./controllersOLD/blogs')
const usersRouter = require('./controllersOLD/users')
const loginRouter = require('./controllersOLD/login')
//Mongoose:
const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

logger.info('connecting to', config.MONGODB_URI)

/**
 * Funktio yhdistää applikaation tietokantaan.
 */
mongoose.connect(config.MONGODB_URI)
    .then(() => {
        logger.info('connected to MongoDB')
    })
    .catch((error) => {
        logger.error('error connection to MongoDB:', error.message)
    })

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

app.use('/api/blogs', blogsRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

app.use(middleware.userExtractor)
app.use(middleware.tokenExtractor)
app.use(middleware.requestLogger)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
