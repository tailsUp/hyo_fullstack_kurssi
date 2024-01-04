import { useEffect } from 'react'
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
import User         from './reduxComponents/Users/User'
import BlogLink     from './reduxComponents/Blog/BlogLink'

import {
    BrowserRouter as Router,
    Routes, Route, Link, useParams
  }                                 from 'react-router-dom'

const App = () => {

    const dispatch      = useDispatch()
    const user          = useSelector((state) => state.loginReducer.username)
    const initialBlogs  = [...useSelector((state) => state.blogReducer)]
    const initialUsers  = useSelector((state) => state.userReducer)

    useEffect(() => { blogService.getAll().then((blogs) => dispatch(setBlogs(blogs))) }, [])

    useEffect(() => { userService.getAll().then((users) => dispatch(setUsers(users))) }, [])

    const BaseView = () => {
        return (
            <div>
                {user !== null && <UsersList initialBlogs={initialBlogs} initialUsers={initialUsers}/>}
                {user !== null && <BlogList initialBlogs={initialBlogs} initialUsers={initialUsers}/>}
                {user !== null && <NewBLog initialBlogs={initialBlogs} initialUsers={initialUsers}/>}
            </div>
        )
    }

    const UserView = () => {
        const ID = useParams().id
        if(!initialUsers || !initialBlogs)
        {
            return (
                <div>
                    <p>LOADING USER DATA</p>
                </div>
            )
        }
        const _user = initialUsers.filter((_u) => _u.id === ID)
        const _blogs = initialBlogs.filter((_b) => _b.user.id === ID)
        return (
            <User _user={_user[0]} _blogs={_blogs}/>
        )
    }

    const BlogView = () => {
        const ID = useParams().id
        if(initialBlogs.length === 0 || initialUsers.length === 0)
        {
            return (
                <div>
                    <p>Loading application data.</p>
                </div>
            )
        }
        const _blog = initialBlogs.filter((_b) => _b.id === ID)
        return <BlogLink _blog={_blog[0]} initialUsers={initialUsers}/>
    }

    return (
        <div>
            <Notification />
            <h2>- BLOGS -</h2>
            {user === null && <Login />}
            {user !== null && <Logout />}

            <Routes>
                <Route path="*" element={<BaseView />} />
                <Route path="/users/:id" element={<UserView/>} />
                <Route path="/blogs/:id" element={<BlogView/>} />
            </Routes>
        </div>
    )
}

export default App
