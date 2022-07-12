import React from 'react'
import './contact.css'
imp

    const contact = () => {
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <h4>Email</h4>
                        <h5>idydiagne@esp.sn</h5>
                        <a href='mailto:idydiagne@esp.sn'>Send a message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
            </div>
        </section>
    )
    }

export default contact