import React from 'react'
import './About.css'
import pp from '../../assets/pp.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderActive} from 'react-icons/vsc'

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
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icon'/>
                            <h5>Clients</h5>
                            <small>200+ worldwide</small>
                        </article>
                        <article className='about__card'>
                            <VscFolderActive className='about__icon'/>
                            <h5>Projects</h5>
                            <small>20+ completed</small>
                        </article>
                    </div>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus libero beatae 
                        consectetur laudantium, itaque cum? Commodi suscipit cupiditate ducimus, eligendi 
                        et, excepturi dignissimos possimus aut quaerat, doloremque explicabo aliquam voluptate!
                    </p>

                </div>

            </div>

        </section>
    )
    }

export default About