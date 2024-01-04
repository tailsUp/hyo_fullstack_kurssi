import { useEffect, useReducer }    from 'react'
import { useDispatch }              from 'react-redux'
//Service:
import userService                  from '../../services/userService'
//Reducer:
import { setUsers }                 from '../../reducers/userReducer'
import showReducer                  from '../../reducers/showReducer'

const UsersList = (props) => {
    const dispatch = useDispatch()
    const userList = props.initialUsers
    //const userList = initialUsers.sort((a, b) => b.username - a.username)
    //const userList = useSelector((state) => state.userReducer)
    const [show, setShow] = useReducer(showReducer, 'none')

    useEffect(() => {
        userService.getAll().then((users) => dispatch(setUsers(users)))
    }, [dispatch])

    const view = (setShow, show, id) => {
        console.log('TOGGLE BLOCK VIEW')
        if (show === 'none')
        {
            console.log('PIILOTA KÄYTTÄJÄN TIEDOT!')
            setShow(true)
            document.getElementById(id).innerHTML = 'hide'
        } 
        else
        {
            console.log('NÄYTÄ KÄYTTÄJÄN TIEDOT!')
            setShow(false)
            document.getElementById(id).innerHTML = 'view'
        }
    }

    return (
        <div>
            <h3>Users</h3>
            <table>
                <tbody>
                    <tr>
                        <th></th>
                        <th>Blogs created</th>
                    </tr>
                    {userList.map((user) => (
                        <tr key={user.id}>
                            <td>
                                <label onClick={() => view()}>
                                    {user.username}
                                </label>
                            </td>
                            <td>
                                <label> {user.blogs.length} </label>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UsersList
