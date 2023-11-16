import { useSelector, useDispatch } from 'react-redux'
import reducer from './reducers/anecdoteReducer2'
import { createStore } from 'redux'

//<button onClick={() => reducer(anecdotes, {id: anecdote.id, type: 'VOTE'})}>vote</button>
//<button onClick={() => vote(anecdote)}>vote</button>

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()
  const store = createStore(reducer)

  const vote = (anecdote) => {
    console.log('vote', anecdote)
    const temp = store.dispatch(reducer(anecdotes, {id: anecdote.id, type: 'VOTE'}))
    //dispatch(reducer(anecdotes, {id: anecdote.id, type: 'VOTE'}))
    //anecdotes.map(a => a.id !== temp.id ? a : temp)
    
    console.log('AA: ', temp)
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
      <form>
        <div><input /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App