import { useDispatch, useSelector } from 'react-redux'
//Reducer:
import { logOUT } from '../../reducers/loginReducer'

const Logout = () => {
    const dispatch  = useDispatch()
    const user      = useSelector((state) => state.loginReducer.username)

    /**
     * Funktio loggaa käyttäjän ulos tyhjentämällä localStoragen ja suorittamalla
     * loginReducerin logOUT funktion joka asettaa käyttäjän sen initialStateen.
     */
    const logoutBlogs = () => {
        console.log(`Logout user ${user}!`)
        window.localStorage.removeItem('blogApplicationUser')
        dispatch(logOUT())
    }

    return (
        <div>
            <div>
                <label>{user} logged in</label>
            </div>
            <br />
            <div>
                <button id="btnLogout" onClick={() => logoutBlogs()}>
                    logout
                </button>
            </div>
            <br />
        </div>
    )
}

export default Logout
