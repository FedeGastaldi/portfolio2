import React from 'react'
import {SiLinkedin , SiGmail, SiGithub } from "react-icons/si"

const About = () => {
  return (
    <div id="sobremi">
        <section>
            <div id="about">
                <h2>Sobre mi</h2>
                <p>Hola! soy Federico, Estudiante de Profesorado de Matemática. Hace un año inicié el camino de la programación y descubrí una pasión. Tambien me atrae mucho el diseño y me gustaría capacitarme en el futuro. Actualmente me encuentro en busqueda de una primera experiencia laboral.</p>
            </div>
            <div className='aboutico flex justify-center mt-16'>
                <a href="https://www.linkedin.com/in/federico-gastaldi-882734234" target="_blank" >
                    <SiLinkedin className='icona'/>
                </a>

                <a href="https://github.com/FedeGastaldi" target="_blank">
                    <SiGithub className='icona'/>
                </a>

                <a href="#contacto">
                    <SiGmail className='icona'/>
                </a>

            
    
            </div>
        </section>
    </div>
  )
}

export default About