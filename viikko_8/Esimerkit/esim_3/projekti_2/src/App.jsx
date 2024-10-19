import { useState } from 'react'
import { useApolloClient, useQuery }  from '@apollo/client'
//Components;
import Persons            from './components/Persons'
import PersonForm         from './components/CreatePerson'
import Notify             from './notifications/Notify'
import PhoneForm          from './components/UpdatePhone'
import LoginForm from './components/LoginForm'
//Queries:
import { ALL_PERSONS }    from './queries/Queries'

const App = () => {
  //const result = useQuery(ALL_PERSONS)
  const [token, setToken] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const result = useQuery(ALL_PERSONS, { pollInterval: 2000  })
  const client = useApolloClient()

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

  /*return (
    <div>
      {result.data.allPersons.map(p => p.name).join(', ')}
    </div>
  )*/
}

export default App