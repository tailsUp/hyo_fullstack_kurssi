import { useDispatch }      from 'react-redux'
import { createAnecdote }   from '../reducers/anecdoteReducer'
import { notificationText } from '../reducers/notificationReducer'
import { timerID }          from '../reducers/timerReducer'
//import anecdoteService      from '../services/anecdotes'

const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.inputAnecdote.value
        emptyInputs(event)
        //const newAnecdote = await anecdoteService.createNew(content)
            //dispatch(createAnecdote(content))
        //dispatch(createAnecdote(newAnecdote))
        dispatch(createAnecdote(content))
        dispatch(notificationText(`New anecdote has been added: ${content}`))
        const a = setTimeout(() => {
            dispatch(notificationText([]))
        }, 5000)
        dispatch(timerID(a))
    }

    const emptyInputs = (event) => {
        event.target.inputAnecdote.value = ''
    }

    return (
      <div>
            <h2>Create new</h2>
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
  