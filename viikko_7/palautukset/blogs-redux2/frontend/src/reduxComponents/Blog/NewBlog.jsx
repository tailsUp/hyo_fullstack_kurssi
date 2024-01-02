import { useState, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//Reducers:
import showReducer from '../../reducers/showReducer'
import { createBlog } from '../../reducers/blogReducer'
import { notificationText } from '../../reducers/notificationReducer'
import { timerID } from '../../reducers/timerReducer'
import userReducer from '../../reducers/userReducer'

const createStyle = {
    color: 'white',
    backgroundColor: 'green',
    borderColor: 'black',
}

const cancelStyle = {
    color: 'black',
    backgroundColor: 'red',
    borderColor: 'black',
}

const NewBLog = () => {
    const dispatch = useDispatch()
    const [show, setShow] = useReducer(showReducer, 'none')
    const [show2, setShow2] = useReducer(showReducer, 'block')
    const [addCancel, setAddCancel] = useState('')

    const [newTitle, setNewTitle] = useState('')
    const [newAuthor, setNewAuthor] = useState('')
    const [newURL, setNewURL] = useState('')
    const [newLikes, setNewLikes] = useState('')

    const user = useSelector((state) => state.loginReducer)
    const users = useSelector((state) => state.useReducer)

    const addOrCancel = (event) => {
        event.preventDefault()
        if (addCancel === 'add') {
            console.log('CREATE NEW BLOG')
            addBlog()
        } else if (addCancel === 'cancel') {
            console.log('CANCEL')
            setShow(false)
            open(setShow, show)
            emptyInputs()
        }
    }

    const addBlog = () => {
        let infoText = ''
        try {
            dispatch(
                createBlog({
                    title: newTitle,
                    author: newAuthor,
                    url: newURL,
                    likes: newLikes ? newLikes : 0,
                    username: user.username,
                    token: user.token,
                })
            )
            infoText = `Blog ${newTitle} has been added.`
            emptyInputs()
        } catch (error) {
            infoText = 'Error in adding blog. Please try again!'
        }

        dispatch(notificationText(infoText))
        const a = setTimeout(() => {
            dispatch(notificationText([]))
        }, 5000)
        dispatch(timerID(a))
    }

    const open = (setShow, show) => {
        console.log('TOGGLE FORM VIEW')
        if (show === 'none') {
            setShow(true)
            setShow2(false)
        } else {
            setShow(false)
            setShow2(true)
        }
    }

    const emptyInputs = () => {
        setNewTitle('')
        setNewAuthor('')
        setNewURL('')
        setNewLikes('')
    }

    const view = (setShow, show, id) => {
        console.log('TOGGLE BLOCK VIEW')
        if (show === 'none') {
            setShow(true)
            //document.getElementById(id).innerHTML = 'Hide new blog'
        } else {
            setShow(false)
            //document.getElementById(id).innerHTML = 'Create new blog'
        }
    }

    return (
        <div>
            <div>
                <br />
            </div>
            <div style={{ display: `${show2}` }}>
                <button
                    id={'buttonForm'}
                    onClick={() => view(setShow, show, 'buttonForm')}
                >
                    Create new blog
                </button>
            </div>
            <div id="divForm" style={{ display: `${show}` }}>
                <h4>Add new Blog to DB</h4>
                <div id="divNewBlog">
                    <form id="formNewBlog" onSubmit={addOrCancel}>
                        <div>
                            <label>
                                title:{' '}
                                <input
                                    type="text"
                                    id="inputBlogTitle"
                                    data-testid="inputBlogTitle"
                                    name="inputBlog"
                                    value={newTitle}
                                    onChange={(event) =>
                                        setNewTitle(event.target.value)
                                    }
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                author:{' '}
                                <input
                                    type="text"
                                    id="inputBlogAuthor"
                                    data-testid="inputBlogAuthor"
                                    name="inputBlog"
                                    value={newAuthor}
                                    onChange={(event) =>
                                        setNewAuthor(event.target.value)
                                    }
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                url:{' '}
                                <input
                                    type="text"
                                    id="inputBlogUrl"
                                    data-testid="inputBlogUrl"
                                    name="inputBlog"
                                    value={newURL}
                                    onChange={(event) =>
                                        setNewURL(event.target.value)
                                    }
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                likes:{' '}
                                <input
                                    type="number"
                                    id="inputBlogLikes"
                                    data-testid="inputBlogLikes"
                                    name="inputBlog"
                                    value={newLikes}
                                    onChange={(event) =>
                                        setNewLikes(event.target.value)
                                    }
                                />
                            </label>
                        </div>
                        <div>
                            <div>
                                <button
                                    id="buttonCreate"
                                    style={createStyle}
                                    type="submit"
                                    onClick={() => setAddCancel('add')}
                                >
                                    Create
                                </button>
                            </div>
                            <div>
                                <button
                                    id="buttonCancel"
                                    style={cancelStyle}
                                    type="submit"
                                    onClick={() => setAddCancel('cancel')}
                                >
                                    Cancel
                                </button>
                            </div>
                            <br />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewBLog
