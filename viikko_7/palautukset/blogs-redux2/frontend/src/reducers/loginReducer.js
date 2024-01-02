import { createSlice } from '@reduxjs/toolkit'
//Reducers:
import loginService from '../services/loginService'

const initialState = { username: null, token: null }

const loginSlice = createSlice({
    name: '_slicerLogin',
    initialState,
    reducers: {
        logIN(state, action) {
            try {
                state = {
                    ...state,
                    username: action.payload.username,
                    token: action.payload.token,
                }
                console.log('LOGIN state: ', JSON.parse(JSON.stringify(state)))
                return state
            } catch (error) {
                //Error lisäyksessä
                console.log('Error: ', error)
                //state = empty
                state = initialState
                return state
            }
        },
        logOUT(state, action) {
            state = initialState
            console.log('LOGOUT state: ', JSON.parse(JSON.stringify(state)))
            return state
        },
    },
})

export const { logIN, logOUT } = loginSlice.actions
export default loginSlice.reducer
