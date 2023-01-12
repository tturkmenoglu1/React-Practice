import React from 'react'
import "./header.css"
import Logo from './logo/logo'
import Menu from './menu/menu'

const Header = () => {
  return (
      <div className='header'>
        <Logo />
        <Menu/>
      </div>
  )
}

export default Header