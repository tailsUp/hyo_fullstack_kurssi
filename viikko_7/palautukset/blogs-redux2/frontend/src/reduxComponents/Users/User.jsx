import ListGroup from 'react-bootstrap/ListGroup'

const User = ({ _blogs, _user} ) => {

    if(_blogs === undefined || _blogs === undefined || _user === undefined)
    {
        return (
            <div>
                <p>Loading sources. Please reload main page if this message doesnt change in 30sec.</p>
            </div>
        )
    }

    if(_blogs.length > 0)
    {
        return (
            <div>
                <h2>{_user.username}</h2>
                <b>added blogs</b>
                <ListGroup>
                    {_blogs.map((_b) => (
                        <ListGroup.Item key={_b.id}>{_b.title}</ListGroup.Item>
                    ))}
                </ListGroup>

            </div>
        )
    }
    else 
    {
        return (
            <div>
                <h2>{_user.username}</h2>
                <p>This user does not have any blogs to their name.</p>
            </div>
        )
    }

}

export default User