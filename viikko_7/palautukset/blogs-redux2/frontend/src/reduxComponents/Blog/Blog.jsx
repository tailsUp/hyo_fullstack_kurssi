import { useReducer } from 'react'
import showReducer from '../../reducers/showReducer'
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
            <BlogInformation
                blog={blog}
                setShow={setShow}
                show={show}
                vote={vote}
                del={del}
            />
            <div>
                <button
                    id={`buttonView${blog.id}`}
                    onClick={() => view(setShow, show, `buttonView${blog.id}`)}
                >
                    view
                </button>
            </div>
        </div>
    )
}

//  <BlogInformation blog={blog} setShow={setShow} show={show} vote={vote} del={del}/>

export default Blog
