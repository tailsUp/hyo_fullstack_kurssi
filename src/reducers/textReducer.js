const textReducer = (state, action) => {
    switch (action.type) {
        case 'TEXT':
            return action.newText
        case 'NO_TEXT':
            return ''
        default:
            return ''
    }
}

export default textReducer