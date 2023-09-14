const newBLog = ({click}) => {
    return (
        <div>
            <h4>Add new Blog to DB</h4>
            <form>
                <div>
                    <label>title:   <input type="text" id="inputBlogTitle" name="inputBlog" /></label>
                </div>
                <div>
                    <label>author:  <input type="text" id="inputBlogAuthor" name="inputBlog" /></label>
                </div>
                <div>
                    <label>url:     <input type="text" id="inputBlogUrl" name="inputBlog" /></label>
                </div>
                <div>
                    <label>likes:   <input type="text" id="inputBlogLikes" name="inputBlog" /></label>
                </div>
                <div>
                    <input type="submit" value="Add new Blog" onClick={click}/>
                </div>
            </form>
        </div>
    )
}
export default newBLog