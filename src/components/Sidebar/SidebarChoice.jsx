import React from 'react'
import { Choices } from './SidebarChoices'

const SidebarChoice = ({ title, Icon }) => {
  return (
    <Choices>
      {
        Icon && <Icon />
      }
      {
        Icon ? <h4>{title}</h4> : <p>{title}</p>
      }
    </Choices>
  )
}

export default SidebarChoice
