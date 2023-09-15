const newBLog = ({click, newTitle, newAuthor, newURL, newLikes}) => {
    return (
        <div>
            <h4>Add new Blog to DB</h4>
            <form id="formNewBlog">
                <div>
                    <label>title:   <input type="text" id="inputBlogTitle" name="inputBlog" onChange={newTitle}/></label>
                </div>
                <div>
                    <label>author:  <input type="text" id="inputBlogAuthor" name="inputBlog" onChange={newAuthor}/></label>
                </div>
                <div>
                    <label>url:     <input type="text" id="inputBlogUrl" name="inputBlog" onChange={newURL}/></label>
                </div>
                <div>
                    <label>likes:   <input type="Number" id="inputBlogLikes" name="inputBlog" onChange={newLikes}/></label>
                </div>
                <div>
                    <input type="submit" value="Add new Blog" onClick={click}/>
                </div>
            </form>
        </div>
    )
}
export default newBLog