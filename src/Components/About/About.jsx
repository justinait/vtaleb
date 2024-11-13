import React from 'react'
import './About.css'
import image from '/hero.jpg'

function About() {
  return (
    <div className='sectionContainer'>
        <p className='titleSection'>SOBRE MÍ</p>
        <div className='separatorSections'></div>
        <div className='aboutContainer'>

            <div className='aboutBox1'>
                <img className='aboutImage' src={image} alt="" />
                <div className='aboutText'>
                    <p className='holaAbout'>¡HOLA!</p>
                    <p className='aboutTextP'>
                        <strong> Soy Valentina Taleb,</strong> <br />
                        Licenciada en nutrición, y 
                        también Maquilladora y 
                        Peinadora Profesional, aunque 
                        me identifico más con estas 
                        últimas debo admitirles.
                        <br /><br />
                        Desde muy chica supe que 
                        amaba el maquillaje y el 
                        efecto que tan hermoso que 
                        provoca en las personas. <br />
                        Después de muchos años de 
                        carrera universitaria, tuve la 
                        valentía de hacer de mi hobby 
                        y mi pasión, mi profesión.
                    </p>
                    <p className='aboutAlternativeDesktop'>
                    Me dedico al maquillaje 
                    desde hace más de 10 años.
                    Soy muy feliz maquillando 
                    pero también descubrí el 
                    amor profundo que siento al 
                    enseñar. 
                    </p>
                </div>
            </div>
            <div className='aboutBox2'>
                <div className='aboutText'>
                    <p className='aboutAlternativeTwo'><strong>Me dedico al maquillaje 
                        desde hace más de 10 años. </strong>
                        Soy muy feliz maquillando 
                        pero también descubrí el 
                        amor profundo que siento al 
                        enseñar. 
                    </p>

                    <p className='aboutTextP'>
                        
                        Tengo mi estudio ubicado en 
                        la ciudad de Paraná, Entre 
                        Ríos, donde brindamos 
                        atención al público y también 
                        formamos profesionales.
                        <br /><br />
                        Hoy estoy viajando en busca 
                        de hacer mi sueño de llevar 
                        mi arte por el mundo realidad. 
                        <br /><br />
                        <strong>
                            Me considero una artista en 
                            movimiento, proactiva, y 
                            soñadora. 
                        </strong>
                    </p>
                </div>
                <img className='aboutImage' src={image} alt="" />
            </div>

            <p className='finalAbout'>“Vivo el maquillaje como mi 
                cable a tierra, el medio por 
                el cual puedo expresar y 
                liberar mis emociones”
            </p>
        </div>
    </div>
  )
}

export default About