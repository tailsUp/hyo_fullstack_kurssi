import { useState } from 'react'
import { useApolloClient, useQuery }  from '@apollo/client'
//Components:
import Authors          from './components/Authors'
import Books            from './components/Books'
import NewBook          from './components/NewBook'
import Notify           from './notification/Notify'
import LoginForm        from './components/LoginForm'
import Recommend        from './components/Recommend'
//Queries:
import { ALL_AUTHORS, ALL_BOOKS }           from './queries/Queries'


const App = () => {
  const [page, setPage] = useState('authors')
  const [errorMessage, setErrorMessage] = useState(null)
  //Queries
  const _authors  = useQuery(ALL_AUTHORS, { pollInterval: 2000  })
  const _books    = useQuery(ALL_BOOKS, { pollInterval: 2000  })
  //Token
  const [token, setToken] = useState(null)
  const [favorite, setFavorite] = useState(null)
  const client = useApolloClient()

  const notify = (message) => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 10000)  
  }
  
  const logout = () => {
    setToken(null)
    localStorage.clear()
    client.resetStore()
    setPage('authors')
    console.log("*** LOGOUT ***")
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

  if(!token)
  {
    return (
      <div>
        <div>
          <button onClick={() => setPage('authors')}>authors</button>
          <button onClick={() => setPage('books')}>books</button>
          <button onClick={() => setPage('login')}>login</button>
        </div>
        <Notify errorMessage={errorMessage} />

        <Authors show={page === 'authors'} authors={_authors.data.allAuthors2}/>

        <Books show={page === 'books'} books={_books.data.allBooks2}/>

        <LoginForm show={page === 'login'} setToken={setToken} setError={notify} setPage={setPage} setFavorite={setFavorite} />
      </div>
    )
  }

  return (
    <div>
      <div>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        <button onClick={() => setPage('add')}>add book</button>
        <button onClick={() => setPage('recommend')}>recommend</button>
        <button onClick={logout}>logout</button>
      </div>

      <Notify errorMessage={errorMessage} />

      <Authors show={page === 'authors'} authors={_authors.data.allAuthors2}/>

      <Books show={page === 'books'} books={_books.data.allBooks2}/>

      <NewBook show={page === 'add'} authors={_authors.data.allAuthors2} books={_books.data.allBooks} setError={notify} />

      <Recommend show={page === 'recommend'} genre={favorite} books={_books.data.allBooks2}/>
    </div>
  )
}

export default App
