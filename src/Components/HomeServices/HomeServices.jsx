import React from 'react'
import './HomeServices.css'
// import hero from '/hero.png'

function HomeServices() {
  return (
    <div className='introContainer'>
        <div className='introTextBox'>

            <p className='homeServicesTitle'>¿A qué nos dedicamos?</p>
            <p className='homeServicesText'>
                <em>
                    Preparate para vivir una 
                    experiencia única y completa.
                </em>
                <br /><br />
            Cada servicio es realizado por 
            profesionales, altamente 
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
        </div>
        <img className='homeServicesImage' src='/hero.png' alt="" />
    </div>

  )
}

export default HomeServices