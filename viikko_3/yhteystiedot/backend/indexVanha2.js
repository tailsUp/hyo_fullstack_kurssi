
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
//const mongoose = require('mongoose')
const Person = require('./models/person')

app.use(cors())
app.use(express.json())
app.use(express.static('dist'))
//app.use(morgan('tiny'))                                                                   //TEHTÄVÄ 3.7
app.use(morgan(':method :path :status :res[content-length] - :response-time ms :object'));  //TEHTÄVÄ 3.8

/*const password = "56ttd8sf"
const consoleName = process.argv[3]
const consoleNumber = process.argv[4]*/
//const url = `mongodb+srv://cluster0Access:${password}@cluster0.u1f6p2g.mongodb.net/personsApp?retryWrites=true&w=majority`
//const url = `mongodb+srv://cluster0Access:${password}@cluster0.u1f6p2g.mongodb.net/personsApp?retryWrites=true&w=majority`

/*mongoose.set('strictQuery',false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
})

const Person = mongoose.model('Person', personSchema)

app.get('/api/persons2', (request, response) => {
    console.log('ASDASDASDASDASDAS')
    Person.find({}).then(persons => {
      response.json(persons)
    })
})*/

let persons = []

app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
      response.json(persons)
    })
})
  
app.post('/api/persons', (request, response) => {
    const body = request.body
  
    if (body.content === undefined) {
      return response.status(400).json({ error: 'content missing' })
    }
  
    const person = new Person({
      content: body.content,
      important: body.important || false,
    })
  
    note.save().then(savedNote => {
      response.json(savedNote)
    })
  })
  
  app.get('/api/notes/:id', (request, response) => {
    Note.findById(request.params.id).then(note => {
      response.json(note)
    })
  })
  
  app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)
  
    response.status(204).end()
  })

//ROUTET

/**
 * tehtävä 3.2
 */
app.get('/info', (req, res) => {
    const pvm = new Date()
    res.send(`<div><p>Phonebook has info for ${persons.length} people</p><p>${pvm}</p></div>`)
  })

/**
 * Funktio palauttaa H1-elementin tekstillä: "Hello World!" jos osoitteena käytetään http://localhost:3001/
 * 
 * request sisältää kaikki HTTP-pyynnön tiedot ja toisen parametrin response:n avulla määritellään, miten pyyntöön vastataan.
 */
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

/**
 * Funktio palauttaa tietokannan json muodossa jos osoitteena käytetään http://localhost:3001/api/persons
 * 
 * request sisältää kaikki HTTP-pyynnön tiedot ja toisen parametrin response:n avulla määritellään, miten pyyntöön vastataan.
 */
app.get('/api/persons', (req, res) => {
  console.log('Persons nouto serveriltä!')
  res.json(persons)
})

/**
 * Funktio hakee yksittäisen resurssin (yhteystiedon) id:n perusteella. Jos id:tä ei löydy niin palautetaan Network virhe 404.
 */
app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)  
    const contact = persons.find(personContact => personContact.id === id)
    response.json(contact)

    if(contact)
    {
        response.json(contact) 
    }
    else
    {
        response.status(404).end()
    }
})

/**
 * Funktio poistaa tietokannasta yksittäisen olion id:n perusteella ja palauttaa lopuksi Network koodin 204.
 */
app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(personContact => personContact.id !== id)
  
    response.status(204).end()
})

const duplicateContact = (name) => {
    const dup = persons.map(pe => pe.name === name)
    if(dup === undefined) 
    {
        return true
    }   
    return false
}

app.post('/api/notes', (request, response) => {
    const body = request.body
    if (body.content === undefined) 
    {
      return response.status(400).json({ error: 'content missing' })
    }
    else if(personContact.name === undefined || personContact.number === undefined) 
    {
        console.log('name or number is empty - NO CONTACTS ADDED!')
        return response.status(404).json({
            error: 'name and number cant be empty!'
        })
    } 
    else if(duplicateContact(personContact.name)) 
    {
        console.log('name is duplicate - NO CONTACTS ADDED!')
        return response.status(404).json({
            error: 'name must be unique!'
        })
    }
    else 
    {
        const person = new Person({
            name: consoleName,
            number: consoleNumber
        })
        person.save().then(person => {
            response.json(person)
        })
    }
})

/**
 * Funktio lisää post metodilla henkilön näytölle. KORVATTU MONGODB
 */
app.post('/api/persons', (request, response) => {
    const personContact = request.body
    if(personContact.name === undefined || personContact.number === undefined) 
    {
        console.log('name or number is empty - NO CONTACTS ADDED!')
        return response.status(404).json({
            error: 'name and number cant be empty!'
        })
    } 
    else if(duplicateContact(personContact.name)) 
    {
        console.log('name is duplicate - NO CONTACTS ADDED!')
        return response.status(404).json({
            error: 'name must be unique!'
        })
    }
    else 
    {
        personContact.id = createUniqID()
        persons = persons.concat(personContact)
        response.json(personContact)
        console.log('new contact has been ADDED to database!')
    }
})

/**
 * Funktio täyttää tehtävänannon 3.5 vaatimuksen sattumanvaraisesta ID luomisesta.
 * @returns 
 */
const createUniqID = () => {
    let min = 0
    const max = 1000
    if(persons.length > 0) 
    {
        min = persons.length
    }
    const maxId = Math.floor(Math.random() * ((max-min)+1) + min);//<-- TEHTÄVÄ 3.5       
    return maxId
}

//MIDLEWARET

/**
 * Funktio palauttaa polun.
 */
morgan.token('path', function(req, res, param) {
    return req.path
});

/**
 * Funktio palauttaa olion sisällön jos kyseessä on post metodi
 */
morgan.token('object', function(req, res, param) {
    const alku = `${req.method} ${req.path} ${res.statusCode} - ${req}`
    if(req.method === 'POST') 
    {
        return `{"name": "${req.body.name}" "number":"${req.body.number}"}`
    } 
    return ' '
});

const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
}

app.use(requestLogger)

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

//const PORT = process.env.PORT || 3001
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
