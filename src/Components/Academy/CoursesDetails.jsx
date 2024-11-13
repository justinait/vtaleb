import React from 'react'
import bride from '../../assets/images/bride.jpg'
import './CoursesDetails.css'

function CoursesDetails() {
  return (
    <div>
        <h2> &gt; MAKEUP DE NOVIA</h2>
        
        {/* dia y hs */}
        <div className='infoMakeups'>
            <p>Martes y jueves 21hs</p>
            <p>&gt; Dictado por </p>
            <p>&gt; Modalidad virtual</p>


            <p>En nuestro curso especializado de Makeup de Novia, te sumergirás en el fascinante mundo del maquillaje nupcial, 
                donde aprenderás las técnicas más refinadas y los secretos mejor guardados para realzar la belleza de la novia 
                en su día más especial.
                <br /><br />
                Desde la preparación de la piel hasta la aplicación del maquillaje de larga duración, explorarás cada paso crucial 
                para crear looks impecables y duraderos que resalten la luminosidad y la naturalidad de la novia.
            </p>
            {/* italic: */}
            <p>*Se requiere seña para reservar el curso.</p>

            <p className='button'>QUIERO</p>
        </div>
        <img src={bride} alt="" />
    </div>
  )
}

export default CoursesDetails