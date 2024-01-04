import { createSlice } from '@reduxjs/toolkit'
import userService from '../services/userService'

const asUser = (_username, _blogs) => {
    return {
        username: _username,
        blogs: _blogs,
    }
}

const userSlice = createSlice({
    name: '_slicerUser',
    initialState: [],
    reducers: {
        createUser(state, action) {
            try {
                const _new = asUser(
                    action.payload.username,
                    action.payload.blogs
                )
                state.concat(_new)
                return state
            } catch (error) {
                //Error lisäyksessä
                console.log('Error: ', error)
                state = []
                return state
            }
        },
        appendUsers(state, action) {
            state.push(action.payload)
        },
        setUsers(state, action) {
            return action.payload
        },
        getUsers(state, action) {
            return state
        }
    },
})

export const { createUser, appendUsers, setUsers, getUsers } = userSlice.actions

/**
 * 
 * Funktio päivittää käyttäjälistan selaimessa.
 * 
 * @returns funktio.
 */
export const updateUsers = () => {
    return async dispatch => {
        const _list = await userService.getAll()
        dispatch(setUsers(_list))
    }
}

export default userSlice.reducer
