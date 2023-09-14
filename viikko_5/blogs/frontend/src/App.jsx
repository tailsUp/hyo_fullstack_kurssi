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
import Notification from './alerts/Notification'
//Helpers:
import Helper from './helpers/sortBlogs'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [newBlog, setNewBlog] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  //useEffect(() => {})

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs(blogs)
    )
  }, [])

  useEffect(() => {
    const loggedBlogUser = window.localStorage.getItem('blogApplicationUser')
    if(loggedBlogUser) 
    {
      const _user = JSON.parse(loggedBlogUser)
      setUser(_user)
      blogService.setToken(_user.token)
    }
  }, [])

  const handleLogin = (event) => {
    event.preventDefault()
    console.log('logging in with', username, password)
    tryToLogIn()
  }

  const tryToLogIn = async () => {
    try {
      const _user = await LoginService.login({ username, password })
      setUser(_user)
      blogService.setToken(_user.token)
      window.localStorage.setItem(
        'blogApplicationUser', JSON.stringify(_user)
      )
      //setLocalStorage()
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

  const setLocalStorage = () => {
    window.localStorage.setItem(
      'blogApplicationUser', JSON.stringify(user)
    )
  }

  const zeroLoginCredentials = () => {
    setPassword('')
    setUsername('')
    console.log('LOGIN CREDENTIALS HAVE BEEN CLEARED!')
  }

  const usernameChange = (event) => {
    setUsername(event.target.value)
  }

  const passwordChange = (event) => {
    setPassword(event.target.value)
  }

  const loginForm = () => {
    return (
      <LoginInputs click={handleLogin} usr={username} psw={password} changeUSR={usernameChange} changePSW={passwordChange} />
    )
  }

  const showUser = () => {
    return (
      <ShowUser user={user} click={handleLogout}/>
    )
  }

  const showBlogs = () => {
    const sorted = Helper.sortBlogsByUserID(blogs, user)
    return (
      <BlogsToScreen blogs={sorted} user={user} />
    )
  }

  const createBlog = (click) => {
    return (
      <NewBlog click={handleNewBlog}/>
    )
  }

  const handleNewBlog = (event) => {
    event.preventDefault()
    console.log('NEW BLOG!!')
  }

  const handleLogout = (event) => {
    event.preventDefault()
    window.localStorage.removeItem('blogApplicationUser')
    setUser(null)
  }

  return (
    <div>
      <div id="divError">
        <Notification message={errorMessage} />
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
        {user && createBlog()}
      </div>
    </div>
  )
}

export default App




