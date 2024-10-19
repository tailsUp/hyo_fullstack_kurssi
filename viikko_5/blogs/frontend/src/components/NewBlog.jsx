const newBLog = (props) => {

  return (
    <div>
      <h4>Add new Blog to DB</h4>
      <div id="divNewBlog2">
        <input type="submit" value="New blog" onClick={props.toggle} id="newBlogAdd"/>
        <br/><br/>
      </div>
      <div id="divNewBlog3" style={{ display: 'none' }}>
        <form id="formNewBlog">
          <div>
            <label>title:   <input type="text" id="inputBlogTitle" data-testid="inputBlogTitle" name="inputBlog" onChange={props.newTitle}/></label>
          </div>
          <div>
            <label>author:  <input type="text" id="inputBlogAuthor" data-testid="inputBlogAuthor" name="inputBlog" onChange={props.newAuthor}/></label>
          </div>
          <div>
            <label>url:     <input type="text" id="inputBlogUrl" data-testid="inputBlogUrl" name="inputBlog" onChange={props.newURL}/></label>
          </div>
          <div>
            <label>likes:   <input type="Number" id="inputBlogLikes" data-testid="inputBlogLikes" name="inputBlog" onChange={props.newLikes}/></label>
          </div>
          <div>
            <br/>
            <input type="submit" value="Add new Blog" onClick={props.click}/>
          </div>
        </form>
      </div>
      <div id="divNewBlog4" style={{ display: 'none' }}>
        <br/>
        <input type="submit" value="Cancel" onClick={props.toggle} id="newBlogCancel"/>
      </div>
    </div>
  )
}
export default newBLog