import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useUpdateEffect } from 'react'
//Reducers:
import { addLikes, deleteBlog, setBlogs } from '../../reducers/blogReducer'
import { notificationText } from '../../reducers/notificationReducer'
import { timerID } from '../../reducers/timerReducer'
//Components:
import Blog from './Blog'
import blogService from '../../services/blogService'
import userService from '../../services/userService'

import { appendUsers, setUsers, getUsers, updateUserBlogs } from '../../reducers/userReducer'

const BlogList = (props) => {
    const dispatch = useDispatch()
    const initialBlogs = [...useSelector((state) => state.blogReducer)]
    const sortedBlogs = initialBlogs.sort((a, b) => b.likes - a.likes)
    const user = useSelector((state) => state.loginReducer)
    const users = useSelector(state => state.userReducer)


    const userList = useSelector((state) => state.userReducer)

    useEffect(() => {
        userService.getAll().then((users) => dispatch(setUsers(users)))
        //userService.getAll().then((users) => dispatch(setUsers(users)))
    }, [dispatch])

    
    useEffect(() => {
        blogService.getAll().then((blogs) => dispatch(setBlogs(blogs)))
    }, [dispatch])

    const vote = (_blog) => {
        console.log('vote', _blog)
        dispatch(addLikes(_blog))
        dispatch(
            notificationText(
                `Blog ${_blog.title} has been upvoted from ${_blog.likes} to ${
                    _blog.likes + 1
                }`
            )
        )
        const a = setTimeout(() => {
            dispatch(notificationText([]))
        }, 5000)
        dispatch(timerID(a))
    }

    const del = (_blog) => {
        console.log('POISTA!!!')
        console.log('BLOG: ', _blog)
        dispatch(deleteBlog({ ID: _blog.id, token: user.token }))
        dispatch(notificationText(`Blog ${_blog.title} has been deleted.`))
        const a = setTimeout(() => {
            dispatch(notificationText([]))
        }, 5000)
        dispatch(timerID(a))
        deleteFromUserArray(_blog)
    }

    /**
     * 
     * Funktiota kutsutaan kun näytöltä poistetaan blogi. Tällöin vastaava blogi täytyy myös poistaa käyttäjän taulukosta. 
     * 
     * HUOM! Päivittää myös tietokannan.
     * 
     * @param {Object} _blog    - Blogi joka poistetaan. 
     */
    const deleteFromUserArray = (_blog) => {
        console.log('**** Delete blog from view ****')
        const blogID = _blog.id
        let newuser

        if(blogID)
        {
            console.log('users: ', users)
            const _users = users.map((_u) => {
                if(_u.username === user.username)
                {
                    const _blogs = _u.blogs.filter((_b) => {
                        if(_b.id !== blogID)
                        {
                            return _b
                        }
                    })
                    newuser = {
                        ..._u,
                        blogs: _blogs, 
                    }
                    return newuser
                }
                return _u
            })
            console.log('PÄIVITETTY users: ', users)
            dispatch(setUsers(_users))
            dispatch(updateUserBlogs(newuser))
        }
    }

    const view = (setShow, show, id) => {
        console.log('TOGGLE BLOCK VIEW')
        if (show === 'none') {
            setShow(true)
            document.getElementById(id).innerHTML = 'hide'
        } else {
            setShow(false)
            document.getElementById(id).innerHTML = 'view'
        }
    }

    if (sortedBlogs.length < 1) {
        return (
            <div>
                <h3>All blogs</h3>
                <label>
                    Program is <b>blogless</b>. Try to add a new blog!
                </label>
            </div>
        )
    } else {
        return (
            <div>
                <h3>All blogs</h3>
                {sortedBlogs.map((blog) => (
                    <div key={blog.id}>
                        <Blog blog={blog} view={view} vote={vote} del={del} />
                    </div>
                ))}
            </div>
        )
    }
}

export default BlogList
