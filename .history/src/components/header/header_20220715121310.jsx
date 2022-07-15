import React from 'react'
import './header.css'
import CTA from './CTA'
import pp3 from '../../assets/pp3.jpg'
import HeaderSocials from './HeaderSocials'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Switch from '@mui/material/Switch';

// or
// import { Switch } from '@mui/material';

    const header = () => {
    return (
        <header>
            <FormControl component="fieldset"/>
                <FormLabel component="legend">Label placement</FormLabel>
                <FormGroup aria-label="position" row/>
                <FormControlLabel
                    value="end"
                    control={<Switch color="primary" />}
                    label="end"
                    labelPlacement="top"
            />
            <FormGroup>
                <FormControlLabel control={<Switch defaultChecked />} label="Label" />
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

export default header