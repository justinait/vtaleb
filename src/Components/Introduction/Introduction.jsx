import React from 'react'
import './Introduction.css'
import hero from '/hero.jpg'

function Introduction() {
  return (
    <div className='introContainer'>
        <img className='introImage' src={hero} alt="" />
        <div className='introTextBox'>
            <p className='introTitle'>¡HOLA!</p>
            <p className='introText'>Te invitamos a vivir una experiencia 
                completa de belleza. Somos un 
                equipo de profesionales altamente 
                capacitados, especializados en 
                maquillaje, peinado, cejas, pestañas 
                y tratamientos faciales.
                <br />
                <br />
                En nuestra sede de Paraná, Entre 
                Ríos, encontraras la Academia de 
                Valentina Taleb, ofrecemos clases 
                de automaquillaje, cursos de 
                maquillaje profesional, 
                perfeccionamiento para 
                maquilladores y curso intensivo de 
                peinados.
                <br />
                <br />
                Confiá en nosotras para realzar tu 
                belleza en tus momentos 
                especiales.
                <br />
                <br />
                <strong>
                ¡Esperamos verte pronto en 
                VALENTINA TALEB MAKE UP 
                STUDIO, tu lugar para mimarte!
                </strong>
            </p>
        </div>
    </div>
  )
}

export default Introduction