import axios from 'axios'
//const baseUrl = 'http://localhost:3001/persons/'
//const baseUrl = 'http://localhost:3001/api/persons'
const baseUrl = '/api/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data).catch(error => {
    console.log('fail')
    return false
  })
}

const create = (newObject) => {
  console.log(newObject.name + " " + newObject.number)
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data).catch(error => {
    console.log('fail')
    return false
  })
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data).catch(error => {
    console.log('fail')
    return false
  })
}

const deleteContact =  (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data).catch(error => {
    console.log('fail')
    return false
  })
}

const returnPersonByID = (persons, deleteID) => {
  const delContact = persons.filter(employee => employee.id === deleteID)
  return delContact[0]
}

export default { getAll, create, update, deleteContact, returnPersonByID }