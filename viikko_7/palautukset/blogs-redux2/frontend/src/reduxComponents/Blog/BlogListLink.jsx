import { useDispatch, useSelector } from 'react-redux'
import { Link }                     from 'react-router-dom'
//Components:
import NewBLog                      from './NewBlog'
import Table                        from 'react-bootstrap/Table'

const BlogListLink = ({ initialBlogs, initialUsers }) => {
    const sortedBlogs   = initialBlogs.sort((a, b) => b.likes - a.likes)

    if (sortedBlogs.length < 1)
    {
        return (
            <div>
                <h3>All blogs</h3>
                <NewBLog />
                <label>
                    Program is <b>blogless</b>. Try to add a new blog!
                </label>
            </div>
        )
    } else {
        return (
            <div>
            <h3>All blogs</h3>
            <NewBLog />
            <Table striped>
                <tbody>
                    {sortedBlogs.map((blog) => (
                        <tr key={blog.id}>
                            <td>
                                <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div> 
        )
    }
}

export default BlogListLink

/*


            {sortedBlogs.map((blog) => (
                <div key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                </div>
            ))}

            */