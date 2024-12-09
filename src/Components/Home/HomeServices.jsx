import React from 'react'
import './HomeServices.css'
import { Link } from 'react-router-dom'
import homeImage2 from '../../assets/images/home2.jpg'

function HomeServices() {
  return (
    <div>
        <div className='homeServicesContainer'>
            <div className='introTextBox'>
    
                <p className='homeServicesTitle'>¿A qué nos dedicamos?</p>
                <p className='homeServicesText'>
                    <em>
                        Preparate para vivir una 
                        experiencia única y completa.
                    </em>
                    <br /><br />
                Cada servicio es realizado por 
                profesionales, <br className='breakTablet'/> altamente 
                capacitados:
                </p>
                <div className='homeServicesItems'>
                    <p>· Makeup</p>
                    <p>· Hair Style</p>
                    <p>· Brides</p>
                    <p>· Fifteen years party</p>
                    <p>· Brows & Lashes</p>
                    <p>· Nails</p>
                    <p>· Automakeup</p>
                </div>
                <Link to='/services' className='button'>
                    Más Info
                </Link>
            </div>
            <img className='homeServicesImage' src={homeImage2} alt="" />
        </div>
        <p className='heroFinalPhrase'>El maquillaje no se trata de cubrirse, sino de descubrirse.</p>
    </div>

  )
}

export default HomeServices