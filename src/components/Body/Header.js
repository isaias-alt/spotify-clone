import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;

`

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  min-width: 75px;
  background-color: #121212;
  flex: 0.5;
  color: #ffffff;
  & input {
    padding: 10px;
    border-radius: 30px;
    border: none;
    width: 100%;
    background-color: #121212;
    outline: none;
  }
  & input:focus {
    background-color: #ffffff;
    color: #181818;
  }
`

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  color: #ffffff;
  & h4 {
    margin-left: 10px;
  }
`

export { HeaderContainer, HeaderLeft, HeaderRight }
