import React from 'react'
import { BodyContainer, Info, InfoText, Songs, Icons } from './Body'
import Header from './Header.jsx'
import { useSelector } from 'react-redux'
import { selectPlaylist } from '../../features/PlaylistSlice.js'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled'
import FavoriteIcon from '@mui/icons-material/Favorite'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import SongRow from './SongRow.jsx'

const Body = () => {
  const playlist = useSelector(selectPlaylist)
  return (
    <BodyContainer>
      <Header />
      <Info>
        <img src={playlist?.images?.[0]?.url} alt="playlist image" />
        <InfoText>
          <h4>PLAYLIST</h4>
          <h2>Dicover Weakly</h2>
          <p>{ playlist?.name }</p>
        </InfoText>
      </Info>
      <Songs>
        <Icons>
          <PlayCircleFilledIcon fontSize='large' className='playButton'/>
          <FavoriteIcon fontSize='large' className='favoriteButton'/>
          <MoreHorizIcon fontSize='large' className='moreButton'/>
        </Icons>
        {
          playlist?.tracks?.items.map((item, index) => (
            <SongRow track={item.track} key={index} />
          ))
        }
      </Songs>
    </BodyContainer>
  )
}

export default Body
