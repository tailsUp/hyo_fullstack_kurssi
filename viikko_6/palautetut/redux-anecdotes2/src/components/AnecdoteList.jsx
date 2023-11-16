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
    
    //const anecdotes = useSelector(state => state.sort((a, b) => b.votes - a.votes))
    const anecdotes = useSelector(state => state.anecdotes.sort((a, b) => b.votes - a.votes))
    const _filterText = useSelector(state => state.filter.toLowerCase())

    const dispatch = useDispatch()

    const vote = (anecdote) => {
        console.log('vote', anecdote)
        dispatch(voteAnecdote(anecdote))
    }

    if(_filterText !== '') 
    {
        //const _filtered = anecdotes.map(anecdote => anecdote.content.includes(_filterText) ? anecdote : undefined)
        const _filtered = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(_filterText));
        console.log(_filtered)
        return (
            <div>
                {_filtered.map(anecdote =>
                    <div key={anecdote.id}>
                        <SingleAnecdote anecdote={anecdote} vote={vote}/>
                    </div>
                )}
            </div>
        )
    }
    else 
    {
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
}

export default AnecdoteList