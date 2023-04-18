import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Login from './components/Login/Login.jsx'
import Player from './components/Player/Player.jsx'
import { getTokenFromURL } from './spotifyLoginLogic.js'
import { SET_USER } from './features/UserSlice.js'

export default function App () {
  const [token, setToken] = useState('')
  const dispatch = useDispatch()
  const user = 'javascript'

  useEffect(() => {
    const hash = getTokenFromURL()
    if (hash && hash.access_token) {
      window.location.hash = ''
      const _token = hash.access_token
      dispatch(SET_USER({ user }))
    }
  }, [])

  return (
    <div className="App">
      {
        token ? <Player /> : <Login />
      }
    </div>
  )
}
