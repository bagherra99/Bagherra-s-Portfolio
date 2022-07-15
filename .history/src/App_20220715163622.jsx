import React from 'react';
import './index.css';
import Header from './components/header/Header';
import About from './components/About/About';
import Nav from './components/nav/Nav';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portofolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { createContext } from 'react';

export const ThemeContext = createContext(null);

    const App = () => {
        const [theme, setTheme] = 
    return (
        <ThemeContext.Provider>
            <div className='App' id='light'>
                <Header/>
                <Nav/>
                <About/>
                <Experience/>
                <Services/>
                <Portfolio/>
                <Testimonials/>
                <Contact/>
                <Footer/>
            </div>
        </ThemeContext.Provider>
    )
    }

export default App