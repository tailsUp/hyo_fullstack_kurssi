import { useDispatch, useSelector } from 'react-redux'
import { addVotes } from '../reducers/anecdoteReducer'

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
    const temp = [...useSelector(state => state.anecdotes)]
    const sortAnecdotes = temp.sort((a, b) => b.votes - a.votes)
    //const sortAnecdotes = [...useSelector(state => state.anecdotes)].sort((a, b) => b.votes - a.votes)
    const _filterText = useSelector(state => state.filter.toLowerCase())

    const dispatch = useDispatch()

    const vote = (anecdote) => {
        console.log('vote', anecdote)
        dispatch(addVotes(anecdote))
    }

    /*const _filtered = sortAnecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(_filterText));
    console.log('Filtteröity tulos: ', _filtered)
    return (
        <div>
            {_filtered.map(anecdote =>
                <div key={anecdote.id}>
                    <SingleAnecdote anecdote={anecdote} vote={vote}/>
                </div>
            )}
        </div>
    )*/


    if(_filterText !== '') 
    {
        console.log('Filtterissä oleva teksti on: ', _filterText)
        //const _filtered = anecdotes.map(anecdote => anecdote.content.includes(_filterText) ? anecdote : undefined)
        const _filtered = sortAnecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(_filterText));
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
        console.log('TÄÄLLÄ 1111')
        return (
            <div>
                {sortAnecdotes.map(anecdote =>
                    <div key={anecdote.id}>
                        <SingleAnecdote anecdote={anecdote} vote={vote}/>
                    </div>
                )}
            </div>
        )
    }
}

export default AnecdoteList