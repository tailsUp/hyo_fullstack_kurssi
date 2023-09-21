const sortBlogsByUserID = (blogs, user) => {
    const temp = blogs.map(blog => blog.user === user.id)
    return temp
}

/**
 * Funktio korvaa listalla olevan vanhan blogin uudella blogilla id:n perusteella. 
 */
const updateBlogList = (blogs, newBlog) => {
    try 
    {
        return blogs.map(blog => { return blog.id === newBlog.id ? newBlog : blog })
    }
    catch (error) 
    {
        return blogs
    }
}

export default { sortBlogsByUserID, updateBlogList }