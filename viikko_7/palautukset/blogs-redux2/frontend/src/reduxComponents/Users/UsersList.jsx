import { useDispatch }                   from 'react-redux'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Table    from 'react-bootstrap/Table';

const UsersList = (props) => {
    const dispatch = useDispatch()
    const userList = props.initialUsers

    return (
        <div>
            <h3>Users</h3>
            <div id='userTableDiv'>
                <Table striped>
                    <tbody>
                        <tr>
                            <th>Blogs created</th>
                            <th></th>
                        </tr>
                        {userList.map((user) => (
                            <tr key={user.id}>
                                <td>
                                    <Link to={`/users/${user.id}`}>{user.username}</Link>
                                </td>
                                <td>
                                    <label> {user.blogs.length} </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default UsersList
