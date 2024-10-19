import BlogInfo from './FullBlogInfo'
//{ blogs, user }
const blogs = (props) => {

  if(props.user === null || props.user === undefined)
  {
    return noLogin()
  }
  else
    if(props.blogs === undefined || props.blogs === null || props.blogs.length === 0)
    {
      return blogListEmpty()
    }

  return blogListPopulated(props)
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
//{ blogs }
const blogListPopulated = (props) => {
  console.log(props)
  let index = 0
  return (
    <div>
      <h4>Your blogs:</h4>
      {props.blogs.map(blog =>
        <div key={blog.title + blog.author}>
          <BlogInfo b={blog} nro={index++} user={props.user} updateOldBlog={props.updateOldBlog} deleteBlogs={props.deleteBlogs}/>
        </div>
      )}
    </div>
  )
}

export default blogs