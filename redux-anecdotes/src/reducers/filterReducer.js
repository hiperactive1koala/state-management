import { createSlice } from "@reduxjs/toolkit"

const initialState = ''
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers : {
    filterChange(state, action) {
      const value = action.payload
      return value
    }
  }
})

export const { filterChange } = filterSlice.actions
export default filterSlice.reducer