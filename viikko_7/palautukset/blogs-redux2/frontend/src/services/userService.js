import axios from 'axios'
const baseUrl = '/api/users'

/**
 * Funktio hakee kaikki blogit backendistä ja palauttaa ne käyttäjän ruudulle.
 */
const getAll = async () => {
    const response = await axios.get(baseUrl).catch((error) => {
        console.log('fail: ', error)
        return []
    })
    return response.data
}

/**
 * Funktio päivittää user tiedot korvaamalla 'vanhan' userin uudella.
 * @param {String} ID       - Uniikki USER-id.
 * @param {Object} newBlog  - Uusi USER jolla korvataan vanha blogi.
 */
const update = async (ID, user) => {
    try 
    {
        const request = await axios.put(`${baseUrl}/${ID}`, user)
        return request.status
    }
    catch (error)
    {
        console.log('Error in updating and old blog. ', error)
        return 'error'
    }
}

export default { getAll, update }
