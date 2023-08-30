import axios from 'axios'
//const baseUrl = 'http://localhost:3001/persons/'
//const baseUrl = 'http://localhost:3001/api/persons'
const baseUrl = '/api/persons'

/**
 * Funktio hakee tietokannasta kaikki tiedot ja palauttaa ne.
 * @returns tiekannan sisällön tai virheen.
 */
const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => {
    console.log('Database fetch succesfull')
    return response.data
  }).catch(error => {
    console.log('fail ', error)
    return false
  })
}

/**
 * Funktio luo uuden tietokantaolion ja palauttaa sen.
 * @param {Object} newObject uusi olio joka luodaan.
 * @returns uuden tietokantaolion tai errorin.
 */
const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data).catch(error => {
    console.log('fail', error)
    return error.response.data.error
  })
}

/**
 * Funktio päivittää tietokannan yksittäisen olion id:n perusteella. Eli korvaa vanhan olion uudella oliolla.
 * @param {String} id           - Arvo jolla olio etsitään tietokannasta.
 * @param {Object} newObject    - Uusi korvaava olio.
 * @returns päivitetyn olion.
 */
const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data).catch(error => {
    console.log('fail', error)
    return false
  })
}

/**
 * Funktio poistaa tietokannasta yhden olion annetun id:n perusteella.
 * @param {String} id    - Arvo jolla olio etsitään tietokannasta.
 * @returns vain errorin jos tapahtuu virhe.
 */
const deleteContact =  (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data).catch(error => {
    console.log('fail ', error)
    return false
  })
}

/**
 * Funktio palauttaa olion annetun deleteID:n perusteella.
 * @param {Array} persons   - Lista yhteystieto-olioita.
 * @param {String} deleteID - Arvo jolla olio etsitään persons listalta.
 * @returns palauttaa yhteystiedon.
 */
const returnPersonByID = (persons, deleteID) => {
  const delContact = persons.filter(employee => employee.id === deleteID)
  return delContact[0]
}

export default { getAll, create, update, deleteContact, returnPersonByID }