import { useState, useEffect, useRef } from 'react'
import { useMutation }  from '@apollo/client'
import { EDIT_AUTHOR, ALL_AUTHORS } from '../queries/Queries'
import Select from 'react-select'
import { createSelect } from '../util/Util'

const EditAuthors = (props) => {
  
    const [name, setName] = useState(null)
    const [year, setYear] = useState('')
    const [ updateYear ] = useMutation(EDIT_AUTHOR, {refetchQueries: [ { query: ALL_AUTHORS } ]  })
    let authSel = createSelect(props.authors)

    const submit = async (event) => {
        event.preventDefault()
        console.log('edit author...')
    
        try {
            const x = updateYear({  variables: { name, year } })
            empty()
        } catch (error) {
            console.log('Error in editing authors birthyear.')
        }

      }
    
      const empty = () => {
        setYear('')
      }

/*
8.11
    return (
        <div>
            <h3>Set birthyear</h3>
      <form onSubmit={submit}>
        <div>
          name
          <input
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div>
          born
          <input
            value={year}
            type='number'
            onChange={({ target }) => setYear(parseInt(target.value))}
          />
        </div>
        <button type="submit">update author</button>
      </form>
        </div>
    )
    */
    return (
        <div>
            <h3>Set birthyear</h3>
      <form id="formEditAuthor" onSubmit={submit}>
      <div>
      <Select
        closeMenuOnSelect={true}
        onChange={(choice) => setName(choice.value)}
        options={authSel}
      />
    </div>
        <div>
          born
          <input
            value={year}
            type='number'
            onChange={({ target }) => setYear(parseInt(target.value))}
          />
        </div>
        <button type="submit">update author</button>
      </form>
        </div>
    )
}

export default EditAuthors