import React from 'react'
import { HeaderContainer, HeaderLeft, HeaderRight } from './Header'
import SearchIcon from '@mui/icons-material/Search'
import Avatar from '@mui/material/Avatar'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/UserSlice'

const Header = () => {
  const user = useSelector(selectUser)
  return (
    <HeaderContainer>
      <HeaderLeft>
        <SearchIcon />
        <input type="text" placeholder='Search for Artists, Songs or other' />
      </HeaderLeft>
      <HeaderRight>
      <Avatar src={ user && user.images && user.images[0]?.url } alt={ user && user.id }/>
        <h4>
          {
            user.user && user.user.display_name ? user.user.display_name : 'Nombre de usuario'
          }
        </h4>
      </HeaderRight>
    </HeaderContainer>
  )
}

export default Header
