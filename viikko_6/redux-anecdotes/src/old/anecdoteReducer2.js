const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  /*const object = searchAnecdote(state, action.id)
  if(object) {
    const temp = updateAnecdote(object, {type: 'VOTE'})
    console.log('TEMP: ', temp)
    state = updateAnecdotes(state, temp) 
    //return updateAnecdotes(state, temp)
    console.log('state: ', state)
    //return state
    return temp
  }*/
  switch(action.type) {
    case 'VOTE':
      //return addVotes(searchAnecdote(state, action.id))
      return (updateAnecdotes(state, addVotes(searchAnecdote(state, action.id))))
    default:
      return state
  }
  //return state
}

const updateAnecdotes = (anecdotes, temp) => {
  return anecdotes.map(a => a.id !== temp.id ? a : temp)
}

const updateAnecdote = (anecdote, action) => {
  console.log('updateAnecdote ', anecdote)
  switch(action.type) {
    case 'VOTE':
      return addVotes(anecdote)
    default:
      return anecdote
  }
}

const addVotes = (anecdote) => {
  console.log('addVotes', anecdote)
  const temp = {
    ...anecdote,
    votes: anecdote.votes + 1
  }
  console.log('addVotes', temp)
  return temp
}

const searchAnecdote = (anecdotes, id) => {
  return anecdotes.find(a => a.id === id)
}

//export default updateAnecdote
export default reducer