import { createSlice } from '@reduxjs/toolkit'
import userService from '../services/userService'

const asUser = (_username, _blogs) => {
    return {
        username: _username,
        blogs: _blogs,
    }
}

const userSlice = createSlice({
    name: '_slicerUser',
    initialState: [],
    reducers: {
        createUser(state, action) {
            try {
                const _new = asUser(
                    action.payload.username,
                    action.payload.blogs
                )
                state.concat(_new)
                return state
            } catch (error) {
                //Error lisäyksessä
                console.log('Error: ', error)
                state = []
                return state
            }
        },
        appendUsers(state, action) {
            state.push(action.payload)
        },
        setUsers(state, action) {
            console.log('setUsers: ', action.payload)
            return action.payload
        },
        getUsers(state, action) {
            return state
            //return action.payload
        },
        updateUserBlogs(state, action) {
            //action.payload pitäisi sisältää kokonaan uusi korvaavaa user olio
            console.log('STATE ', JSON.parse(JSON.stringify(state)))

            //Tässä muokataan blogilista siihen muotoon jossa se on 
            //käyttäjän tietojen alla tietokannassa.
            action.payload.blogs.map((_b) => { { return _b.id } })

            const temp = {
                ...action.payload,
                __v: action.payload.blogs.length,
            }

            if(temp)
            {
                const response = userService.update(temp.id, temp)
                if (response === 'error') {
                    //Error in updating
                    console.log('ERROR IN UPDATING USER BLOGS!')
                    return state
                } else {
                    //Update OK
                    console.log('USER DATABASE HAS BEEN UPDATED SUCCESFULLY"')
                    return state.map((a) => (a.id !== temp.id ? a : temp))
                }
            }
        },
    },
})

export const { createUser, appendUsers, setUsers, getUsers, updateUserBlogs } = userSlice.actions
export default userSlice.reducer
