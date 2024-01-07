import { useDispatch, useSelector }     from 'react-redux'
import { useState }                     from 'react'
//Reducers:
import { notificationText }                     from '../../reducers/notificationReducer'
import { timerID }                              from '../../reducers/timerReducer'
import { createNewComment, updateBlogComments } from '../../reducers/commentReducer'
import { addLikes }                             from '../../reducers/blogReducer'

//Components:
import BlogComments         from './BlogComments'

const BlogLink = ({ _blog, initialUsers, initialComments }) => {

    const dispatch      = useDispatch()
    const [com, setCom] = useState('')
    const user          = useSelector((state) => state.loginReducer)

    const _added        = initialUsers.filter((_a) => _a.id === _blog.user.id)

    const setComment = (value) => {
        setCom(value)
    }

    const vote = (_blog) => {
        console.log('VOTE BLOG: ', _blog)
        dispatch(addLikes(_blog))
        dispatch(notificationText(`Blog ${_blog.title} has been upvoted from ${_blog.likes} to ${_blog.likes + 1}`))
        const a = setTimeout(() => {dispatch(notificationText([]))}, 5000)
        dispatch(timerID(a))
    }

    const addComment = async (event) => {
        event.preventDefault()
        const a = _blog.id
        const b = _blog.user.id
        const c = user.username
        const d = user.token
        createAndAdd([a, b, c, d])
    }
    
    const createAndAdd = async (props) => {
        let infoText = ''
        try 
        {
            await dispatch(createNewComment({ comment: com, blogID: props[0], userID: props[1], username: props[2], token: props[3] }))
            infoText = `Comment ${com} has been added.`
            clearInputs()
        } 
        catch (error)
        {
            infoText = 'Error in adding a comment. Please try again!'
        }
        dispatch(notificationText(infoText))
        const a = setTimeout(() => {dispatch(notificationText([]))}, 5000)
        dispatch(timerID(a))
        await dispatch(updateBlogComments())
    }

    const clearInputs = () => {
        setCom('')
    }

    return (
        <div>
            <h2>{_blog.title}</h2>
            <p>url: {_blog.url}</p>
            <div>
                <label>likes: {_blog.likes} <button id={`btn${_blog.id}`} onClick={() => vote(_blog) }>like</button></label>
            </div>
            {user !== undefined && <p>added by: {_added[0].username}</p>}
            {user === undefined && <p>added by: **** missing / LOADING ****</p>}
            <div id='divComments'>
                <b>comments</b>
                <br/>
                <div>
                    <input id={`input${_blog.id}`} type='text' value={com} onChange={(event) => setComment(event.target.value)} />
                    <button id={`btn${_blog.id}`} onClick={(event) => addComment(event)}>add</button>
                    <br/><br/>
                </div>
                <BlogComments _comments={initialComments} blogID={_blog.id}/>
            </div>
        </div>
    )
}

export default BlogLink