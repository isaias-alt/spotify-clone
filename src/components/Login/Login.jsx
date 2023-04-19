import { LoginButton, LoginContainer } from './Login'
import { LOGIN_URL } from '../../spotifyLoginLogic.js'

const Login = () => {
  return (
    <LoginContainer>
      <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="spotify logo"/>
      <LoginButton href={LOGIN_URL}>Login with Spotify</LoginButton>
    </LoginContainer>
  )
}

export default Login
