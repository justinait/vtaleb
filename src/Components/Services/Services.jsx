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
            title: 'Maquillaje Social',
            link: '',
            options: 'El servicio se realiza tanto en estudio como a domicilio. En el caso de necesitar servicio a domicilio, consultar disponibilidad y valor adicional.',
            trial: {
                title: 'Prueba de make up',
                description: 'Tiene un valor del 50% del servicio de maquillaje social',
                duration: '1 hora',
            }
        },
        {
            name: 'Social Hair Style', 
            image: makeup,
            duration: '1 hora', 
            description: `Tu peinado adaptado a tu estilo y personalidad, alta durabilidad, realizados con productos de calidad.<br/> <br/>`,
            title: 'Peinados',
            link: '',
            options: 'El servicio se realiza tanto en estudio como a domicilio. En el caso de necesitar servicio a domicilio, consultar disponibilidad y valor adicional.',
            trial: {
                title: 'Prueba de Peinados',
                description: 'Tiene un valor del 50% del servicio de maquillaje social',
                duration: '1-2 horas',
            },
        },
        {name: 'Brides', image: makeup},
        {
            name: 'Fifteen Years Party', 
            image: makeup,
            duration: '1 hora', 
            includes: ['Peinado','Prueba de peinado'],
            description: 'Se realiza la prueba entre los 10 a 15 días anteriores al evento. En este momento se decide el look a realizar el día del festejo.',
            title: 'FIFTEENS YEARS HAIR STYLE',
            link: '',

            options: 'El servicio se realiza tanto en estudio como a domicilio. En el caso de necesitar servicio a domicilio, consultar disponibilidad y valor adicional.',
            trial: {
                title: 'FIFTEEN MAKE UP',
                description: 'Ofrecemos un maquillaje de alta durabilidad, realizado con productos de calidad. En este caso, aplicamos una técnica en piel específica para la ocasión , denominada PIEL BLINDADA, resistente a sudor, lágrimas y roces.',
                duration: '1-2 horas',
                includes: ['Peinado','Prueba de peinado', 'Perfilado de cejas', 'Pestañas postizas'],
                description2: 'Se realiza la prueba entre los 10 a 15 días anteriores al evento. En este momento se decide el look a realizar el día del festejo.',
            },

        },
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