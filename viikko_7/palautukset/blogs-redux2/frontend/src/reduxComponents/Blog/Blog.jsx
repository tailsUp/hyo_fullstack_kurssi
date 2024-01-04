import { useReducer } from 'react'
//Reducer:
import showReducer from '../../reducers/showReducer'
//Component:
import BlogInformation from './BlogInformation'

const infoStyle = {
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
}

const Blog = ({ blog, view, vote, del }) => {
    const [show, setShow] = useReducer(showReducer, 'none')
    return (
        <div style={infoStyle}>
            <div>blog: {blog.title}</div>
            <BlogInformation blog={blog} setShow={setShow} show={show} vote={vote} del={del} />
            <div>
                <button id={`buttonView${blog.id}`} onClick={() => view(setShow, show, `buttonView${blog.id}`)}>view</button>
            </div>
        </div>
    )
}

export default Blog
