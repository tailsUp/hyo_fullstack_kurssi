import { useState } from 'react'
import { useMutation, useLazyQuery }  from '@apollo/client'
import { GraphQLError } from 'graphql'
//Queries:
import { CREATE_BOOK, ALL_BOOKS, GET_AUTH_ID } from '../queries/Queries'

const NewBook = (props) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [published, setPublished] = useState('')
  const [genre, setGenre] = useState('')
  const [genres, setGenres] = useState([])
  
  const [ addBook ] = useMutation(CREATE_BOOK, { refetchQueries: [{ query: ALL_BOOKS }], onError: (error) => {
    const messages = error.graphQLErrors.map(e => e.message).join('\n')
    if(messages)
    {
      props.setError(messages)
    }
    console.log('ERROR: ', messages)
  }
})

  const [getID, { loading, error, data }] = useLazyQuery(GET_AUTH_ID);

  if (!props.show) {
    return null
  }

  const submit = async (event) => {
    event.preventDefault()
    console.log('add book...', {variables: {title, author, published, genres}})
    try 
    {
      const _authorID   = await getID({ variables: { authorName: author } })
      const _newBook = await addBook( {variables: { title: title, published: published, genres: genres , authorID: _authorID.data.getAuthID, authorName: author} })
      console.log('X: ', _newBook)
      empty()
    } 
    catch(error)
    {
      console.log(error)
    }
  }

  const empty = () => {
    setTitle('')
    setPublished('')
    setAuthor('')
    setGenres([])
    setGenre('')
  }

  const addGenre = () => {
    setGenres(genres.concat(genre))
    setGenre('')
  }

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          title
          <input
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          author
          <input
            value={author}
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div>
          published
          <input
            type="number"
            value={published}
            onChange={({ target }) => setPublished(parseInt(target.value))}
          />
        </div>
        <div>
          <input
            value={genre}
            onChange={({ target }) => setGenre(target.value)}
          />
          <button onClick={addGenre} type="button">
            add genre
          </button>
        </div>
        <div>genres: {genres.join(' ')}</div>
        <button type="submit">create book</button>
      </form>
    </div>
  )
}

export default NewBook