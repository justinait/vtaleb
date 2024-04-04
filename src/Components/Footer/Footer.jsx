import React from 'react'
import './Footer.css'
import logo from '/logo.png'

function Footer() {
  return (
    <div className='footerContainer'>
        <img src={logo} alt="V" className='logoFooter'/>
        <p className='valentinaFooter'>Valentina <br /> Taleb</p>

        <div className='separator'></div>
        {/* //redes */}
        <p className='footerCopyright'>Copyright © 2024 · Todos los derechos reservados <br />
        <strong>Powered by ImJustWebs</strong></p>
    </div>
  )
}

export default Footer