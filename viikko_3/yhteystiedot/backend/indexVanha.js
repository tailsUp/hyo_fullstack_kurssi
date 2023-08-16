
//Ottaa käytöön Noden sisäänrakennetun web-palvelimen määrittelevän moduulin.
const http = require('http')

let persons = [
    {
        "id": 1,
        "name": "test1",
        "number": "123123"
    },
    {
        "id": 2,
        "name": "test2",
        "number": "123123"
    },
    {
        "id": 3,
        "name": "test3",
        "number": "123123"
    },
    {
        "id": 4,
        "name": "test4",
        "number": "123123"
    }
]

/**
 * Funktio käynnistää serverin, kun terminaalissa annetaan komento: "node index.js"
 * 
 * Koodi luo http-moduulin metodilla createServer web-palvelimen, jolle se rekisteröi tapahtumankäsittelijän, 
 * joka suoritetaan jokaisen osoitteen http://localhost:3001 alle tulevan HTTP-pyynnön yhteydessä.
 * 
 * Pyyntöön vastataan statuskoodilla 200, asettamalla Content-Type-headerille arvo text/plain ja asettamalla 
 * palautettavan sivun sisällöksi merkkijono Hello World.
 */
const app = http.createServer((request, response) => {
  //response.writeHead(200, { 'Content-Type': 'text/plain' })
  //response.end('Hello World')
  console.log('***** SERVER HAS BEEN STARTED *****')
  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.end(JSON.stringify(persons))
})

//Sidotaan muuttuja app sijoitetun http-palvelimen kuuntelemaan porttiin 3001 tulevia HTTP-pyyntöjä
const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)