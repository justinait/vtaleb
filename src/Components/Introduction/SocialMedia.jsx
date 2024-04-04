import React from 'react'
import './SocialMedia.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';

function SocialMedia() {
  return (
    <div className='socialMediaBox'>
        <p>Encontranos en</p>
        <div>
          <InstagramIcon className='socialMediaIcons'/>
            
        </div>
    </div>
  )
}

export default SocialMedia