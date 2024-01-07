import axios from 'axios'
//import newBLog from '../components/NewBlog'
//const baseUrl = 'http://localhost:3001/api/blogs'
const baseUrl = '/api/comments'

let token

/**
 * Funktio asettaa Bearer etumerkin käyttäjän uniikiin tokeniin.
 * @param {String} newToken - käyttäjän uniikki token.
 */
const setToken = (newToken) => {
    token = `Bearer ${newToken}`
}

/**
 * Funktio luo uuden comment-olion ja palauttaa sen 'lopullisen version'.
 * @param {Object} newComment
 */
const create = async (newComment, _token) => {
    try {
        setToken(_token)
        const config = {
            headers: { token: token },
        }
        const response = await axios.post(baseUrl, newComment, config)
        return response.data
    } catch (error) {
        console.log('Error in creating a new comment. ', error.response.data)
    }
}

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

export default { getAll, create, setToken }