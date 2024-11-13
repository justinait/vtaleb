import React from 'react'
import './SocialMedia.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function SocialMedia() {
  return (
    <div className='socialMediaBox'>
      <p>Escribinos</p>
      <div className='socialMediaIconsContainer'>
        <WhatsAppIcon className='socialMediaIcons'/>
        <InstagramIcon className='socialMediaIcons'/>
      </div>
    </div>
  )
}

export default SocialMedia