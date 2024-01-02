import { useState, useReducer, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//Components:
import LoginForm from './LoginForm'
import loginService from '../../services/loginService'
import { logIN } from '../../reducers/loginReducer'

const Login = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.loginReducer)

    useEffect(() => {
        const loggedBlogUser = window.localStorage.getItem(
            'blogApplicationUser'
        )
        if (loggedBlogUser) {
            const _user = JSON.parse(loggedBlogUser)
            //blogService.setToken(_user.token)
            dispatch(logIN(_user))
        }
    }, [dispatch])

    const [newName, setName] = useState('')
    const [newPassword, setPassword] = useState('')

    const usernameChange = (event) => {
        setName(event.target.value)
    }

    const passwordChange = (event) => {
        setPassword(event.target.value)
    }

    const clearLogin = () => {
        setName('')
        setPassword('')
    }

    const loginToBlogs = async (event) => {
        event.preventDefault()
        console.log('LOGIN!', newName, newPassword)
        try {
            console.log('user: ', user)
            //const login = await noteService.createNew(content)
            const response = await loginService.login({
                username: newName,
                password: newPassword,
            })
            clearLogin()
            //dispatch(createNote(newNote))
            const response2 = dispatch(logIN(response))
            console.log('store: ', user)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <LoginForm
            submit={loginToBlogs}
            changeUSR={usernameChange}
            changePSW={passwordChange}
            valueU={newName}
            valueP={newPassword}
        />
    )
}

export default Login
