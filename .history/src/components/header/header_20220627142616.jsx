import React from 'react'
import './header.css'
import CTA from './CTA'
import pp3 from '../../assets/pp3.jpg'
import HeaderSocials from './HeaderSocials'

    const header = () => {
    return (
        <header>
            <div className='container header__container'>
                <h5>Hello I'm</h5>
                <h1>Idy Diagne</h1>
                <h5 className='text-align'>Front-End Developer</h5>
                <CTA />
                <HeaderSocials/>

                <div className='me'>
                    <img src={pp3} alt='me'/>
                </div>

                <a href="#contact" className='scrool__down'>Scrool Down</a>

            </div>
        </header>
    )
    }

export default header