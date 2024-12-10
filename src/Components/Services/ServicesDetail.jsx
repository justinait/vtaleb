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

  const {name, duration, image, description, title, link, options} = service
  return (
    <section className="serviceDetailsContainer">

      <h2 className='serviceTitle'>&gt; {name}</h2>
      <div className='serviceBox'>

        <h4 className='subtitleServiceDetail'>{title}</h4>

        <div className='serviceInfoContainer'>
          <div className='h6BoxServicesDetail'>
            <div className='timeDiv'>
              <img className='clockImg' src={clock} alt="Tiempo" />
              <h6>Duración: {duration}</h6>
            </div>
            <h6>&gt; Realizado x VALENTINA TALEB</h6>
            <h6>&gt; Realizado x STAFF</h6>
          </div>
          <div
            className='serviceDetailText'
            dangerouslySetInnerHTML={{ __html: description }}>  
          </div>

          <div className='trialSection'>
            <h4>Prueba de {name}</h4>
            <p>Tiene un valor del 50% del servicio.
            <br />Duración: 1-2 horas.</p>
          </div>

          {options &&            <p className=' italic optionsServiceDetail'>{options}</p>          }
          <p className='italic señaTextDetailService'>*Se requiere seña para reservar el servicio.</p>

          <a href={link} target='_blank' className='button'>Quiero</a>

        </div>

        <img className='serviceDetailImage' src={image} alt={name} />
      </div>
    </section>
  );
}

export default ServicesDetail;
