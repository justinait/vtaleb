import React from 'react'
import './Academy.css'
import image from '../../assets/images/studio.jpeg'

function Academy() {
  return (
        
    <section className='sectionContainer'>
      <p className='titleSection'>ACADEMIA</p>
      <div className='separatorSections'></div>

      <div className='academyContainer'>
        <img className='academyImage' src={image} alt="" />
        <div className='academyText'>
          <h2>Donde la inspiración se encuentra con la educación</h2>
          <p> Desde las bases hasta las tendencias más actuales, nuestros cursos están diseñados para todos los niveles, 
            desde principiantes hasta aquellos que buscan perfeccionar sus habilidades.
            <br />
          </p>
          {/* a este ponele italic */}
          <p className='italic'>Los cupos son limitados, asegúrate de reservar tu lugar con anticipación.</p>
          
        </div>
      </div>
      <h3> &gt; CURSOS</h3>

    </section>
  )
}

export default Academy