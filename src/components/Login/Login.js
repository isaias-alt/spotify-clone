import styled from 'styled-components'

const LoginContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background: #000000;
  & img {
    width: 100%;
  }
`

const LoginButton = styled.a`
  padding: 20px;
  background-color: #1db954;
  border-radius: 90px;
  color: #ffffff;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600;
`

export { LoginContainer, LoginButton }
