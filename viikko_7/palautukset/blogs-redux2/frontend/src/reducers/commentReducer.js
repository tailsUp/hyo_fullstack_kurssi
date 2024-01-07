import { createSlice } from '@reduxjs/toolkit'
import commentService from '../services/commentService'

const asComment = (_comment, _blogID, _userID) => {
    return {
        comment: _comment,
        blogID: _blogID,
        userID: _userID,
    }
}

const initialState = []

const commentSlice = createSlice({
    name: '_slicerComment',
    initialState,
    reducers: {
        createComment(state, action) {
            return state.push(asComment(action.payload))
        },
        appendComment(state, action) {
            state.push(action.payload)            
        },
        setComments(state, action) {
            return action.payload
        },
        getComments(state, action) {
            return state
        },
    },
})

export const { createComment, appendComment, setComments, getComments, } = commentSlice.actions

/**
 * 
 * Redux-thunk funktiota käytetään uuden olion luomiseen. Funktio palauttaa funktiokutsun.
 * 
 * @param {Object} _blog    - Sisältää uuden blogin tiedot. 
 * @returns funktio kutsu.
 */
export const createNewComment = _comment => {
    return async dispatch => {
        const x = asComment(_comment.comment, _comment.blogID, _comment.userID, _comment.username)
        dispatch(await commentService.create(x, _comment.token).then((_c) => appendComment(_c)))
    }
}

export const updateBlogComments = () => {
    return async dispatch => {
        const _list = await commentService.getAll()
        dispatch(setComments(_list))
    }
}

export default commentSlice.reducer