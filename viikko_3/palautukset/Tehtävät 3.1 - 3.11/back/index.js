
const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.static('dist'))
//app.use(morgan('tiny'))                                                                   //TEHTÄVÄ 3.7
app.use(morgan(':method :path :status :res[content-length] - :response-time ms :object'));  //TEHTÄVÄ 3.8

morgan.token('path', function(req, res, param) {
    return req.path
});

morgan.token('object', function(req, res, param) {
    //POST /api/persons 200 51 - 4.871 ms
    const alku = `${req.method} ${req.path} ${res.statusCode} - ${req}`
    if(req.method === 'POST') 
    {
        //Tuloste: POST /api/persons 200 51 - 3.779 ms {"name": "Arto HELLAS" "number":"0101010101"}
        //Tehtava: POST /api/persons 200 51 - 3.779 ms {"name": "Arto HELLAS" "number":"0101010101"}
        return `{"name": "${req.body.name}" "number":"${req.body.number}"}`
    }
        //GET /api/persons 200 169 - 4.642 ms  
        //GET /api/persons 200 169 - 4.642 ms  
    return ' '
});


let persons = 
[
    {
        id: 1,
        name: "test1",
        number: "123123"
    },
    {
        id: 2,
        name: "test2",
        number: "123123"
    },
    {
        id: 3,
        name: "test3",
        number: "123123"
    },
    {
        id: 4,
        name: "test4",
        number: "123123"
    }
]


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
    //const maxId =  Math.random * (1000 - min) + min         
    return maxId
}

/*const checkID = ({maxId}) => {
    persons.every((person) => {
        if(person.id === maxId) {
            return false
        }
    });
    return true
}*/

//MIDLEWARET


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

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
