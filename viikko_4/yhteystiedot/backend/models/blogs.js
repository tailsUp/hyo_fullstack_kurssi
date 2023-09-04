const mongoose = require('mongoose')

/**
 * Funktio asettaa muuttujaan blogin skeeman.
 */
const blogsSchema = mongoose.Schema({
    id: String,
    title: String,
    author: String,
    url: String,
    likes: Number,
})

/**
 * Funktio asettaa skeeman JSON muotoon.
 */
blogsSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Blogs', blogsSchema)