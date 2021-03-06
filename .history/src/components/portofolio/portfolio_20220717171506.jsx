import React from 'react';
import './portfolio.css';
import img1 from '../../assets/images1.jpg'
import img2 from '../../assets/téléchargement2.jpg'
import img3 from '../../assets/téléchargement3.jpg'
// import img4 from '../../assets/téléchargement1.jpg'

const data = [
    {
        id:1,
        image:img1,
        title: "This is a portfolio item title",
        github: "https://github.com",
        demo: "https://github.com"
    },

    {
        id:2,
        image:img2,
        title: "This is a portfolio item title",
        github: "https://github.com",
        demo: "https://github.com"
    },

    {
        id:3,
        image:img3,
        title: "This is a portfolio item title",
        github: "https://github.com",
        demo: "https://github.com"
    },

    {
        id:4,
        image:img3,
        title: "This is a portfolio item title",
        github: "https://github.com",
        demo: "https://github.com"
    },

    {
        id:5,
        image:img3,
        title: "This is a portfolio item title",
        github: "https://github.com",
        demo: "https://github.com"
    },
    {
        id:6,
        image:img3,
        title: "This is a portfolio item title",
        github: "https://github.com",
        demo: "https://github.com"
    }
]

    const portfolio = () => {
    return (
        <section id='portfolio'>
        
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                {
                    data.map(({id, image, title, github, demo}) =>{
                        return(
                            <article key={id} className='portfolio__item'>
                                <div className='portfolio__item-image'>
                                    <img src={image} alt={title}/>
                                </div>
                                <h3>{title}</h3>
                                <div className='portfolio__item-cta'>
                                    <a href={github}>Lien Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        
        </section>
    )
    }

export default portfolio