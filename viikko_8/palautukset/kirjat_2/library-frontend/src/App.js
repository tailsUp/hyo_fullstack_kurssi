import { useState } from 'react'
import { gql, useQuery }  from '@apollo/client'
//Components:
import Authors          from './components/Authors'
import Books            from './components/Books'
import NewBook          from './components/NewBook'
//Queries:
import { ALL_AUTHORS, ALL_BOOKS }           from './queries/Queries'


const App = () => {
  const [page, setPage] = useState('authors')
  const _authors = useQuery(ALL_AUTHORS, { pollInterval: 2000  })
  const _books = useQuery(ALL_BOOKS, { pollInterval: 2000  })
  
  if (_authors.loading || _books.loading)
  {
    return <div>loading data from server...</div>
  }

  if (_authors.error || _books.error)
  {
    return <div>`Error in loading database. Error: ${_authors.error.message}`</div>
  }

  return (
    <div>
      <div>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        <button onClick={() => setPage('add')}>add book</button>
      </div>

      <Authors show={page === 'authors'} authors={_authors.data.allAuthors2}/>

      <Books show={page === 'books'} books={_books.data.allBooks}/>

      <NewBook show={page === 'add'} authors={_authors.data.allAuthors2} books={_books.data.allBooks}/>
    </div>
  )
}

export default App
