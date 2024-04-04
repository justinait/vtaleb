import React from 'react'
import './HomeServices.css'
import { Link } from 'react-router-dom'
import hero from '/hero.jpg'

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
                    <p>· Automaquillaje</p>
                    <p>· Novias</p>
                    <p>· Limpieza Facial</p>
                    <p>· Depilacion Definitiva</p>
                    <p>· Editorial & Moda</p>
                    <p>· Brows & Lashes</p>
    
                </div>
                <p className='button'>
                    Más Info
                </p>
            </div>
            <img className='homeServicesImage' src='/hero.jpg' alt="" />
        </div>
        <p className='heroFinalPhrase'>El maquillaje no se trata de cubrirse, sino de descubrirse.</p>
    </div>

  )
}

export default HomeServices