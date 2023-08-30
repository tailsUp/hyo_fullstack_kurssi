const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const consoleName = process.argv
const consoleNumber = process.argv[4]

const url = `mongodb+srv://cluster0Access:${password}@cluster0.u1f6p2g.mongodb.net/personsApp?retryWrites=true&w=majority`
mongoose.set('strictQuery', false)
mongoose.connect(url)

/*const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})*/

const personSchema = new mongoose.Schema({
  name: { type: String, minlength: 3, required: [true, 'User name required'] },
  number: { type: String, minlength: 8,
    validate: {
      validator: function(v) {
        return /[0-9]{2,3}\-[0-9]{5,10}$/.test(v)
      },
      //message: props => `${props.value} is not a valid phone number!`
      message: props => 'Given number is not a valid phone number!'
    },
    required: [true, 'User phone number required']
  }
})

const Person = mongoose.model('person', personSchema)

const person = new Person(
  console.log(consoleName),
  {
    name: consoleName,
    number: consoleNumber
  })

if(consoleName === undefined || consoleNumber === undefined)
{
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person)
    })
    mongoose.connection.close()
  })
}
else
{
  person.save().then(result => {
    mongoose.connection.close()
    console.log(`added ${consoleName} number ${consoleNumber} to phonebook`)
  })
}
