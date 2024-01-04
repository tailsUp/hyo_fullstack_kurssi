import { useEffect, useReducer }    from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    BrowserRouter as Router,
    Routes, Route, Link, useParams
  }                                 from 'react-router-dom'
//Service:
import userService                  from '../../services/userService'
//Reducer:
import { setUsers }                 from '../../reducers/userReducer'
import showReducer                  from '../../reducers/showReducer'

const UsersList = (props) => {
    const dispatch = useDispatch()
    const userList = props.initialUsers

    /*useEffect(() => {
        userService.getAll().then((users) => dispatch(setUsers(users)))
    }, [dispatch])*/

    return (
        <div>
            <h3>Users</h3>
            <div id='userTableDiv'>
                <table>
                    <tbody>
                        <tr>
                            <th></th>
                            <th>Blogs created</th>
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
                </table>
            </div>
        </div>
    )
}

export default UsersList

