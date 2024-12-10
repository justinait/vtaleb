import React from 'react'
import makeup from '../../assets/images/services/makeup.jpg'
import './Services.css'
import { useNavigate } from 'react-router-dom';
import { duration } from '@mui/material';
import { Group } from '@mui/icons-material';

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
        {
            name: 'Brides', 
            image: makeup,

            hair: {
                title: 'Bride HAIR STYLE',
                duration: '1 hora', 
                includes: ['Peinado', 'Prueba de peinado'],
                trial: 'Se realiza la prueba entre los 10 a 15 días anteriores al evento. En este momento se decide el look a realizar el día del festejo.',
            },

            makeup: {
                title: 'Bride MAKE UP',
                description: 'Ofrecemos un maquillaje de alta durabilidad, realizado con productos de calidad. En este caso, aplicamos una técnica en piel específica para la ocasión , denominada PIEL BLINDADA, resistente a sudor, lágrimas y roces.',
                duration: '1-2 horas',
                includes: ['Perfilado de cejas', 'Pestañas postizas'],
                trial: 'Se realiza la prueba entre los 10 a 15 días anteriores al evento. En este momento se decide el look a realizar el día del festejo.',
            },
            combos: {
                1:{
                    title: 'Combo Bride',
                    includes: ['Maquillaje Novia', 'Peinado Novia', 'Prueba de maquillaje y peinado'],
                },
                2:{
                    title: 'Combo Silver Bride',
                    includes: ['Maquillaje Novia', 'Peinado Novia', 'Perfilado de cejas', 'Pestañas postizas', 'Prueba de maquillaje y peinado', 'Maquillaje Social & Peinado Social para Madrina'],
                    duration: '2 horas y media.'
                },
                3: {
                    title: 'Combo Golden Bride',
                    includes: ['Maquillaje Novia', 'Peinado Novia', 'Perfilado de cejas', 'Pestañas postizas', 'Prueba de maquillaje', 'Prueba de peinado', 'Coffee Break', 'Maquillaje social & Peinado Social para Madrina + 2 damas de honor'],
                },
                4: {
                    title: 'Combo Deluxe Bride',
                    includes: ['Maquillaje Novia', 'Peinado Novia', 'Perfilado de cejas', 'Pestañas postizas','Prueba de maquillaje', 'Prueba de peinado', 'Coffee Break', 'Servicio a domicilio', 'Maquillaje social & Peinado Social para Madrina + 5 damas de honor'],
                }
            }
        },
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
        {
            name: 'Brows & Lashes', 
            image: makeup,
            title: 'Perfilado y diseño de cejas',
            image: makeup,
            duration: '20 minutos.',
            description: 'Es un procedimiento cosmético que consiste en el diseño y modelado de las cejas, de acuerdo con la estructura de tu rostro, tus ojos y nariz. El objetivo de este tratamiento no es seguir el patrón de cejas que está de moda, sino perfeccionar su forma natural.',
            link: '',
            2:{
                title: 'Laminado de cejas',
                image: makeup,
                duration: '40 minutos.',
                description: 'El servicio no solo las alisa, también aporta definición y un efecto ordenado, limpio y con un toque moderno de larga duración, dejando tu ceja con un efecto más poblado. Efecto de ceja peinada ALL DAY.',
                link: '',
            },
            3:{
                title: 'Lifting nutritivo de pestañas',
                image: makeup,
                duration: '? minutos.',
                description: 'Tratamiento por el cual logramos cambiar la estructura del vello, a través de la aplicación de productos específicos, logrando así arquear y nutrir las pestañas naturales.',
                link: '',
            },
            4:{
                title: 'Estilismo de cejas y pestañas',
                image: makeup,
                duration: '75 minutos.',
                description: 'Damos forma a tus cejas con nuestro servicio y levantamos tus pestañas con nuestro LASH LIFTING. Decí chau a maquillarte todos los días. Incluye: diseño completo de cejas, laminado, tinte y lash lift.',
                link: '',
            },

        },
        {
            name: 'Nails', 
            image: makeup,
            title: 'ESMALTADO SEMI PERMANENTE',
            image: makeup,
            duration: '60 minutos.',
            description: '',
            link: '',
            2:{
                title: 'KAPPING GEL ',
                image: makeup,
                duration: '60 minutos.',
                description: '',
                link: '',
            },
            3:{
                title: 'Soft Gel',
                image: makeup,
                duration: '70 minutos.',
                description: '',
                link: '',
            },
            4:{
                title: 'COMBO NAILS DELUXE',
                image: makeup,
                duration: '90 minutos.',
                description: 'Esmaltado semipermanente en manos & pies',
                link: '',
            },
        },
        {
            name: 'Taller de automaquillaje', 
            image: makeup,
            link: '',

            initial: {
                title: 'Taller de automaquillaje inicial',
                description: `Adaptaremos toda la lección a tus necesidades, y lo más importante, identificaremos tu tipo y tono de piel, forma de rostro y color de ojos, que serán necesarios para conocer más a fondo tu rostro. <br/><br/> La lección consistirá en que Valentina o el staff aplique maquillaje en un lado de tu cara y vos repitas en el otro lado. (Esto te ayuda a aprender sobre la marcha). <br/><br/> Utilizaremos los productos y herramientas de maquillaje de nuestro estudio por lo que no tendrás nada de que preocuparte.`,
                duration: '3 horas', 
                includes: ['1 Clase de automaquillaje personalizada'],
            },

            advanced: {
                title: 'Taller de automaquillaje avanzado',
                description: `Full makeup de día y de noche adaptado a tu rostro, colorimetría y estilo  <br/><br/> Utilizaremos los productos y herramientas de maquillaje de nuestro estudio por lo que no tendrás nada de que preocuparte.`,
                duration: '4 horas',
                includes: ['2 Clases de 2 horas'],
            },
            group: {
                title: 'CURSOS GRUPALES A DOMICILIO',
                description: ` Brindamos el servicio para un mínimo de 6 personas. <br/><br/>Para regalar, para hacer un cumpleaños distinto, sin mínimo de edad o para empresas. <br/><br/> El servicio puede realizarlo una profesional del staff o Valentina Taleb según lo soliciten.`,
                duration: '4 horas',
                includes: ['2 Clases de 2 horas'],
            },
        }
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