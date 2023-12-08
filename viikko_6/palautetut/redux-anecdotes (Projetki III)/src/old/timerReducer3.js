import { createSlice } from "@reduxjs/toolkit"

const timerSlice = createSlice(
  {
    name: '_slicerTimer',
    initialState: '',
    reducers:
    {
      timerID(state, action) {
        console.log('STATE SISÄÄN TULLESSA', JSON.parse(JSON.stringify(state)))
        console.log('ACTION ', JSON.parse(JSON.stringify(action)))
        if(state !== null && state !== undefined && state !== '') 
        {
          clearTimeout(state)
        }
        state = action.payload
        console.log('STATE ULOS LÄHTIESSÄ', JSON.parse(JSON.stringify(state)))
        return action.payload
      }
    }
  }
)

export const { timerID } = timerSlice.actions
export default timerSlice.reducer
