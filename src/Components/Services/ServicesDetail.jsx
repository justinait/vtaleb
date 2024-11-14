import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import clock from '../../assets/images/icons/clock.png'

function ServicesDetail() {
  const { id } = useParams();
  const location = useLocation();
  const service = location.state?.service;

  if (!service) {
    return <p>Servicio "{id}" no encontrado.</p>;
  }

  const {name, duration, image, description, subtitle} = service
  return (
    <section className="serviceDetailsContainer">

      <h2 className='serviceTitle'>&gt; {name}</h2>
      <div className='serviceBox'>

        <h4 className='subtitleServiceDetail'>{subtitle}</h4>

        <div className='serviceInfoContainer'>
          <div className='h6BoxServicesDetail'>
            <div className='timeDiv'>
              <img className='clockImg' src={clock} alt="Tiempo" />
              <h6>Duración: {duration}</h6>
            </div>
            <h6>&gt; Realizado x STAFF</h6>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: description }}>  
          </div>
          <p className='italic'>*Se requiere seña para reservar el servicio.</p>
          <p className='button'>Quiero</p>
        </div>

        <img className='serviceDetailImage' src={image} alt={name} />
      </div>
    </section>
  );
}

export default ServicesDetail;
