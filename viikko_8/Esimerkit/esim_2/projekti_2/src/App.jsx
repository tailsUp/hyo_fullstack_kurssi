import { useState } from 'react'
import { gql, useQuery }  from '@apollo/client'
//Components;
import Persons            from './components/Persons'
import PersonForm         from './components/CreatePerson'
import Notify             from './notifications/Notify'
import PhoneForm          from './components/UpdatePhone'
//Queries:
import { ALL_PERSONS }    from './queries/Queries'

const App = () => {
  //const result = useQuery(ALL_PERSONS)
  const [errorMessage, setErrorMessage] = useState(null)
  const result = useQuery(ALL_PERSONS, { pollInterval: 2000  })

  if (result.loading)  {
    return <div>loading...</div>
  }

  const notify = (message) => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 10000)  }

  return (
    <div>
    <Notify errorMessage={errorMessage} />
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