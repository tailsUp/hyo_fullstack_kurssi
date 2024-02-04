//Queries:
import { ALL_GENRES }     from '../queries/Queries'
import { useState } from 'react'
import { useQuery}  from '@apollo/client'

import Genres from './Genres'
const Books = (props) => {

  const ALLGENRES = useQuery(ALL_GENRES)
  const [selection, setSelection] = useState(null)
  let books = []

  if (!props.show) {
    return null
  }

  if (ALLGENRES.loading)
  {
    return <div>loading data from server...</div>
  }

  books = props.books

  const selectByGenre = (_genre) => {
    console.log("JEE", _genre)
    if(_genre === 'clear')
    {
      setSelection(null)
    }
    else
    {
      setSelection(_genre)
    }
  }

  if(selection)
  {
    books = books.map((_b) => _b.genres.includes(selection) && _b)
    console.log('test')
  }

  //const books = props.books
  const _genres = ALLGENRES.data.allGenres

  return (
    <div>
      <h2>books</h2>

      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {books.map((a) => {
            if(a !== false)
            {
              return (
                <tr key={a.title}>
                <td>{a.title}</td>
                <td>{a.author.name}</td>
                <td>{a.published}</td>
              </tr>
              )
            }
          })}
        </tbody>
      </table>
      <div>
        <h3>Genres</h3>
        <Genres genres={_genres} selectByGenre={selectByGenre}/>
      </div>
    </div>
  )
}

export default Books

/*

          {books.map((a) => (
            <tr key={a.title}>
              <td>{a.title}</td>
              <td>{a.author.name}</td>
              <td>{a.published}</td>
            </tr>
          ))}

          */