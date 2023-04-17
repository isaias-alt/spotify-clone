import React from 'react'
import { FooterCenter, FooterContainer, FooterLeft, FooterRight } from './Footer'
import ShuffleIcon from '@mui/icons-material/Shuffle'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import RepeatIcon from '@mui/icons-material/Repeat'
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay'
import VolumeDownIcon from '@mui/icons-material/VolumeDown'
import { Grid, Slider } from '@mui/material'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeft>
        <img src="https://static.posters.cz/image/750/buque-costero/coldplay-parachutes-album-cover-i56853.jpg" alt="cover" />
        <div>
          <h4>Shape of My Heart</h4>
          <p>Sting</p>
        </div>
      </FooterLeft>
      <FooterCenter>
        <ShuffleIcon />
        <SkipPreviousIcon />
        <PlayCircleIcon />
        <SkipNextIcon />
        <RepeatIcon />
      </FooterCenter>
      <FooterRight>
        <Grid container spacing={2}>
        <Grid item> <PlaylistPlayIcon /> </Grid>
        <Grid item> <VolumeDownIcon />  </Grid>
        <Grid item xs> <Slider size="small"/> </Grid>
        </Grid>
      </FooterRight>
    </FooterContainer>
  )
}

export default Footer
