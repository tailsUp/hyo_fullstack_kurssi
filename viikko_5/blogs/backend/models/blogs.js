const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

/**
 * Funktio asettaa muuttujaan blogin skeeman.
 */
const blogsSchema = mongoose.Schema({
    id:     String,
    title:  {type: String, required: true}, 
    author: {type: String, required: true},
    url:    {type: String, required: true},
    likes:  {type: Number, default: 0},
    user:   {type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true},
})

//Tarkistaa että blogi on uniikki arvoiltaan. Ei samaa id:tä.
blogsSchema.plugin(uniqueValidator)

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