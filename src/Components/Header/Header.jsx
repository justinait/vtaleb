import React, { useState } from 'react'
import './Header.css'
import logo from '/logo.png'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link, useNavigate } from 'react-router-dom';
import burgerMenu from '/burgerMenu.png'

function Header() {
  const windowWidth = window.innerWidth;
  const [openMenu, setOpenMenu] = (windowWidth <= 1023) ? useState(false): useState(true)
  const [selectedCategory, setSelectedCategory] = useState('home')

  const navigate = useNavigate();

  const handleOpen = () => {
    if (windowWidth <= 1023) {
      setOpenMenu(!openMenu);
    }
  }
  
  const handleClose = (id) => {
    setOpenMenu(false);
    if(id){
      setSelectedCategory(id);
    }
  }
  const sections = [
    { name: 'INICIO', id: 'home', className: 'homeItemNavbar'},
    { name: 'SOBRE MÍ', id: 'about', className: ''},
    { name: 'PORTFOLIO', id: 'portfolio', className: ''},
    { name: 'SERVICIOS', id: 'services', className: '' },
    { name: 'ACADEMIA', id: 'academy', className: ''},
    { name: 'CONTACTO', id: 'contact', className: ''}
  ]

  return (
    <div className='headerContainer'>
      <Link to='/'><img className='logoHeader' src={logo} alt="V" onClick={handleClose}/></Link>
      <img src={burgerMenu} alt="Menu" onClick={handleOpen} className='burgerMenuIcon' fontSize='small'/>
      {/* <MenuRoundedIcon onClick={handleOpen} className='burgerMenuIcon' fontSize='small'/> */}

      {openMenu &&
        <div className='dropdownHeader'>
          
          <div className='dropdownItemsContainer'>
            
            {sections.map((e, i)=> {
              return <Link key={i} to={`/${e.id}`} onClick={()=>handleClose(e.id)} className={`${e.className} ${selectedCategory === e.id ? 'activeNavbar' : ''}`}>{e.name}</Link>
            })}
            
          </div>
        </div>
      }
    </div>
  )
}

export default Header