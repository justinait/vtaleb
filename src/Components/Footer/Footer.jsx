import React from 'react'
import './Footer.css'
import logo from '/logo.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footerContainer'>
      <div className='footerSubcontainer'>

        <div className='footerBranding'>
          <img src={logo} alt="V" className='logoFooter'/>
          <p className='valentinaFooter'>Valentina <br /> Taleb</p>
        </div>

        <div className='separator'></div>
          
        <InstagramIcon className='footerInstagram'/>
      
      </div>
      <div>
        <p className='footerCopyright'>Copyright © 2024 · Todos los derechos reservados ·  <br className='brFooter'/>
        <strong>Powered by<Link  target='_blank' to="https://imjustwebs.com/" className='justina'> ImJustWebs</Link></strong></p>
      </div>
    
    </div>
  )
}

export default Footer