import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice(
    {
        name: '_slicerAnecdote',
        initialState: [],
        reducers:
        {
            createAnecdote(state, action) 
            {
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
                return action.payload
            },
        }
    }
)

export const { createAnecdote, addVotes, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecodtesThunk = () => {
  return async dispatch => {
    const _anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(_anecdotes))
  }
}

export const createAnecdoteThunk = content => {
    return async dispatch => {
        const _anecdote = await anecdoteService.createNew(content)
        dispatch(appendAnecdote(_anecdote))
    }
}

export const addVotesThunk = content => {
    return async dispatch => {
        console.log("Muutetaan äänimäärä THUNK avulla")
        await anecdoteService.updateAnecdote(content)
        dispatch(addVotes(content))
    }
}

export default anecdoteSlice.reducer
