import React from 'react'
import About from './components/About/About'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import Services from './components/services/Sevices'
import Portfolio from './components/portofolio/Portfolio'
import Test from './components/portofolio/Portfolio'


    const App = () => {
    return (
        <>
            <Header/>
            <Nav/>
            <About/>
            <Experience/>
            <Services/>
            <Portfolio/>
            <Testimonials/>
        </>
    )
    }

export default App