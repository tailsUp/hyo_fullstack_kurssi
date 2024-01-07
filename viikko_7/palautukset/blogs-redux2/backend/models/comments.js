const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

/**
 * Funktio asettaa muuttujaan blogin skeeman.
 */
const commentsSchema = mongoose.Schema({
    id: String,
    comment: { type: String, required: true, minlength: 1 },
    blogID: { type: String, required: true },
    userID: { type: String, required: true },
})

commentsSchema.plugin(uniqueValidator)

/**
 * Funktio asettaa skeeman JSON muotoon.
 */
commentsSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    },
})

module.exports = mongoose.model('Comments', commentsSchema)