import { useState, useEffect } from 'react'
import axios from 'axios'

const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}

const useResource = (baseUrl) => {
  const [resources, setResources] = useState([])

  useEffect(() => {
    if(resources.length === 0)
    {
      console.log(`Haetaan tietokannasta ${baseUrl} tiedot.`)
      axios
      .get(`${baseUrl}`)
      .then(response => {
        const _response = response.data
        console.log('response: ', _response)
        setResources(_response)
      })
      .catch(function (error) 
      {
        console.log('Error: ', error.toJSON());
        setResources({found: false})
      })
    }
    
  })

  const create = async (resource) => {
    console.log('Tallennetaan tietokantaan: ', baseUrl)
    console.log('Uusi olio: ' ,resource)

    if(eiTyhja(resource)) 
    {
      await axios
      .post(baseUrl, resource)
      .then(response => {
        const _response = response.data
        console.log('object: ', _response)
        setResources(resources.concat(_response))
    })
    }
  }

  const eiTyhja = (resource) => {
    if ('name' in resource && ( resource.name.length > 0 && resource.number.length > 0 ))
    {
      return true
    }
    if ('content' in resource && ( resource.content.length > 0 )) 
    {
      return true
    }
    return false
  }

  const service = {
    create
  }

  return [
    resources, service
  ]
}  



const App = () => {
  const content = useField('text')
  const name = useField('text')
  const number = useField('text')

  const [notes, noteService] = useResource('http://localhost:3005/notes')
  const [persons, personService] = useResource('http://localhost:3005/persons')

  const handleNoteSubmit = (event) => {
    event.preventDefault()
    noteService.create({ content: content.value })
  }
 
  const handlePersonSubmit = (event) => {
    event.preventDefault()
    personService.create({ name: name.value, number: number.value})
  }

  return (
    <div>
      <h2>notes</h2>
      <form onSubmit={handleNoteSubmit}>
        <input {...content} />
        <button>create</button>
      </form>
      {notes.map(n => <p key={n.id}>{n.content}</p>)}

      <h2>persons</h2>
      <form onSubmit={handlePersonSubmit}>
        name <input {...name} /> <br/>
        number <input {...number} />
        <button>create</button>
      </form>
      {persons.map(n => <p key={n.id}>{n.name} {n.number}</p>)}
    </div>
  )
}

export default App