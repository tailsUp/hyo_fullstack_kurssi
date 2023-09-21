import axios from 'axios'
import newBLog from '../components/NewBlog'
const baseUrl = 'http://localhost:3003/api/blogs'

let token

/**
 * Funktio asettaa Bearer etumerkin käyttäjän uniikiin tokeniin.
 * @param {String} newToken - käyttäjän uniikki token.
 */
const setToken = newToken => {
  token = `Bearer ${newToken}`
}

/**
 * Funktio luo uuden blogi-olion ja palauttaa sen 'lopullisen version'.
 * @param {Object} newBLog
 */
const create = async newBLog => {
  try 
  {
    const config = {
      headers: { Authorization: token },
    }
    const response = await axios.post(baseUrl, newBLog, config)
    return response.data
  }
  catch (error) 
  {
    console.log('Error in creating a new blog. ', error)
  }
}

/**
 * Funktio päivittää blogin tiedot korvaamalla 'vanhan' blogin uudella.
 * @param {String} ID       - Uniikki blogi-olion id. 
 * @param {Object} newBlog  - Uusi blogi jolla korvataan vanha blogi.
 */
const update = async (ID, blog) => {
  try 
  {
    const request = await axios.put(`${baseUrl}/${ID}`, blog)
    return request.status
  }
  catch(error)
  {
    console.log('Error in updating and old blog. ' , error)
  }
}

/**
 * Funktio hakee kaikki blogit backendistä ja palauttaa ne käyttäjän ruudulle.
 */
const getAll = async () => {
  const response = await axios.get(baseUrl).catch(error => {
    console.log('fail: ', error)
    return []
  })
  return response.data
}

const getBlogWithID = async (ID) => {
  try
  {
    const request = await axios.get(`${baseUrl}/${ID}`)
    return request.data
  } 
  catch (error)
  {
    console.log('Error in fetching new blog. ', error)
    return undefined
  }

}

export default { getAll, create, update, setToken, getBlogWithID }