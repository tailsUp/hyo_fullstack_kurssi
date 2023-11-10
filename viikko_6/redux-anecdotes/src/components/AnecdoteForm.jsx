import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.inputAnecdote.value
        emptyInputs(event)
        dispatch(createAnecdote(content))
    }

    const emptyInputs = (event) => {
        event.target.inputAnecdote.value = ''
    }

    return (
      <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div>
                    <input name="inputAnecdote" />
                </div>
                <button type="submit">create</button>
            </form>
      </div>
    )
  }
  
  export default AnecdoteForm
  