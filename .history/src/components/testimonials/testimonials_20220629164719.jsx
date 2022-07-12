import React from 'react'
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

const data1 = [
    {
        id:1,
        name: Georges Bouche
    }
]

    const testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review From Client</h5>
            <h2>Testimonials</h2>

            <div className='container testimonials__container'>
                 <article className='testimonials'>
                    <div className='client__avatar'>
                        <img src={AVTR1} alt='Avatar One'/>
                    </div>
                    <h5 className='client__name'>Georges Bouche</h5>
                    <small className='client__review'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus libero beatae 
                        consectetur laudantium, itaque cum? Commodi suscipit cupiditate ducimus, eligendi 
                        et, excepturi dignissimos possimus aut quaerat, doloremque explicabo aliquam voluptate!
                    </small>
                 </article>

                 <article className='testimonials'>
                    <div className='client__avatar'>
                        <img src={AVTR1} alt='Avatar One'/>
                    </div>
                    <h5 className='client__name'>Georges Bouche</h5>
                    <small className='client__review'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus libero beatae 
                        consectetur laudantium, itaque cum? Commodi suscipit cupiditate ducimus, eligendi 
                        et, excepturi dignissimos possimus aut quaerat, doloremque explicabo aliquam voluptate!
                    </small>
                 </article>

                 <article className='testimonials'>
                    <div className='client__avatar'>
                        <img src={AVTR1} alt='Avatar One'/>
                    </div>
                    <h5 className='client__name'>Georges Bouche</h5>
                    <small className='client__review'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus libero beatae 
                        consectetur laudantium, itaque cum? Commodi suscipit cupiditate ducimus, eligendi 
                        et, excepturi dignissimos possimus aut quaerat, doloremque explicabo aliquam voluptate!
                    </small>
                 </article>

                 <article className='testimonials'>
                    <div className='client__avatar'>
                        <img src={AVTR1} alt='Avatar One'/>
                    </div>
                    <h5 className='client__name'>Georges Bouche</h5>
                    <small className='client__review'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus libero beatae 
                        consectetur laudantium, itaque cum? Commodi suscipit cupiditate ducimus, eligendi 
                        et, excepturi dignissimos possimus aut quaerat, doloremque explicabo aliquam voluptate!
                    </small>
                 </article>
            </div>
        </section>
    )
    }

export default testimonials