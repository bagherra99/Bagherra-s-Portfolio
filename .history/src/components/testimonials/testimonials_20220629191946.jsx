import React from 'react'
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';
import AVTR5 from '../../assets/avatar5.jpg';
import AVTR6 from '../../assets/avatar6.jpg';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data1 = [
    {
        id:1,
        image1: AVTR1,
        name: 'Georges Bouche',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus libero beatae consectetur laudantium, itaque cum? Commodi suscipit cupiditate ducimus, eligendi et, excepturi dignissimos possimus aut quaerat, doloremque explicabo aliquam voluptate!',
    },
    {
        id:2,
        image1: AVTR5,
        name: 'Georges Bouche',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus libero beatae consectetur laudantium, itaque cum? Commodi suscipit cupiditate ducimus, eligendi et, excepturi dignissimos possimus aut quaerat, doloremque explicabo aliquam voluptate!',
    },
    {
        id:3,
        image1: AVTR6,
        name: 'Georges Bouche',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus libero beatae consectetur laudantium, itaque cum? Commodi suscipit cupiditate ducimus, eligendi et, excepturi dignissimos possimus aut quaerat, doloremque explicabo aliquam voluptate!',
    }
]

    const testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review From Client</h5>
            <h2>Testimonials</h2>

            <div className='container testimonials__container'>
                 {
                    data1.map(({id, name, text, image1}) =>{
                        return(
                            <article key={id} className='testimonials'>
                                <div className='client__avatar'>
                                <img src={image1} alt='Avatar One'/>
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>
                                    {text}
                                </small>
                            </article>
                        )
                    })
                 }
            </div>
        </section>
    )
    }

export default testimonials