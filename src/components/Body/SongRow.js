import styled from 'styled-components'

const SongRowContainer = styled.div`
  display: flex;
  margin-left: 25px;
  align-items: center;
  z-index: 90;
  color: #ffffff;
  &:hover{
    cursor: pointer;
    background-color: #121212;
    opacity: .8;
  }
  & img {
    height: 50px;
    width: 50px;
    object-fit: contain;
  }
`

const SongRowInfo = styled.div`
  padding: 10px;
`

export { SongRowContainer, SongRowInfo }
