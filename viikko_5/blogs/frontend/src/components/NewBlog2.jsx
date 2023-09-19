const newBLog = (props) => {

    /*const handleNewBlog = async (event) => {
        event.preventDefault()
          const tempBlog = {
            title: event.target[0].value,
            author: event.target[1].value,
            url: event.target[2].value,
            likes: event.target[3].value ? event.target[3].value : 0,
            username: props.user.username
      }*/

    return (
        <div>
            <h4>Add new Blog to DB</h4>
            <div id="divNewBlog3" >
                <form id="formNewBlog" onSubmit={props.click}>
                    <div>
                        <label>title:   <input type="text" id="inputBlogTitle" name="inputBlog" onChange={props.newTitle}/></label>
                    </div>
                    <div>
                        <label>author:  <input type="text" id="inputBlogAuthor" name="inputBlog" onChange={props.newAuthor}/></label>
                    </div>
                    <div>
                        <label>url:     <input type="text" id="inputBlogUrl" name="inputBlog" onChange={props.newURL}/></label>
                    </div>
                    <div>
                        <label>likes:   <input type="Number" id="inputBlogLikes" name="inputBlog" onChange={props.newLikes}/></label>
                    </div>
                    <div>
                        <br/>
                        <input type="submit" value="Add new Blog"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default newBLog

/*

<form id="formNewBlog" onSubmit={props.click}>

*/