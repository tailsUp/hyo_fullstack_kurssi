import axios from 'axios'
const baseUrl = '/api/login'

/**
 * 
 * Funktio käsittelee yhteydenpidon frontin ja backendin välillä kirjautumisenyhteydessä.
 * 
 * @param {Object} credentials  - Sisältää käyttäjänimen ja salasanan. 
 * @returns                     - Backendin vastauksen.
 */
const login = async (credentials) => {
    console.log('ceredentials: ', credentials)
    const response = await axios.post(baseUrl, credentials).catch((error) => {
        console.log('Error in logging in. ', error)
        return error
    })
    console.log('response data: ', response.data)
    window.localStorage.setItem('blogApplicationUser', JSON.stringify(response.data))
    return response.data
}

export default { login }
