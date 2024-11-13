import React from 'react'
import makeup from '../../assets/images/services/makeup.jpg'
import './Services.css'

function Services() {
    const services = [
        {name: 'Makeup', image: makeup},
        {name: 'Hair Style', image: makeup},
        {name: 'Fifteen', image: makeup},
        {name: 'Brows & Lashes', image: makeup},
        {name: 'Nails', image: makeup},
        {name: 'Automakeup', image: makeup},
    ]
    
  return (
    <section className='sectionContainer'>
        <p className='titleSection'>SERVICIOS</p>
        <div className='separatorSections'></div>

        <div className='servicesContainer'>
            {services.map((e, i)=> (
                <div className='servicesBox' key={i}>
                    <img src={e.image} alt={e.image} />
                    <p className='serviceTxt'>  &gt; {e.name} </p>
                </div>
            ))}
        </div>

    </section>
  )
}

export default Services