import { useState, useEffect } from 'react'
//Components:
import LoginInputs from './components/LoginInputs'
import ShowUser from './components/ShowUser'
import Blog from './components/Blog'
import BlogsToScreen from './components/Blogs'
import NewBlog from './components/NewBlog'
//Services:
import LoginService from './services/loginService'
import blogService from './services/blogService'
//Alerts:
import InformUser from './alerts/notification'
//Helpers:
import Helper from './helpers/sortBlogs'

const App = () => {
  //Objects:
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  //Messages
  const [errorMessage, setErrorMessage] = useState(null)
  const [operationSuccess, setOperationSuccess] = useState(true)
  //Login:
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  //useEffect(() => {})

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs(blogs)
    )
  }, [])

  useEffect(() => {
    const loggedBlogUser = window.localStorage.getItem('blogApplicationUser')
    if (loggedBlogUser) {
      const _user = JSON.parse(loggedBlogUser)
      setUser(_user)
      blogService.setToken(_user.token)
    }
  }, [])

  /**
   * Funktiota kutsutaan kun painetaan login nappulaa. 
   * Sisään kirjautuminen tutkitaan alifunktiossa tryToLogIn(). 
   */
  const handleLogin = (event) => {
    event.preventDefault()
    console.log('logging in with', username, password)
    tryToLogIn()
  }

  /**
   * Funktio tutkii löytyykö tietokannasta käyttäjätunnusta ja salasanaa vastaava yhdistelmä.
   * Jos ok niin päästetään sisään.
   */
  const tryToLogIn = async () => {
    try {
      const _user = await LoginService.login({ username, password })
      setUser(_user)
      blogService.setToken(_user.token)
      window.localStorage.setItem(
        'blogApplicationUser', JSON.stringify(_user)
      )
      zeroLoginCredentials()
      console.log('LogIn succefull')
    }
    catch (Exception) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  /**
   * Funktio tyhjentää sisäänkirjautumistiedot.
   */
  const zeroLoginCredentials = () => {
    setPassword('')
    setUsername('')
    console.log('LOGIN CREDENTIALS HAVE BEEN CLEARED!')
  }

  /**
   * FUnktio tyhjentää kaikki uuden blogin input kentät.
   */
  const zeroNewBlogInputs = () => {
    document.getElementById('inputBlogTitle').value = ''
    document.getElementById('inputBlogAuthor').value = ''
    document.getElementById('inputBlogUrl').value = ''
    document.getElementById('inputBlogLikes').value = ''
  }

  /**
   * Funktio sitoo käyttäjänimen muutokset ja vastaavan inputkentän. 
   */
  const usernameChange = (event) => {
    setUsername(event.target.value)
  }

  /**
   * Funktio sitoo salasanan muutokset ja vastaavan inputkentän. 
   */
  const passwordChange = (event) => {
    setPassword(event.target.value)
  }

  /**
   * Funktio palauttaa div elementin joka sisältää kirjautumis inputit.
   */
  const loginForm = () => {
    return (
      <LoginInputs click={handleLogin} usr={username} psw={password} changeUSR={usernameChange} changePSW={passwordChange} />
    )
  }

  /**
   * Funktio palauttaa div elementin jonka sisällä on käyttäjän tiedot.
   */
  const showUser = () => {
    return (
      <ShowUser user={user} click={handleLogout} />
    )
  }

  /**
   * Funktio palauttaa div elementin jonka sisällö on kaikki käyttäjän lisäämät blogit.
   */
  const showBlogs = () => {
    const sorted = Helper.sortBlogsByUserID(blogs, user)
    return (
      <BlogsToScreen blogs={sorted} user={user} />
    )
  }

  /**
   * Funktio palauttaa div elementin jonka sisällä on kaikki uuden blogin luonnissa käytetyt inputit.
   * @param {Function} click 
   */
  const createBlogView = (click) => {
    return (
      <NewBlog click={handleNewBlog} />
    )
  }

  /**
   * Funktio käsittelee uden blogin lisäykseen liittyvöt logiikan. 
   */
  const handleNewBlog = async (event) => {
    event.preventDefault()
    try {
      const tempBlog = {
        title: event.target.form[0].value,
        author: event.target.form[1].value,
        url: event.target.form[2].value,
        likes: event.target.form[3].value ? event.target.form[3].value : 0,
        username: user.username
      }
      const success = await blogService.create(tempBlog)
      if (success) {
        setBlogs(blogs.concat(tempBlog))
        zeroNewBlogInputs()
        notificationSuccess(`New blog: ${tempBlog.title} by ${tempBlog.author} has been added to databse!`)
      }
      else {
        notificationError('Error in adding a new blog. Try again later. If error continues logout and login again.')
      }
    }
    catch (error) {
      setOperationSuccess(true)
      notificationError('Error in adding a new blog. Try again later. If error continues logout and login again.')
    }
  }

  /**
   * Funktio päivittää viestin sisällön onnistuneissa suorituksissa. Kutsuu lopuksi myös funktiota joka tyhjentää viestin sisällön.
   * @param {String} text   - Teksti joka tulee onnisutneen viestin sisään. 
   */
  const notificationSuccess = (text) => {
    emptyNotificationNow()
    setErrorMessage(`${text}`)
    setOperationSuccess(true)
    emptyNotificationTimer()
  }

  /**
   * Funktio päivittää viestin sisällön epäonnistuneissa suorituksissa. Kutsuu lopuksi myös funktiota joka tyhjentää viestin sisällön.
   * @param {String} text   - Teksti joka tulee onnisutneen viestin sisään. 
   */
  const notificationError = (text) => {
    emptyNotificationNow()
    setErrorMessage(`${text}`)
    setSuccess(false)
    emptyNotificationTimer()
  }

  /**
   * Funktio tyhjentää 'pakolla' informaationviestit.
   */
  const emptyNotificationNow = () => {
    setErrorMessage(null)
    setOperationSuccess(undefined)
  }

  /**
 * Funktio tyhjentää notifikaatioiden sisällön.
 */
  const emptyNotificationTimer = () => {
    setTimeout(() => {
      setErrorMessage(null)
      setOperationSuccess(undefined)
    }, 5000)
  }

  /**
   * Funktio käsittelee uloskirjautumisen.
   */
  const handleLogout = (event) => {
    event.preventDefault()
    window.localStorage.removeItem('blogApplicationUser')
    setUser(null)
  }

  return (
    <div>
      <div id="divError">
        <InformUser message={errorMessage} success={operationSuccess} />
      </div>
      <div id="divLogin">
        {!user && loginForm()}
      </div>
      <div id="divShowUser">
        {user && showUser()}
      </div>
      <div id="divShowBLogs">
        {user && showBlogs()}
      </div>
      <div id="divNewBlog">
        {user && createBlogView()}
      </div>
    </div>
  )
}

export default App
