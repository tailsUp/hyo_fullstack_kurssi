import { useReducer }   from 'react'
//Reducer:
import showReducer      from '../../reducers/showReducer'
//Component:
import ViewButton       from '../Buttons/ViewBlogButton'

const infoStyle = {
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
}

const User = ({ blog, view, vote, del }) => {
    const [show, setShow] = useReducer(showReducer, 'none')
    return (
        <div>
            <div>blog: {blog.title}</div>
            <div>
                <ViewButton blog={blog} view={view} setShow={setShow} show={show} vote={vote} del={del} />
            </div>
        </div>
    )
}

export default User
