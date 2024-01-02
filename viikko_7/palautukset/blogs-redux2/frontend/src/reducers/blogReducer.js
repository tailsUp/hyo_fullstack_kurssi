import { createSlice } from '@reduxjs/toolkit'
import blogService from '../services/blogService'

const asBlog = (_title, _author, _url, _likes) => {
    return {
        title: _title,
        author: _author,
        url: _url,
        likes: _likes,
    }
}

const asBlog2 = (_title, _author, _url, _likes, _x) => {
    return {
        title: _title,
        author: _author,
        url: _url,
        likes: _likes,
        username: _x,
    }
}

const initialState = []

const blogSlice = createSlice({
    name: '_slicerBlog',
    initialState,
    reducers: {
        createBlog(state, action) {
            console.log('action: ', action.payload)
            try {
                /*const _new = asBlog(
                    action.payload.title,
                    action.payload.author,
                    action.payload.url,
                    parseInt(action.payload.likes)
                )*/
                const _new = asBlog2(
                    action.payload.title,
                    action.payload.author,
                    action.payload.url,
                    parseInt(action.payload.likes),
                    action.payload.username
                )
                //dispatch(setUsers(users)))
                blogService.create(_new, action.payload.token).then((test) => console.log('TEST: ', test))
                console.log('TEST: ', test)
                state.push(_new)
            } catch (error) {
                //Error lisäyksessä
                console.log('Error: ', error)
            }
        },
        addLikes(state, action) {
            console.log('STATE ', JSON.parse(JSON.stringify(state)))
            const temp = {
                ...action.payload,
                likes: parseInt(action.payload.likes) + 1,
            }
            const response = blogService.update(temp.id, temp)
            if (response === 'error') {
                //Error in updating
                return state
            } else {
                //Update OK
                return state.map((a) => (a.id !== temp.id ? a : temp))
            }
        },
        appendBlog(state, action) {
            state.push(action.payload)
        },
        setBlogs(state, action) {
            //console.log('SETBLOGS state: ', JSON.parse(JSON.stringify(state)))
            //console.log('setBlogs: ', action.payload)
            return action.payload
        },
        getBlogs(state, action) {
            return state
        },
        deleteBlog(state, action) {
            //Välitetään blogID ja kirjautumis-token.
            blogService.deleteBlog(action.payload.ID, action.payload.token)
            return state.filter((b) => b.id !== action.payload.ID)
        },
    },
})

export const {
    createBlog,
    addLikes,
    appendBlog,
    setBlogs,
    deleteBlog,
    getBlogs,
} = blogSlice.actions
export default blogSlice.reducer
