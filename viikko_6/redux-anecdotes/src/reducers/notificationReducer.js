/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice(
  {
    name: '_slicerNotification',
    initialState: '',
    reducers:
    {
        notificationText(state, action) 
        {
            return action.payload
        }
    }
  }
)

//export const { notificationEmpty, notificationText, notificationReducer } = notificationSlice.actions
export const { notificationText } = notificationSlice.actions
export default notificationSlice.reducer