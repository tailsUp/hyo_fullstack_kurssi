import { useState } from 'react'

const NewBLog2 = ({ createBlog, user }) => {

  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newURL, setNewURL] = useState('')
  const [newLikes, setNewLikes] = useState('')

  const addBlog = (event) => {
    event.preventDefault()
    createBlog({
      title: newTitle,
      author: newAuthor,
      url: newURL,
      likes: newLikes ? newLikes : 0,
      username: user.username
    })
    emptyInputs()
  }

  const emptyInputs = () => {
    setNewTitle('')
    setNewAuthor('')
    setNewURL('')
    setNewLikes('')
  }

  return (
    <div>
      <h4>Add new Blog to DB</h4>
      <div id="divNewBlog3" >
        <form id="formNewBlog" onSubmit={addBlog}>
          <div>
            <label>title:   <input type="text" id="inputBlogTitle" data-testid="inputBlogTitle" name="inputBlog" value={newTitle} onChange={event => setNewTitle(event.target.value)}/></label>
          </div>
          <div>
            <label>author:  <input type="text" id="inputBlogAuthor" data-testid="inputBlogAuthor" name="inputBlog" value={newAuthor} onChange={event => setNewAuthor(event.target.value)}/></label>
          </div>
          <div>
            <label>url:     <input type="text" id="inputBlogUrl" data-testid="inputBlogUrl" name="inputBlog" value={newURL} onChange={event => setNewURL(event.target.value)}/></label>
          </div>
          <div>
            <label>likes:   <input type="Number" id="inputBlogLikes" data-testid="inputBlogLikes" name="inputBlog" value={newLikes} onChange={event => setNewLikes(event.target.value)}/></label>
          </div>
          <div>
            <br/>
            <input id="submitNewBlog" data-testid="submitNewBlog" type="submit" value="Add new Blog"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewBLog2
