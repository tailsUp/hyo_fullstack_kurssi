import { useState, useEffect, useRef } from 'react'
//Components:
import LoginInputs2 from './components/LoginInputs2'
import ShowUser from './components/ShowUser'
import BlogsToScreen from './components/Blogs'
import NewBlog2 from './components/NewBlog2'
//Services:
import LoginService from './services/loginService'
import blogService from './services/blogService'
//Alerts:
import InformUser from './alerts/notification'
//Helpers:
import Helper from './helpers/sortBlogs'
//Toggle:
import Togglable from './components/Togglable'

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
  //Toggle:
  const blogFormRef = useRef()

  //useEffect(() => {})

  useEffect(() => {
    const loggedBlogUser = window.localStorage.getItem('blogApplicationUser')
    if (loggedBlogUser) {
      const _user = JSON.parse(loggedBlogUser)
      setUser(_user)
      blogService.setToken(_user.token)
    }
  }, [])

  useEffect(() => {setBlogs()}, [])

  /*useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs(Helper.sortBlogListByLikes(blogs))
    )
  }, [])*/

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
      blogService.getAll().then(blogs =>
        setBlogs(Helper.sortBlogListByLikes(blogs))
      )
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
      <Togglable buttonLabel={'Open application'} buttonLabel2={'Cancel'} id={'btnNewBlogCreate'} id2={'btnNewBlogCancel'} >
        <LoginInputs2 click={handleLogin} usr={username} psw={password} changeUSR={usernameChange} changePSW={passwordChange} />
      </Togglable>
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

  const updateOldBlog = async (event, b) => {
    event.preventDefault()
    try
    {
      const newLike = b.likes + 1
      console.log(newLike)
      const uBlog = { ...b, likes: newLike }
      const status = await blogService.update(uBlog.id, uBlog)
      if (status === 200)
      {
        console.log('Likes have been increased')
        setBlogs(Helper.sortBlogListByLikes(Helper.updateBlogList(blogs, uBlog)))
        notificationSuccess(`Blog: ${uBlog.title} has ${uBlog.likes} likes!`)
      }
      else
      {
        notificationError('Error in increasing likes - try again later!')
      }
    }
    catch (error)
    {
      console.log('Error in increasing likes! ', error)
      notificationError('Error in increasing likes - try again later!')
    }
  }

  const deleteBlogs = async (event, ID) => {
    event.preventDefault()
    const ok = window.confirm('Are you sure you want to delete a blog you have added?')
    if(ok)
    {
      const del = await blogService.deleteBlog(ID, user.token)
      console.log('DELETE: ', del)
      if(del === 204)
      {
        console.log('DELETE SUCCESFULL!')
        setBlogs(Helper.removeBlogByID(blogs, ID))
      }
      else
      {
        notificationError('Error in deleting blogs - try again later!')
      }
    }
  }

  /**
   * Funktio palauttaa div elementin jonka sisällö on kaikki käyttäjän lisäämät blogit.
   */
  const showBlogs = () => {
    return (
      <form id="formUpdateBlog" onSubmit={updateOldBlog}>
        <BlogsToScreen blogs={blogs} user={user} updateOldBlog={updateOldBlog} deleteBlogs={deleteBlogs}/>
      </form>
    )
  }

  /**
   * Funktio palauttaa div elementin jonka sisällä on kaikki uuden blogin luonnissa käytetyt inputit.
   */
  const createBlogView = () => {
    return (
      <Togglable buttonLabel={'Create new blog'} buttonLabel2={'Cancel'} id={'btnNewBlogCreate'} id2={'btnNewBlogCancel'} ref={blogFormRef}>
        <NewBlog2 createBlog={createNewBlog} user={user} />
      </Togglable>
    )
  }

  /**
   * Funktio painaa sivulla olevaa cancel painiketta, jotta lomake saadaan suljettua.
   */
  const clickButton = () => {
    document.getElementById('btnNewBlogCancel').click()
  }

  /**
   * Funktion avulla voi muuttaa elementin tekstisisällön tai arvon.
   */
  const elementTextChange = (id, text) => {
    document.getElementById(id).value = text
  }

  /**
   * Funktio lisää uuden olion tietokantaan. Kun uusi olio on luotu niin se etsitään vielä lopuksi omalla ID:llä jotta
   * näytölle saadaan ajantasainen tieto.
   */
  const createNewBlog = async (blogObject) => {
    try {
      const success = await blogService.create(blogObject)
      if (success) {
        const created = await blogService.getBlogWithID(success.id)
        setBlogs(Helper.sortBlogListByLikes(blogs.concat(created)))
        zeroNewBlogInputs()
        notificationSuccess(`New blog: ${success.title} by ${success.author} has been added to databse!`)
        //clickButton()
        blogFormRef.current.toggleVisibility()
      }
      else
      {
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
    //setSuccess(false)
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
