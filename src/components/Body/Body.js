import styled from 'styled-components'

const BodyContainer = styled.div`
  flex: 0.8;
  background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(0,0,0,1) 90%, rgba(40,0,47,1) 94%, rgba(49,0,51,1) 100%);
  color: #ffffff;
`

const Info = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 10px;
  & img {
    width: 18vw;
    margin: 0 20px;
    box-shadow: 0 4px 60px #000;
  }
`

const InfoText = styled.div`
  flex: 1;
  & h2{
    margin-bottom: 10px;
  }
`

const Songs = styled.div`
  margin: 20px -20px;
`

const Icons = styled.div`
margin-bottom: 30px;
& .playButton {
  margin: 20px 10px 0 100px;
}
& .playButton:hover {
  transform: scale(1.1) !important;
  cursor: pointer;
}
& .favoriteButton {
  color: #1ED760;
  margin: 20px 10px 0 100px;
}
& .favoriteButton:hover {
  transform: scale(1.1) !important;
  cursor: pointer;
}
& .moreButton {
  margin: 20px 10px 0 100px;
}
& .moreButton:hover {
  transform: scale(1.1) !important;
  cursor: pointer;
}
`

export { BodyContainer, Info, InfoText, Songs, Icons }
