const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
app.use(express.static('build'))
app.use(express.json())
app.use(morgan('tiny'))
app.use(morgan(':param1 :res[content-length] - :response-time ms :param2'));
app.use(cors())

/**
 * lista yhteystietoja.
 */
let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "123456789"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "87576565"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "123098123089"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "987765643"
    }
]

/**
 * Funktio asettaa morgan tokenina polku ja statustiedon middlewarelle.
 */
morgan.token('param1', function(req, res, param) {
    console.log(req.body)
    return `POST ${req.path} ${res.statusCode}`
});

/**
 * Funktio asettaa morgan tokenina oliotiedot (nimi & numero) middlewarelle.
 */
morgan.token('param2', function(req, res, param) {
    return `{"name":"${req.body.name}", "number":"${req.body.number}"}`
});

/**
 * Funktio palauttaa hello worldin.
 */
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

/**
 * Funktio palauttaa kaikki persons listan oliot.
 */
app.get('/api/persons', (req, res) => {
    res.json(persons)
})

/**
 * Funktio palauttaa div elementin, jonka sisällä muita html elementtejä.
 */
app.get('/api/info', (req, res) => {
    const pvm = new Date()
    res.send(`<div><p>Phonebook has info for ${persons.length} people</p>${pvm}<p></p<</div>`)
})

/**
 * Funktio palauttaa tietyn resurssin tai error viestin.
 */
app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    //Jos henkilö on tyhjä niin error muuten palautetaan henkilö.
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

/**
 * Funktio poistaa olion taulukosta.
 */
app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})

/**
 * Funktio luo uuden id:n joka on välillä persons lista pituus - 100.
 * @returns palauttaa numeron.
 */
const generateId = () => {
    //const maxId = persons.length > 0 ? Math.max(...persons.map(n => n.id)) : 0
    //return maxId + 1
    const min = persons.length
    const newId = Math.floor(Math.random() * 100) + persons.length;
    console.log('ID:', newId)
    return newId
}

/**
 * Funktio käsittelee uuden henkilön lisäyksen listalle.
 */
app.post('/api/persons', (request, response) => {
    console.log('SISÄLLÄ')
    const body = request.body
    //tarkistetaan onko arvot tyhjät.
    if (!body.name || !body.number) {
        console.log('ERROR')
        console.log('content: ', body)
        return response.status(400).json({
            error: 'content missing'
        })
    }
    //Jos listalle tulee nimi niin silloin kyseessä duplikaatti.
    const compareName = body.name.toLowerCase()
    const nimet = persons.filter(person => person.name.toLowerCase() === compareName)
    if (nimet.length >= 1) {
        console.log('NIMI ON JO LISTALLA!')
        return response.status(400).json({
            error: 'name must be unique'
        })
    }
    //Luodaan henkilö olio ja luodaan sille sattuman mukainen ID. Teoriassa duplikaatti mahdollinen.
    const person = {
        name: body.name,
        number: body,
        id: generateId()
    }
    //liitetään persons listalle uusi olio.
    persons = persons.concat(person)
    //palautetaan uusi olio.
    response.json(person)
    console.log('LOPPU')
})

//Portti jossa resurssi pyörii.
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})