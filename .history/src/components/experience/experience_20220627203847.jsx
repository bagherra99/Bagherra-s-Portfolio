import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

    const experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className='container experience__container'>
                <div className='experience__frontend'>
                    <h3>FrontEnd Development</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <div
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <h4>Tailzind CSS</h4>
                            <small className='text-light'>beginner</small>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <h4>JavaScript</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <h4>REACT JS</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                    </div>
                </div>
                {/* END OF FRONTEND */}

                <div className='experience__Backend'>
                    <h3>FrontEnd Development</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <h4>NodeJS</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <h4>SQLITE</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <h4>SQL</h4>
                            <small className='text-light'>beginner</small>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <h4>JAVA</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                    </div>
                </div>
            </div>

        </section>
    )
    }

export default experience