import { useState, useEffect } from 'react'
import Login from './components/Login/Login.jsx'
import Player from './components/Player/Player.jsx'
import { getTokenFromURL } from './spotifyLoginLogic.js'

export default function App () {
  const [token, setToken] = useState('')
  useEffect(() => {
    const hash = getTokenFromURL()
    if (hash && hash.access_token) {
      window.location.hash = ''
      const _token = hash.access_token
      setToken(_token)
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
