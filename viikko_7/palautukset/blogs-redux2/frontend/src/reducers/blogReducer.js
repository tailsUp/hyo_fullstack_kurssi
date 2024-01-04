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
            return state.push(asBlog2(action.payload))
        },
        addLikes(state, action) {
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
            //console.log('APPEND_BLOG STATE', JSON.parse(JSON.stringify(state)))
            state.push(action.payload)            
        },
        setBlogs(state, action) {
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

export const { createBlog, addLikes, appendBlog, setBlogs, deleteBlog, getBlogs, } = blogSlice.actions

/**
 * 
 * Redux-thunk funktiota käytetään uuden olion luomiseen. Funktio palauttaa funktiokutsun.
 * 
 * @param {Object} _blog    - Sisältää uuden blogin tiedot. 
 * @returns funktio kutsu.
 */
export const createNewBlog = _blog => {
    return async dispatch => {
        const x = asBlog2(_blog.title, _blog.author, _blog.url, _blog.likes, _blog.username)
        dispatch(await blogService.create(x, _blog.token).then((_b) => appendBlog(_b)))
        //dispatch(blogService.create(x, _blog.token).then((_b) => appendBlog(_b)))
    }
}

export default blogSlice.reducer
