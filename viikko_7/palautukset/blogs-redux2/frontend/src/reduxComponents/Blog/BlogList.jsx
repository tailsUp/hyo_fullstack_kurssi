import { useDispatch, useSelector } from 'react-redux'
import { useEffect }                from 'react'
//Reducers:
import { addLikes, deleteBlog }     from '../../reducers/blogReducer'
import { notificationText }         from '../../reducers/notificationReducer'
import { timerID }                  from '../../reducers/timerReducer'
import { setUsers }                 from '../../reducers/userReducer'
//Components:
import Blog                         from './Blog'
//Services:
import userService                  from '../../services/userService'

const BlogList = (props) => {
    const dispatch      = useDispatch()
    const initialBlogs  = props.initialBlogs
    const users         = props.initialUsers
    const sortedBlogs   = initialBlogs.sort((a, b) => b.likes - a.likes)
    const user          = useSelector((state) => state.loginReducer)

    useEffect(() => {
        userService.getAll().then((users) => dispatch(setUsers(users)))
    }, [dispatch])

    /**
     * 
     * Funktio muuttaa blogin äänimäärää isommaksi yhdellä.
     * 
     * @param {Object} _blog 
     */
    const vote = (_blog) => {
        console.log('VOTE BLOG: ', _blog)
        dispatch(addLikes(_blog))
        dispatch(notificationText(`Blog ${_blog.title} has been upvoted from ${_blog.likes} to ${_blog.likes + 1}`))
        const a = setTimeout(() => {dispatch(notificationText([]))}, 5000)
        dispatch(timerID(a))
    }

    /**
     * 
     * Funktio poistaa blogin.
     * 
     * @param {Object} _blog 
     */
    const del = (_blog) => {
        dispatch(deleteBlog({ ID: _blog.id, token: user.token }))
        dispatch(notificationText(`Blog ${_blog.title} has been deleted.`))
        const a = setTimeout(() => {dispatch(notificationText([]))}, 5000)
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
            dispatch(setUsers(_users))
        }
    }

    /**
     * 
     * Funktio muuttaa blogin näkyvyyttä.
     * 
     * @param {Setter} setShow  = Asettaa muuttujan arvon.
     * @param {Value} show      = Muuttujan arvo.
     * @param {String} id       = Elementin yksilöllinen tunnus. 
     */
    const view = (setShow, show, id) => {
        console.log('TOGGLE BLOG VIEW')
        if (show === 'none')
        {
            setShow(true)
            document.getElementById(id).innerHTML = 'hide'
        }
        else
        {
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
