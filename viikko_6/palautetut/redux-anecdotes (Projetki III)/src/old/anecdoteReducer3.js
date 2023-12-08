import { createSlice } from "@reduxjs/toolkit"
/*
const anecdotesAtStart = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
*/

/*const asAnecdote = (_content) => {
    return {
        content: _content,
        id: getId(),
        votes: 0
    }
}*/

/**
 * Funktio luo sattumanvaraisen ID:n välillä 0 - 1000 ja palauttaa sen.
 * @returns Integer.
 */
//const getId = () => (100000 * Math.random()).toFixed(0)

const anecdoteSlice = createSlice(
    {
        name: '_slicerAnecdote',
        //initialState: anecdotesAtStart.map(asAnecdote),
        initialState: [],
        reducers:
        {
            createAnecdote(state, action) 
            {
                //const newAnecdote = asAnecdote(action.payload)
                //state.push(newAnecdote)
                state.push(action.payload)
            },
            addVotes(state, action) 
            {
                console.log('STATE ', JSON.parse(JSON.stringify(state)))
                const temp = {
                    ...action.payload,
                    votes: action.payload.votes + 1
                }
                return state.map(a => a.id !== temp.id ? a : temp)
            },
            appendAnecdote(state, action)
            {
                state.push(action.payload)
            },
            setAnecdotes(state, action) 
            {
                console.log('ASDASD ', action.payload)
                return action.payload
            },
        }
    }
)

export const { createAnecdote, addVotes, appendAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer
