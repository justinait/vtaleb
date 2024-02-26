import React from 'react'
import './Header.css'
import logo from '/logo.png'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

function Header() {
  return (
    <div className='headerContainer'>
        <img className='logoHeader' src={logo} alt="V" />
        <MenuRoundedIcon className='burgerMenuIcon'/>
    </div>
  )
}

export default Header