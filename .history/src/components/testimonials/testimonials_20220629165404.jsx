import React from 'react'
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

const data1 = [
    {
        id:1,
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
                    data1.map(({id, name, text}) =>{
                        return(
                            
                        )
                    })
                 }
            </div>
        </section>
    )
    }

export default testimonials