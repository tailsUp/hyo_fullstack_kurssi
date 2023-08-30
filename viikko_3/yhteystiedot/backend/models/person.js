const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const url = process.env.MONGODB_URI

console.log('connecting to', url)
mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

/*
const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})
*/

/*const personSchema = new mongoose.Schema({
    name: {type: String, required: true, min: [3, 'Name must be atleast three characters long']},
    number: {type: String, required: true, validate: [/\b[0-9]{2,3}\b-*-\d+/, 'Number is not in right format']},
})*/

const personSchema = new mongoose.Schema({
  name: { type: String, minlength: 3, required: [true, 'User name required'] },
  number: { type: String,
    validate: {
      validator: function(v) {
        return /[0-9]{2,3}\-[0-9]{5,10}$/.test(v)
      },
      message: props => `${props.value} is not a valid phone number!`
    },
    required: [true, 'User phone number required']
  }
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Person', personSchema)