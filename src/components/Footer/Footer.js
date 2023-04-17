import styled from 'styled-components'

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  height: 90px;
  width: 100vw;
  background-color: #181818;
  color: #ffffff;

`

const FooterLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  max-width: 300px;
  margin-left: 15px;
  & img {
    height: 60px;
    width: 60px;
    margin-right: 20px;
    object-fit: contain;
  }
`

const FooterCenter = styled.div`
  flex: 0.4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 300px;
`

const FooterRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-right: 20px;
  & .MuiSlider-root {
    width: 100px;
    color: #FFFFFF;
  }

  & .MuiSlider-root:hover {
    color: #1ED760;
  }
`

export { FooterContainer, FooterLeft, FooterCenter, FooterRight }
