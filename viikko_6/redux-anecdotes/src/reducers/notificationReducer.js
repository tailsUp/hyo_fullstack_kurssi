/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit"
import { timerID } from '../reducers/timerReducer'

const notificationSlice = createSlice(
  {
    name: '_slicerNotification',
    initialState: '',
    reducers:
    {
      notificationText2(state, action) {
        return action.payload
      }
    }
  }
)

//export const { notificationEmpty, notificationText, notificationReducer } = notificationSlice.actions
export const { notificationText2 } = notificationSlice.actions

export const notificationText = (_content, _time) => {
  return async dispatch => {
    console.log('Notification THUNK called')
    const time = _time * 1000

    dispatch(notificationText2(_content))
    const a = setTimeout(() => {
      dispatch(notificationText2([]))
    }, time)
    dispatch(timerID(a))
  }
}

export default notificationSlice.reducer