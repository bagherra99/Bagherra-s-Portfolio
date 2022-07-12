import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaTwitter} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'


    const contact = () => {
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineEmail />
                        <h4>Email</h4>
                        <h5>idydiagne@esp.sn</h5>
                        <a href='mailto:idydiagne@esp.sn' target='_blank'>Send a message</a>
                    </article>

                    <article className='contact__option'>
                        <FaTwitter />
                        <h4>Twitter</h4>
                        <h5>@Idy_D17</h5>
                        <a href='https://twitter.com/Idy_D17' target='_blank'>Send a message</a>
                    </article>

                    <article className='contact__option'>
                        <BsWhatsapp />
                        <h4>Whatsapp</h4>
                        <h5>776823252</h5>
                        <a href='https://web.whatsapp.com/send?phone=+221776823252' target='_blank'>Send a message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form action=''>
                    <input type='text' name='name' placeholder='Your full name' required/>
                    <input type='email' name='email' placeholder='Your email' required/>
                    <textarea name='message' rows="7" placeholder="your message" required></textarea>
                    <button type=''></button>
                </form>
            </div>
        </section>
    )
    }

export default contact