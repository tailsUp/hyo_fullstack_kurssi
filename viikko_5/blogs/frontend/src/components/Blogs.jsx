import Button2 from "./Button2"

const blogs = ({blogs, user}) => {
    if(user === null || user === undefined) 
    {
        return noLogin()
    }
    else if(blogs === undefined || blogs === null || blogs.length === 0) 
    {
        return blogListEmpty()
    }
    return blogListPopulated(blogs={blogs}, user={user})
}

const noLogin = () => {
    return (
        <div>
            <p>Blogs will be shown after login</p>
        </div>
    )
}

const blogListEmpty = () => {
    return (
        <div>
            <h4>Your blogs:</h4>
            <p>You dont have any blogs</p>
        </div>
    )
}

const blogListPopulated = ({blogs, user}) => {
    return (
        <div>
            <h4>Your blogs:</h4>
            {blogs.map(blog => 
                <div key={blog.title + blog.author}>
                    <label>
                        {blog.title + " " + blog.author}
                        <Button2 text={'delete'} id={'id'} click={null}/>
                    </label>
                </div>
            )}
        </div>
    )
}

export default blogs