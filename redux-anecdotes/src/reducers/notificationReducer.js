import { createSlice } from "@reduxjs/toolkit"

const initialState = null
const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers : {
    notificationCreate(state, action) {
        return action.payload
    },
    notificationRemove() {
        return null
    }
  }
})

export const { notificationCreate, notificationRemove } = notificationSlice.actions

export const setNotification = (notification, timer) => {
  return async dispatch => {
    dispatch(notificationCreate(notification))
    setTimeout(() => {
      dispatch(notificationRemove())
    }, timer * 1000);
  }
}

export default notificationSlice.reducer