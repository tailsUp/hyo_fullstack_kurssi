const timerReducer = (state, action) => {
    switch (action.type) {
        case 'START':
            return action.setTimer
        case 'CLEAR':
            return ''
        default:
            return state
    }
}

export default timerReducer