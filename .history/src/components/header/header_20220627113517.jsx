import React from 'react'
import './header.css'
import CTA from './CTA'
import pp from '../../assets/pp.png'

    const header = () => {
    return (
        <header>
            <div className='container header__container'>
                <h5>Hello I'm</h5>
                <h1>Idy Diagne</h1>
                <h5 className='text-align'>Front-End Developer</h5>
                <CTA />

                <div className='me'>
                    <img src={pp} alt/>
                </div>
            </div>
        </header>
    )
    }

export default header