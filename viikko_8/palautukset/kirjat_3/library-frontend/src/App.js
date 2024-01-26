import { useState } from 'react'
import { useQuery }  from '@apollo/client'
//Components:
import Authors          from './components/Authors'
import Books            from './components/Books'
import NewBook          from './components/NewBook'
import Notify           from './notification/Notify'
//Queries:
import { ALL_AUTHORS, ALL_BOOKS }           from './queries/Queries'


const App = () => {
  const [page, setPage] = useState('authors')
  const [errorMessage, setErrorMessage] = useState(null)
  //Queries
  const _authors  = useQuery(ALL_AUTHORS, { pollInterval: 2000  })
  const _books    = useQuery(ALL_BOOKS, { pollInterval: 2000  })
  
  const notify = (message) => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 10000)  
  }
  
  if (_authors.loading || _books.loading)
  {
    return <div>loading data from server...</div>
  }

  if (_authors.error)
  {
    notify('ERROR WITH DATABASE!')
    return <div>`Error in loading AUTHORS database. Error: ${_authors.error.message}`</div>
  }

  if (_books.error)
  {
    notify('ERROR WITH DATABASE!')
    return <div>`Error in loading BOOKS database. Error: ${_books.error.message}`</div>
  }

  return (
    <div>
      <div>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        <button onClick={() => setPage('add')}>add book</button>
      </div>

      <Notify errorMessage={errorMessage} />

      <Authors show={page === 'authors'} authors={_authors.data.allAuthors2}/>

      <Books show={page === 'books'} books={_books.data.allBooks2}/>

      <NewBook show={page === 'add'} authors={_authors.data.allAuthors2} books={_books.data.allBooks} setError={notify} />
    </div>
  )
}

export default App
