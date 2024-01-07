import { Link } from 'react-router-dom'
import Table    from 'react-bootstrap/Table';

const UsersList = ({ initialUsers }) => {
    return (
        <div className="container">
            <h3>Users</h3>
            <div id='userTableDiv'>
                <p>Blogs created</p>
                <Table striped>
                    <tbody>
                        {initialUsers.map((user) => (
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
