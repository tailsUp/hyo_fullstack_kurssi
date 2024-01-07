import ListGroup from 'react-bootstrap/ListGroup'

const BlogComments = ({ _comments, blogID }) => {

    const comments = _comments.filter((_c) => _c.blogID === blogID)

    if (comments.length > 0)
    {
        return (
            <div id='commentListDiv'>
                <ListGroup>
                    {comments.map((_c) => (
                        <ListGroup.Item key={_c.id}>{_c.comment}</ListGroup.Item>
                    ))}
                </ListGroup>
        </div>
        )
    }
    else
    {
        return null
    }

}

export default BlogComments

/*
<ul>
{comments.map((_c) => (
        <li key={_c.id}>
            <label> {_c.comment} </label>
        </li>
    ))}
</ul>
*/