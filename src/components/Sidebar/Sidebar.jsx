import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
import { Playlists, SidebarContainer } from './Sidebar'
import SidebarChoice from './SidebarChoice'
import { useSelector } from 'react-redux'
import { selectPlaylist } from '../../features/PlaylistSlice'

const Sidebar = () => {
  const playlist = useSelector(selectPlaylist)
  return (
    <SidebarContainer>
      <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="logo" />
      <SidebarChoice title="Home" Icon={HomeIcon} />
      <SidebarChoice title="Search" Icon={SearchIcon} />
      <SidebarChoice title="Your Library" Icon={LibraryMusicIcon} />
      <Playlists>Playlists</Playlists>
      <hr />
      <h5>
        { playlist?.name}
      </h5>
    </SidebarContainer>
  )
}

export default Sidebar
