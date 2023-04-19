import { createSlice } from '@reduxjs/toolkit'

export const playlistSlice = createSlice({
  name: 'playlist',
  initialState: {
    playlist: []
  },
  reducers: {
    SET_PLAYLIST: (state, action) => {
      state.playlist = action.payload
    }
  }
})

export const { SET_PLAYLIST } = playlistSlice.actions

export const selectPlaylist = state => state.playlist.playlist

export const playlistReducer = playlistSlice.reducer
