import React from 'react'
import makeup from '../../assets/images/services/makeup.jpg'
import './Services.css'
import { useNavigate } from 'react-router-dom';
import { duration } from '@mui/material';

function Services() {

    const navigate = useNavigate();
    
    const services = [
        {
            name: 'Make up', 
            image: makeup, 
            duration: '1 hora', 
            description: `Servicio de maquillaje que se adapta a tu estilo y a tus necesidades. <br/> <br/> Ofrecemos un maquillaje de alta durabilidad, realizado con productos de calidad. <br/> <br/> Nuestro estudio esta totalmente equipado, y nuestros profesionales altamente capacitados para poder brindarte una experiencia inolvidable. <br/> <br/>`,
            includes: ['Perfilado de Cejas', 'Perfilado de Cejas'],
            title: 'Maquillaje Social',
            link: '',
            options: 'El servicio se realiza tanto en estudio como a domicilio. Consultar disponibilidad y valor adicional.',
        },
        {
            name: 'Social Hair Style', 
            image: makeup,
            duration: '1 hora', 
            description: `Tu peinado adaptado a tu estilo y personalidad, alta durabilidad, realizados con productos de calidad.<br/> <br/>`,
            title: 'Peinados',
            link: '',
            options: 'El servicio se realiza tanto en estudio como a domicilio. Consultar disponibilidad y valor adicional.',
        },
        {name: 'Brides', image: makeup},
        
        {
            name: 'Fifteen Years Party', 
            image: makeup,
            link: '',

            hair: {
                title: 'FIFTEENS HAIR STYLE',
                duration: '1 hora', 
                includes: ['Peinado', 'Prueba de peinado'],
                trial: 'Se realiza la prueba entre los 10 a 15 días anteriores al evento. En este momento se decide el look a realizar el día del festejo.',
            },

            makeup: {
                title: 'FIFTEENS MAKE UP',
                description: 'Ofrecemos un maquillaje de alta durabilidad, realizado con productos de calidad. En este caso, aplicamos una técnica en piel específica para la ocasión , denominada PIEL BLINDADA, resistente a sudor, lágrimas y roces.',
                duration: '1-2 horas',
                includes: ['Perfilado de cejas', 'Pestañas postizas'],
                trial: 'Se realiza la prueba entre los 10 a 15 días anteriores al evento. En este momento se decide el look a realizar el día del festejo.',
            },
            combos: {
                1:{
                    title: 'Combo Fifteens',
                    includes: ['Maquillaje Quince años', 'Peinado Quince años', 'Prueba de maquillaje y peinado'],
                    description: 'Este mismo cuenta de dos instancias, la primera se lleva a cabo el dia de la prueba, y la segunda el día del evento.',
                    duration: '2 horas y media.'
                },
                2:{
                    title: 'Combo Silver Fifteens',
                    includes: ['Maquillaje Quince años', 'Peinado Quince años', 'Perfilado de cejas', 'Pestañas postizas', 'Prueba de maquillaje y peinado', 'Maquillaje Social & Peinado Social para 1 acompañante'],
                    duration: '2 horas y media.'
                },
                3: {
                    title: 'Combo Golden Fifteens',
                    includes: ['Maquillaje Quince años', 'Peinado Quince años', 'Perfilado de cejas', 'Pestañas postizas', 'Prueba de maquillaje', 'Prueba de peinado', 'Coffee Break', 'Maquillaje social & Peinado Social para 3 acompañantes'],
                },
                4: {
                    title: 'Combo Deluxe Fifteens',
                    includes: ['Maquillaje Quince años', 'Peinado Quince años', 'Perfilado de cejas', 'Pestañas postizas','Prueba de maquillaje', 'Prueba de peinado', 'Coffee Break', 'Servicio a domicilio', 'Maquillaje social & Peinado Social para 6 acompañantes'],
                }
            }

        },
        {name: 'Brows & Lashes', image: makeup},
        {name: 'Nails', image: makeup},
    ]
    
    const handleServiceClick = (service) => {
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