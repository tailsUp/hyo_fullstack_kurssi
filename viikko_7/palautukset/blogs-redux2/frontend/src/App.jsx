import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//Services:
import blogService      from './services/blogService'
import userService      from './services/userService'
import commentService   from './services/commentService'

//Reducers:
import { setBlogs }     from './reducers/blogReducer'
import { setUsers }     from './reducers/userReducer'
import { setComments }  from './reducers/commentReducer'

//reduxComponents:
import Notification from './reduxComponents/Notification/Notification'
import Login        from './reduxComponents/Access/Login'
import Logout       from './reduxComponents/Access/Logout'
import UsersList    from './reduxComponents/Users/UsersList'
import BlogList     from './reduxComponents/Blog/BlogList'
import NewBLog      from './reduxComponents/Blog/NewBlog'
import User         from './reduxComponents/Users/User'
import BlogLink     from './reduxComponents/Blog/BlogLink'
import BlogListLink from './reduxComponents/Blog/BlogListLink'
import UserListLink  from './reduxComponents/Users/UserListLink'

import {
    BrowserRouter as Router,
    Routes, Route, Link, useParams
  }                                 from 'react-router-dom'

const App = () => {

    const dispatch          = useDispatch()
    const user              = useSelector((state) => state.loginReducer.username)
    const initialBlogs      = [...useSelector((state) => state.blogReducer)]
    const initialUsers      = useSelector((state) => state.userReducer)
    const initialComments   = useSelector((state) => state.commentReducer)

    useEffect(() => { blogService.getAll().then((blogs) => dispatch(setBlogs(blogs))) }, [])

    useEffect(() => { userService.getAll().then((users) => dispatch(setUsers(users))) }, [])

    useEffect(() => { commentService.getAll().then((comments) => dispatch(setComments(comments))) }, [])

    const BaseView = () => {
        if(user === null)
        {
            return null
        }
        return (
            <div>
                <p>
                    NOTE! <br/><br/> This view is old view and does not represent later assignments. I have kept this as part of the Navigator
                    because it took a lot of time to get to work and I think it would be a shame if It couldnt be accessed anymore.
                    Links Blogs and Users works exactly as required in the assignments.
                </p>
                {user !== null && <UsersList initialBlogs={initialBlogs} initialUsers={initialUsers}/>}
                {user !== null && <BlogList initialBlogs={initialBlogs} initialUsers={initialUsers} initialComments={initialComments}/>}
                {user !== null && <NewBLog initialBlogs={initialBlogs} initialUsers={initialUsers}/>}
            </div>
        )
    }

    const UserView = () => {
        if(user === null)
        {
            return null
        }
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
        if(user === null)
        {
            return null
        }
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
        return <BlogLink _blog={_blog[0]} initialUsers={initialUsers} initialComments={initialComments}/>
    }

    const BlogListLinkView = () => {
        if(user === null)
        {
            return null
        }
        return (
            <div>
                {user !== null && <BlogListLink initialBlogs={initialBlogs} initialUsers={initialUsers}/>}
            </div>
        )
    }

    const UserListLinkView = () => {
        if(user === null)
        {
            return null
        }
        return (
            <div>
                {user !== null && <UserListLink initialBlogs={initialBlogs} initialUsers={initialUsers}/>}
            </div>
        )
    }

    const Navigator = () => {

        const padding = {
            padding: 5
          }

        return (
            <div>
                <Link style={padding} to="/">home</Link>
                <Link style={padding} to="/blogs">blogs</Link>
                <Link style={padding} to="/users">users</Link>
                {user !== null && <Logout />}
            </div>
        )
    }

    return (
        <div className="container">
            <Navigator />
            <Notification />
            <br/>
            <h2>- BLOGS -</h2>
            <br/>
            {user === null && <Login />}

            <Routes>
                <Route path="*" element={<BaseView />} />
                <Route path="/blogs" element={<BlogListLinkView/>} />
                <Route path="/users" element={<UserListLinkView/>} />
                <Route path="/users/:id" element={<UserView/>} />
                <Route path="/blogs/:id" element={<BlogView/>} />
            </Routes>
        </div>
    )
}

export default App
