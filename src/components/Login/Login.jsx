import { LoginButton, LoginContainer } from './Login'

const endpoint = 'https://accounts.spotify.com/authorize'
const clientID = '971583d86df04596ad9f2e3757b81d66'
const redirectURI = 'https://super-spotify-clone.vercel.app/'
const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state'
]
const LOGIN_URL = `${endpoint}?client_id=${clientID}&response_type=token&redirect_uri=${redirectURI}&scope=${scopes.join('%20')}&show_dialog=true`

const Login = () => {
  return (
    <LoginContainer>
      <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="spotify logo"/>
      <LoginButton href={LOGIN_URL}>Login with Spotify</LoginButton>
    </LoginContainer>
  )
}

export default Login
