const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

/**
 * Funktio asettaa muuttujaan blogin skeeman.
 */
const userSchema = mongoose.Schema({
    id:             String,
    username:       {type: String, required: true, unique: true, minlength: 3},
    name:           {type: String, minlength: 3},
    passwordHash:   {type: String, required: true},
    blogs:          [{type: mongoose.Schema.Types.ObjectId, ref: 'Blogs'}],
  })

userSchema.plugin(uniqueValidator)

/**
 * Funktio asettaa skeeman JSON muotoon.
 */
userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.passwordHash
    }
})

module.exports = mongoose.model('Users', userSchema)
