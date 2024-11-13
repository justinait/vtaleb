import React from 'react'
import './Home.css'
import logo from '/logo.png'
import Introduction from './Introduction'
import SocialMedia from './SocialMedia'
import HomeServices from './HomeServices'

function Home() {
  return (
    <div>
      <div className='heroBox'>
        <img src={logo} alt="V" />
        <p className='heroTitle'>Valentina Taleb</p>
        <p className='heroSubtitle'>Make Up</p>
      </div>
      <Introduction/>
      <SocialMedia/>
      <HomeServices/>
    </div>
  )
}

export default Home