import { useSelector, useDispatch } from 'react-redux'
//import { createAnecdote } from '../reducers/anecdoteReducer'
//import { voteAnecdote } from '../reducers/anecdoteReducer'
import { createAnecdote, voteAnecdote } from './reducers/anecdoteReducer'
//import { createNote } from './../reducers/noteReducer'
//items.sort((a, b) => a.value - b.value);
const App = () => {
    //const anecdotes = useSelector(state => state)
    const anecdotes = useSelector(state => state.sort((a,b) => b.votes - a.votes))
    const dispatch = useDispatch()

    const vote = (anecdote) => {
        console.log('vote', anecdote)
        dispatch(voteAnecdote(anecdote))
    }

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
            <h2>Anecdotes</h2>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote)}>vote</button>
                    </div>
                </div>
            )}
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div><input name="inputAnecdote" /></div>
                <button type="submit">create</button>
            </form>
        </div>
    )
}

export default App