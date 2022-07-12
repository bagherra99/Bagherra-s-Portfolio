import React from 'react'
import './About.css'
import pp from '../../assets/pp.png'
import FaAward from 'react-icons/fa'

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

                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward/>
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>
                    </div>
                </div>

            </div>

        </section>
    )
    }

export default About