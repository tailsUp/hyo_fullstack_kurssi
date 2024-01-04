import { useDispatch, useSelector } from 'react-redux'
//Reducers:
import { addLikes, deleteBlog }     from '../../reducers/blogReducer'
import { notificationText }         from '../../reducers/notificationReducer'
import { timerID }                  from '../../reducers/timerReducer'

const BlogLink = ({ _blog, initialUsers }) => {
    
    const dispatch      = useDispatch()

    const vote = (_blog) => {
        console.log('VOTE BLOG: ', _blog)
        dispatch(addLikes(_blog))
        dispatch(notificationText(`Blog ${_blog.title} has been upvoted from ${_blog.likes} to ${_blog.likes + 1}`))
        const a = setTimeout(() => {dispatch(notificationText([]))}, 5000)
        dispatch(timerID(a))
    }

    const _user = initialUsers.filter((_u) => _u.id === _blog.user.id)
    
    return (
        <div>
            <h2>{_blog.title}</h2>
            <p>urL: {_blog.url}</p>
            <div>
                likes: {_blog.likes} <button id={`btn${_blog.id}`} onClick={() => vote(_blog) }>like</button>
            </div>
            <p>likes: {_blog.likes}</p>
            <p>added by: {_user[0].username}</p>
        </div>
    )
}

export default BlogLink