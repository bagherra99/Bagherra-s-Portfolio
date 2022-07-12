import React from 'react'
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR1 from '../../assets/avatar1.jpg';


    const testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review From Client</h5>
            <h2>Testimonials</h2>

            <div className='container testimonials__container'>
                 <article className='testimonials'>
                    <div className='client__avatar'>
                        <img src={AVTR1}/>
                    </div>
                 </article>
            </div>
        </section>
    )
    }

export default testimonials