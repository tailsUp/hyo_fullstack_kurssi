import { useState } from 'react'
import { useApolloClient, useQuery, useSubscription }  from '@apollo/client'
//Components;
import Persons            from './components/Persons'
import PersonForm         from './components/CreatePerson'
import Notify             from './notifications/Notify'
import PhoneForm          from './components/UpdatePhone'
import LoginForm from './components/LoginForm'
//Queries:
import { ALL_PERSONS, PERSON_ADDED }    from './queries/Queries'

export const updateCache = (cache, query, addedPerson) => {
  // helper that is used to eliminate saving same person twice
  const uniqByName = (a) => {
    let seen = new Set()
    return a.filter((item) => {
      let k = item.name
      return seen.has(k) ? false : seen.add(k)
    })
  }
  cache.updateQuery(query, ({ allPersons }) => {
    return {
      allPersons: uniqByName(allPersons.concat(addedPerson)), }
    }
  )}

const App = () => {
  //const result = useQuery(ALL_PERSONS)
  const [token, setToken] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const result = useQuery(ALL_PERSONS, { pollInterval: 2000  })
  const client = useApolloClient()

  useSubscription(PERSON_ADDED, {
    onData: ({ data }) => {
      const addedPerson = data.data.personAdded
      notify(`${addedPerson.name} added`)
      updateCache(client.cache, { query: ALL_PERSONS }, addedPerson)
      
      client.cache.updateQuery({ query: ALL_PERSONS }, ({ allPersons }) => {
        return {
          allPersons: allPersons.concat(addedPerson), }
        })
      }
  })

  if (result.loading)  {
    return <div>loading...</div>
  }

  const notify = (message) => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 10000)  }

    const logout = () => {
      setToken(null)
      localStorage.clear()
      client.resetStore()
    }
    if (!token)
    {
      return (
        <>
          <Notify errorMessage={errorMessage} />
          <LoginForm setToken={setToken} setError={notify} />
        </>
      )
    }

  return (
    <div>
    <Notify errorMessage={errorMessage} />
    <button onClick={logout}>logout</button>
    <Persons persons = {result.data.allPersons} />
    <PersonForm setError={notify} />
    <PhoneForm setError={notify} />
    </div>
  )
}

export default App