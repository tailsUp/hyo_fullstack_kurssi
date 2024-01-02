import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name: '_slicerNotification',
    initialState: '',
    reducers: {
        notificationText(state, action) {
            return action.payload
        },
    },
})

export const { notificationText } = notificationSlice.actions
export default notificationSlice.reducer
