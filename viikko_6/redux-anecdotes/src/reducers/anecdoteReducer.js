const anecdotesAtStart = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  
  /**
   * Funktio luo sattumanvaraisen ID:n välillä 0 - 1000 ja palauttaa sen.
   * @returns Integer.
   */
  const getId = () => (100000 * Math.random()).toFixed(0)
  
  /**
   * Funktio palauttaa yksittäisen olion (anekdootin) ja luo sille parametrit (content, id ja votes).
   * 
   * @param {Object} anecdote 
   * @returns object
   */
  const asObject = (anecdote) => {
    return {
      content: anecdote,
      id: getId(),
      votes: 0
    }
  }
  
  const initialState = anecdotesAtStart.map(asObject)
  
  /**
   * Funktio ottaa vastaan tilan (state) ja päivittää sitä mikäli saatu toiminta (action) vastaa switch-case rakenteen
   * vaihtoehtoja.
   * 
   * @param {State} state 
   * @param {Action} action 
   * @returns state
   */
  const reducer = (state = initialState, action) => {
    console.log('state now: ', state)
    console.log('action', action)
    switch (action.type) {
        case 'VOTE':
            return state.map(a => a.id !== action.payload.anecdote.id ? a : addVotes(action.payload.anecdote))
      }
    return state
  }

  /**
   * Funktio ottaa vastaan olion ja muuttaa sen votes arvoa yhdellä suuremmaksi. Palauttaa lopulta päivitetyn olion.
   * @param {Object} anecdote 
   * @returns object
   */
  const addVotes = (anecdote) => {
    console.log('addVotes', anecdote)
    const temp = {
      ...anecdote,
      votes: anecdote.votes + 1
    }
    console.log('addVotes', temp)
    return temp
  }
  
  export default reducer