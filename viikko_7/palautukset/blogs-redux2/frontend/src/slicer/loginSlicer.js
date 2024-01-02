import { createSlice } from '@reduxjs/toolkit'
import blogService from '../services/blogService'
import loginService from '../services/loginService'

const initialState = [
    {
        username: null,
        token: null,
    },
]

const loginSlicer = createSlice({
    name: 'login',
    initialState,
    reducers: {
        checkLogin(state, action) {
            const loggedBlogUser = window.localStorage.getItem(
                'blogApplicationUser'
            )
            if (loggedBlogUser) {
                const _user = JSON.parse(loggedBlogUser)
                blogService.setToken(_user.token)
                state = {
                    username: _user.username,
                    token: _user.token,
                }
            }
            return state
        },
        async login(state, action) {
            const _user = await loginService.login({
                username: action.payload.username,
                password: action.payload.password,
            })
            //setUser(_user)
            blogService.setToken(_user.token)
            window.localStorage.setItem(
                'blogApplicationUser',
                JSON.stringify(_user)
            )
        },
        createNote(state, action) {
            const content = action.payload
            state.push({
                content,
                important: false,
            })
        },
        toggleImportanceOf(state, action) {
            const id = action.payload
            const noteToChange = state.find((n) => n.id === id)
            const changedNote = {
                ...noteToChange,
                important: !noteToChange.important,
            }
            return state.map((note) => (note.id !== id ? note : changedNote))
        },
    },
})

export default loginSlicer
