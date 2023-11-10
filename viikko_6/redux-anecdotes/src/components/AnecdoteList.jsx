import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteButton = ( {anecdote, vote} ) => {
    return (
        <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
        </div>
    )
}

const SingleAnecdote = ({anecdote, vote}) => {
    return (
        <div>
            <div>
                {anecdote.content}
            </div>
            <div>
                <AnecdoteButton anecdote={anecdote} vote={vote}/>        
            </div>
        </div>
    )
}

const AnecdoteList = () => {

    const anecdotes = useSelector(state => state.sort((a, b) => b.votes - a.votes))
    const dispatch = useDispatch()

    const vote = (anecdote) => {
        console.log('vote', anecdote)
        dispatch(voteAnecdote(anecdote))
    }

    return (
        <div>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <SingleAnecdote anecdote={anecdote} vote={vote}/>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList