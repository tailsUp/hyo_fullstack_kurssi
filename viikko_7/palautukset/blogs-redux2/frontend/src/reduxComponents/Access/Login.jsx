import { useState, useEffect }      from 'react'
import { useDispatch, useSelector } from 'react-redux'
//Components:
import LoginForm    from './LoginForm'
//Service:
import loginService from '../../services/loginService'
//Reducer:
import { logIN }    from '../../reducers/loginReducer'

const Login = () => {
    const dispatch  = useDispatch()
    const user      = useSelector((state) => state.loginReducer)

    useEffect(() => {
        const loggedBlogUser = window.localStorage.getItem(
            'blogApplicationUser'
        )
        if (loggedBlogUser) {
            const _user = JSON.parse(loggedBlogUser)
            dispatch(logIN(_user))
        }
    }, [dispatch])

    const [newName, setName]            = useState('')
    const [newPassword, setPassword]    = useState('')

    /**
     * 
     * Funktio asettaa käyttäjätunnuksen input kentän muuttuessa.
     * 
     * @param {Event} event 
     */
    const usernameChange = (event) => {
        setName(event.target.value)
    }

    /**
     * 
     * Funktio asettaa salasanan input kentän muuttuessa.
     * 
     * @param {Event} event 
     */
    const passwordChange = (event) => {
        setPassword(event.target.value)
    }

    /**
     * Funktio tyhjentää inputkentät.
     */
    const clearLogin = () => {
        setName('')
        setPassword('')
    }

    /**
     * 
     * Funktio kirjaa käyttäjän sisään ohjelmaan.
     * 
     * @param {Event} event 
     */
    const loginToBlogs = async (event) => {
        event.preventDefault()
        try {
            console.log('user: ', user)
            const response = await loginService.login({
                username: newName,
                password: newPassword,
            })
            clearLogin()
            const response2 = dispatch(logIN(response))
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
