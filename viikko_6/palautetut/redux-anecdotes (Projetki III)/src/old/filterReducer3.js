import { createSlice } from "@reduxjs/toolkit"

const filterSlice = createSlice(
  {
    name: '_slicerFilter',
    initialState: '',
    reducers:
    {
      filterEmpty(state, action) {
        return action.payload
      },
      filterText(state, action) {
        return action.payload
      }
    }
  }
)

export const { filterEmpty, filterText, filterReducer } = filterSlice.actions
export default filterSlice.reducer
