import React from 'react'
import { HeaderContainer, HeaderLeft, HeaderRight } from './Header'
import SearchIcon from '@mui/icons-material/Search'
import Avatar from '@mui/material/Avatar'
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <SearchIcon />
        <input type="text" placeholder='Search for Artists, Songs or other' />
      </HeaderLeft>
      <HeaderRight>
        <Avatar />
        <h4>cascoLucasIsaias</h4>
      </HeaderRight>
    </HeaderContainer>
  )
}

export default Header
