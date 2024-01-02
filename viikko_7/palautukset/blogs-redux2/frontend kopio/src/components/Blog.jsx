/**
 * Funktio palauttaa blog elementin.
 */
const Blog = ({ blog }) => {
  return (
    <div id={blog.title}>
      {blog.title} {blog.author}
    </div>
  )
}

export default Blog