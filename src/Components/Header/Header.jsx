import React, { useState } from 'react'
import './Header.css'
import logo from '/logo.png'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('home')
  const navigate = useNavigate();

  const handleOpen = () => {
    if(openMenu)
      return setOpenMenu(false);
    else 
      return setOpenMenu(true);
  }
  
  const handleClose = (id) => {
    setOpenMenu(false);
    if(id){
      setSelectedCategory(id);
    }
  }
  const sections = [
    { name: 'INICIO', id: 'home', className: ''},
    { name: 'SERVICIOS', id: 'services', className: '' },
    { name: 'ACADEMIA', id: 'academy', className: ''},
    { name: 'PORTFOLIO', id: 'portfolio', className: ''},
    { name: 'SOBRE MÍ', id: 'about', className: ''},
    { name: 'CONTACTO', id: 'contact', className: ''}
  ]

  return (
    <div className='headerContainer'>
      <Link to='/'><img className='logoHeader' src={logo} alt="V" onClick={handleClose}/></Link>
      
      <MenuRoundedIcon onClick={handleOpen} className='burgerMenuIcon' fontSize='small'/>

      {openMenu &&
        <div className='dropdownHeader'>
          
          <div className='dropdownItemsContainer'>
            
            {sections.map((e, i)=> {
              return <Link key={i} to={`/${e.id}`} onClick={()=>handleClose(e.id)} className={selectedCategory == e.id? 'activeNavbar': ''}>{e.name}</Link>
            })}
            
          </div>
        </div>
      }
    </div>
  )
}

export default Header