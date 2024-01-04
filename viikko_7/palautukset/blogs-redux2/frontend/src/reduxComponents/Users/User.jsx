const User = ({ _blogs, _user} ) => {

    if(_blogs.length < 1 || _blogs === undefined || _user === undefined)
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
                <ul>
                {_blogs.map((_b) => (
                    <li key={_b.id}>
                        {_b.title}
                    </li>
                ))}
                </ul>
            </div>
        )
    }
    else 
    {
        return (
            <div>
                <h2>{_user.username}</h2>
                <b>THIS USER HASNT CREATED ANY BLOGS!</b>
            </div>
        )
    }

}

export default User