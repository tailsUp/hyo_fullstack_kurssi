import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//Services:
import blogService from './services/blogService'
import userService from './services/userService'
//Reducers:
import { setBlogs } from './reducers/blogReducer'
import { setUsers } from './reducers/userReducer'
//reduxComponents:
import Notification from './reduxComponents/Notification/Notification'
import Login        from './reduxComponents/Access/Login'
import Logout       from './reduxComponents/Access/Logout'
import UsersList    from './reduxComponents/Users/UsersList'
import BlogList     from './reduxComponents/Blog/BlogList'
import NewBLog      from './reduxComponents/Blog/NewBlog'

const App = () => {

    const dispatch      = useDispatch()
    const user          = useSelector((state) => state.loginReducer.username)
    const initialBlogs  = [...useSelector((state) => state.blogReducer)]
    const initialUsers  = useSelector((state) => state.userReducer)

    useEffect(() => { blogService.getAll().then((blogs) => dispatch(setBlogs(blogs))) }, [dispatch])

    useEffect(() => { userService.getAll().then((users) => dispatch(setUsers(users))) }, [dispatch])

    return (
        <div>
            <Notification />
            <h2>- BLOGS -</h2>
            {user === null && <Login />}
            {user !== null && <Logout />}
            {user !== null && <UsersList initialUsers={initialUsers}/>}
            {user !== null && <BlogList initialBlogs={initialBlogs} initialUsers={initialUsers}/>}
            {user !== null && <NewBLog initialBlogs={initialBlogs} initialUsers={initialUsers}/>}
        </div>
    )
}

export default App
