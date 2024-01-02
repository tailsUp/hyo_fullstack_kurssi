const showReducer = (state, action) => {
    switch (action) {
        case true: {
            return 'block'
        }
        case false: {
            return 'none'
        }
        default: {
            return 'none'
        }
    }
}

export default showReducer
