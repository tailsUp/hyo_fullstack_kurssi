import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/login'

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials).catch(error => {
    console.log('Error in logging in. ' ,error)
  })
  return response.data
}

export default { login }