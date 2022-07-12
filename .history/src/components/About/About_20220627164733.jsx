import React from 'react'
import './About.css'
import pp from '../../assets/pp.png'

    const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about__container'>
                <div className='about__me'>
                <div className='about__me-image'>
                    <img src={pp} alt='About Image'/>
                </div>
                </div>

                <div>
                    <div>
                        <article></article>
                    </div>
                </div>

            </div>

        </section>
    )
    }

export default About