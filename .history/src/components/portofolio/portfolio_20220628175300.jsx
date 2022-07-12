import React from 'react';
import './portfolio.css'
import img1 from '../../assets/téléchargement1.jpg'
import img2 from '../../assets/téléchargement2.jpg'
import img3 from '../../assets/téléchargement3.jpg'
// import img4 from '../../assets/téléchargement1.jpg'

const data = [
    {
        id:1,
        image:img1,
        title: "This is a portfolio item title",
        github: ""
    }
]

    const portfolio = () => {
    return (
        <section id='portfolio'>
        
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
            <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={img1} alt=''/>
                </div>
                <h3>This is a portfolio item title</h3>
                <div className='portfolio__item-cta'>
                    <a href='https://github.com'>Lien Github</a>
                    <a href='https://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>

            <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={img2} alt=''/>
                </div>
                <h3></h3>
                <div className='portfolio__item-cta'>
                    <a href='https://github.com'>Lien Github</a>
                    <a href='https://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>

            <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={img3} alt=''/>
                </div>
                <h3>This is a portfolio item title</h3>
                <div className='portfolio__item-cta'>
                    <a href='https://github.com'>Lien Github</a>
                    <a href='https://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>

            </div>
        
        </section>
    )
    }

export default portfolio