import BlogInformation from '../Blog/BlogInformation'

const ViewBlogButton = ({ blog, view, setShow, show, vote, del }) => {
    return (
        <div>
            <BlogInformation blog={blog} setShow={setShow} show={show} vote={vote} del={del}/>
            <button id={'buttonView' + blog.id} onClick={() => view(setShow, show, `buttonView${blog.id}`)}>view</button>
        </div>
    )
}

export default ViewBlogButton
