
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
//const mongoose = require('mongoose')
const Person = require('./models/person')
const person = require('./models/person')

app.use(cors())
app.use(express.json())
app.use(express.static('dist'))
//app.use(morgan('tiny'))                                                                   //TEHTÄVÄ 3.7
app.use(morgan(':method :path :status :res[content-length] - :response-time ms :object'));  //TEHTÄVÄ 3.8

let persons = []

app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})

app.post('/api/persons', (request, response) => {
  const body = request.body
  console.log('BODY: ', body)
  if (body.name === undefined || body.number === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const person = new Person({
    name: body.name,
    number: body.number
  })
  /*
  const person = new Person({
      name: consoleName,
      number: consoleNumber
  })
  */
  person.save().then(savedPerson => {
    response.json(savedPerson)
  })
})

app.get('/api/persons/:id', (request, response, next) => {
  const hakuID = request.params.id
  Person.findById(hakuID)
    .then(person => {
      if(person)
      {
        response.json(person)
      }
      else
      {
        response.status(404).end()
      }
    }).catch(error => next(error))
    /*.catch(error => {
      console.log(error)
      response.status(400).send({ error: 'THERE IS NO MATCHING ID IN THE DATABASE' })
      //response.status(500).end()
    })*/
})

app.delete('/api/persons/:id', (request, response, next) => {
  //const deleteID = Number(request.params.id) <-- KÄYTETTY VANHAN TIETOKANNAN KANSSA - HUOM! ID EI OLE ENÄÄ NUMERO MUODOSSA
  const deleteID = request.params.id
  console.log('BACKEND DELETE FUNKTIO: ', deleteID)
  Person.findByIdAndRemove(deleteID)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body
  const updateID = request.params.id
  const person = new Person({
    name: body.name,
    number: body.number
  })

  Person.findByIdAndUpdate(updateID, person, { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
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

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') 
  {
    return response.status(400).send({ error: 'THERE IS NO MATCHING ID IN THE DATABASE' })
  }

  next(error)
}

app.use(errorHandler)

/* PIDÄ TÄMÄ VIIMEISENÄ */

//const PORT = process.env.PORT || 3001
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

/* POISTETUT get/post operaatiot */

/*
app.delete('/api/persons/:id', (request, response) => {
    const hakuID = Number(request.params.id)
    //const hakuID = request.params.id
    persons = persons.filter(person => person.id !== hakuID)
    response.status(204).end()
})
*/

/*
app.get('/api/persons/:id', (request, response) => {
    const hakuID = request.params.id
    Person.findById(hakuID).then(person => {
      response.json(person)
    })
})
*/