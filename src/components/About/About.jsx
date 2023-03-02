import React from 'react'
import styles from './About.module.css'

export default function About() {
    return(
        <div className='contenedor'>
            <div className='contenedor'>
                <div className= {styles.tituloFoto}>
                    <div className= {styles.titulo}>

                <h3>Acerca de mi...</h3>
                <h1>Martin Juncos</h1>
                    </div>
                <img src="https://media.licdn.com/dms/image/D4D03AQH0Hfl0Mc_JNw/profile-displayphoto-shrink_800_800/0/1675724678375?e=2147483647&v=beta&t=HSCXvfnHSXK01DhuY4MHkrT4d8PsUfx8vUVjibWvS5k" alt="img no found" />
                </div>
                <p>Desde hace algunos años, como coordinador de la Tecnicatura de Software, me involucre en los proyectos de mis profesores, esto me abrió el maravilloso mundo del Desarrollo, Profesor de Tecnología e Informática, especialista en Educación Superior y TIC, autodidacta y con ganas de aprender siempre nuevas tecnologías, curioso, responsable y con mucha iniciativa, que busca siempre nutrirse personal y profesionalmente. En este nuevo paradigma hay que estar preparado para este desafió, ese es mi lema.</p>
            </div>
        </div>
    )
}