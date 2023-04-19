import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null
}

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    SET_TOKEN: (state, action) => {
      state.token = action.payload
    }
  }
})

export const { SET_TOKEN } = tokenSlice.actions

export const selectToken = state => state.token.token

export const tokenReducer = tokenSlice.reducer

export default tokenSlice.reducer
