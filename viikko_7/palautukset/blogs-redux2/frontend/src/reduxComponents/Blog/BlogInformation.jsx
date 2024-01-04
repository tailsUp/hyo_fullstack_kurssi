const infoStyle = {
    paddingTop: 10,
    paddingLeft: '15px',
    //border: 'solid',
    //borderWidth: 1,
    //marginBottom: 5
}

const voteStyle = {
    color: 'white',
    backgroundColor: 'green',
    borderColor: 'black',
}

const delStyle = {
    color: 'black',
    backgroundColor: 'red',
    borderColor: 'black',
}

const BlogInformation = ({ blog, show, vote, del }) => {
    return (
        <div id={'div' + blog.id} style={{ display: `${show}` }}>
            <div style={infoStyle}>
                <div>author: {blog.author}</div>
                <div>information: {blog.info}</div>
                <div>likes: {blog.likes}</div>
                <div>
                    <div>
                        <button id="btnVote" style={voteStyle} onClick={() => vote(blog)} >like</button>
                    </div>
                    <br />
                    <div>
                        <button id="btnDelete" style={delStyle} onClick={() => del(blog)} >delete</button>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default BlogInformation
