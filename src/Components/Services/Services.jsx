import React from 'react'
import makeup from '../../assets/images/services/makeup.jpg'
import './Services.css'
import { useNavigate } from 'react-router-dom';

function Services() {

    const navigate = useNavigate();
    
    const services = [
        {
            name: 'Makeup', 
            image: makeup, 
            duration: '1 hora', 
            description: `Servicio de maquillaje que se adapta a tus necesidades y a tu estilo. <br/> <br/> Permítete sentirte única en ese momento tan especial… Nuestro estudio está completamente equipado y Nuestro staff sumamente capacitado para poder brindarte una experiencia inolvidable. <br/> <br/> Garantizamos un maquillaje de alta durabilidad, utilizando productos de calidad.`,
            subtitle: 'Maquillaje Social',
            
        },
        {name: 'Hair Style', image: makeup},
        {name: 'Fifteen', image: makeup},
        {name: 'Brows & Lashes', image: makeup},
        {name: 'Nails', image: makeup},
        {name: 'Automakeup', image: makeup},
    ]
    
    const handleServiceClick = (service) => {
        console.log("Navegando a servicio:", service); // Verificar si se está enviando el servicio correcto
        navigate(`/services/${service.name}`, { state: { service } });
    };
    
  return (
    <section className='sectionContainer'>
        <p className='titleSection'>SERVICIOS</p>
        <div className='separatorSections'></div>

        <div className='servicesContainer'>
            {services.map((e, i)=> (
                <div className='servicesBox' key={i}>
                    <img src={e.image} alt={e.image} />
                    <p 
                        className='serviceTxt'
                        onClick={() => handleServiceClick(e)}  
                    >&gt; {e.name} </p>
                </div>
            ))}
        </div>

    </section>
  )
}

export default Services