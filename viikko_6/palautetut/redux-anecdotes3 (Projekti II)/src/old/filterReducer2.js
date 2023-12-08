const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'TEXT':
      return action.payload
    case '':
        return action.payload
    default:
      return state
  }
}

export const filterText = filter => {
  return {
    type: 'TEXT',
    payload: filter,
  }
}

export const filterEmpty = filter => {
  return {
    type: '',
    payload: filter,
  }
}

export default filterReducer