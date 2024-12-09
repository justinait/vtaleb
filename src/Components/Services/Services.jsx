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
            description: `Servicio de maquillaje que se adapta a tu estilo y a tus necesidades. <br/> <br/> Ofrecemos un maquillaje de alta durabilidad, realizado con productos de calidad. <br/> <br/> Nuestro estudio esta totalmente equipado, y nuestros profesionales altamente capacitados para poder brindarte una experiencia inolvidable. <br/> <br/>`,
            includes: ['Perfilado de Cejas', 'Perfilado de Cejas'],
            subtitle: 'Maquillaje Social',
            link: '',
            options: 'Maquillaje social a domicilio. Sujeto a disponibilidad. Si se requiere el servicio a domicilio, aconsejamos reservar con anticipación.',
            trial: 'Prueba de makeup'
        },
        {
            name: 'Hair Style', 
            image: makeup,
            duration: '1 hora', 
            description: `Tu peinado adaptado a tu estilo y personalidad, alta durabilidad, realizados con productos de calidad.<br/> <br/>`,
            subtitle: 'Peinados',
            link: '',
            options: ' El servicio se realiza tanto en estudio como a domicilio. En el caso de necesitar servicio a domicilio, consultar disponibilidad y valor adicional.',
            trial: 'Prueba de Peinados',
            trialSubtitle: 'Tiene un valor del 50% del servicio de peinado social.',
            trialDescription: ''
        },
        {name: 'Brides', image: makeup},
        {name: 'Fifteen Years Party', image: makeup},
        {name: 'Brows & Lashes', image: makeup},
        {name: 'Nails', image: makeup},
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