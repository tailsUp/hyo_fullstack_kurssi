const express = require('express')
const app = express()
//Muut:
require('express-async-errors')
const cors = require('cors')

const { PORT } = require('./util/config')
const { connectToDatabase } = require('./util/db')

const notesRouter = require('./controllers/notes')
const blogsRouter = require('./controllers/blogs')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const authorRouter = require('./controllers/authors')

const errors = require('./util/errorHandler')

app.use(express.json())
app.use(cors())

app.use('/api/notes', notesRouter)
app.use('/api/blogs', blogsRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)
app.use('/api/authors', authorRouter)

app.use(errors.errorHandler)

const start = async () => {
    await connectToDatabase()
    app.listen(PORT, () => {
        console.log('----- ----- -----')
        console.log(`Server running on port ${PORT}`)
        console.log('----- ----- -----')
    })
}

start()