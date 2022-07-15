import React from 'react'
import './header.css'
import CTA from './CTA'
import pp3 from '../../assets/pp3.jpg'
import HeaderSocials from './HeaderSocials'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
// or
// import { Switch } from '@mui/material';

import {useState} from "react";

    const Header = () => {

        const [checked, setChecked] = useState(false);

        const switchHandler = (event) => {
            setChecked(event.target.checked)
        }

    return (
        <header>
            <FormGroup>
                <FormControlLabel control={<Switch checked={checked} size={'small'} onChange={switchHandler}/>} label="Dark mode" />
            </FormGroup>
                <div className='container header__container'>
                    <h5>Hello I'm</h5>
                    <h1>Idy Diagne</h1>
                    <h5 className='text-align'>Front-End Developer</h5>
                    <CTA />
                    <HeaderSocials/>

                    <div className='me'>
                        <img src={pp3} alt='me'/>
                    </div>

                    <a href="#contact" className='scroll__down'>Scroll Down</a>

                </div>
        </header>
    )
    }

export default Header