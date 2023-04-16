import React from 'react'
import Sidebar from '../Sidebar/Sidebar.jsx'
import Body from '../Body/Body.jsx'
import { SpotifyBody } from './Player'
import Footer from '../Footer/Footer.jsx'

const Player = () => {
  return (
    <>
    <SpotifyBody>
      <Sidebar />
      <Body />
    </SpotifyBody>
    <Footer />
    </>
  )
}

export default Player
