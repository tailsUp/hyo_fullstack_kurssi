const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      return {
        ...state,
        good: state.good + 1
      }
    case 'OK':
      return {
        ...state,
        ok: state.ok + 1
      }
    case 'BAD':
      return {
        ...state,
        bad: state.bad + 1
      }
    case 'ZERO':
      return initialState
    default: return state
  } 
}

/*const noteReducer = (state = [], action) => {
  switch(action.type) {
    case 'TOGGLE_IMPORTANCE':
      const id = action.payload.id
      const noteToChange = state.find(n => n.id === id)
      const changedNote = { 
        ...noteToChange, 
        important: !noteToChange.important 
      }
      return state.map(note =>
        note.id !== id ? note : changedNote 
      )
    default:
      return state
  }
}*/

export default counterReducer

/*
const id = action.payload.id
const noteToChange = state.find(n => n.id === id)
const changedNote = { 
  ...noteToChange, 
  important: !noteToChange.important 
}
return state.map(note =>
  note.id !== id ? note : changedNote 
)
*/