import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Login from './components/Login/Login.jsx'
import Player from './components/Player/Player.jsx'
import { getTokenFromURL } from './spotifyLoginLogic.js'
import { SET_USER, selectUser } from './features/UserSlice.js'
import { SET_TOKEN, selectToken } from './features/TokenSlice.js'
import { SET_PLAYLIST } from './features/PlaylistSlice.js'
import SpotifyWebApi from 'spotify-web-api-js'

const spotify = new SpotifyWebApi()

export default function App () {
  // eslint-disable-next-line no-unused-vars
  const token = useSelector(selectToken)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const hash = getTokenFromURL()
    const _token = hash.access_token
    if (_token) {
      dispatch(SET_TOKEN(_token))
      spotify.setAccessToken(_token)
      spotify.getMe().then(user => dispatch(SET_USER(user)))
      spotify.getPlaylist('5ZEY1gtao9eGzvAD3KEh2x').then(playlist => {
        dispatch(SET_PLAYLIST(playlist))
      })
    }
  }, [dispatch])

  return (
    <div className="App">
      {
        token && user ? <Player /> : <Login />
      }
    </div>
  )
}
