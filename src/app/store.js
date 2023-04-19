import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/UserSlice.js'
import { tokenReducer } from '../features/TokenSlice.js'
import { playlistReducer } from '../features/PlaylistSlice.js'

export default configureStore({
  reducer: {
    user: userReducer,
    token: tokenReducer,
    playlist: playlistReducer
  }
})
