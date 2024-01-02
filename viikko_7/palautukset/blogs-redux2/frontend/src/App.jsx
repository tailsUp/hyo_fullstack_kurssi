import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//Services:
import blogService from './services/blogService'
//Reducers:
import { setBlogs } from './reducers/blogReducer'
//reduxComponents:
import Notification from './reduxComponents/Notification/Notification'
import Login from './reduxComponents/Access/Login'
import Logout from './reduxComponents/Access/Logout'
import UsersList from './reduxComponents/Users/UsersList'
import BlogList from './reduxComponents/Blog/BlogList'
import NewBLog from './reduxComponents/Blog/NewBlog'

const App = () => {
    const user = useSelector((state) => state.loginReducer.username)

    //const login = <Login />
    //<Login />
    //{login}
    return (
        <div>
            <Notification />
            <h2>- BLOGS -</h2>
            {user === null && <Login />}
            {user !== null && <Logout />}
            {user !== null && <UsersList />}
            {user !== null && <BlogList />}
            {user !== null && <NewBLog />}
        </div>
    )
}

export default App
