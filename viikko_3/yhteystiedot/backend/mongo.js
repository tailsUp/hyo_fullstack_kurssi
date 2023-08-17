const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

//const password = process.argv[2]
const password = "56ttd8sf"
const consoleName = process.argv[3]
const consoleNumber = process.argv[4]

const url = `mongodb+srv://cluster0Access:${password}@cluster0.u1f6p2g.mongodb.net/personsApp?retryWrites=true&w=majority`
mongoose.set('strictQuery', false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Person = mongoose.model('person', personSchema)

const person = new Person({
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




