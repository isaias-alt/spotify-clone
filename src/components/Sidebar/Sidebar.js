import styled from 'styled-components'

const SidebarContainer = styled.div`
  flex: 0.2;
  height: 100;
  background-color: #000000;
  min-width: 240px;
  color: #ffffff;
  & img {
    height: 70px;
    padding: 10px;
    margin-right: auto;
  }
  & hr {
    border: 1px solid #181818;
    width: 80%;
    margin: 10px auto;
  }
`

const Playlists = styled.div`
  margin: 5px 10px;
`

export { SidebarContainer, Playlists }
