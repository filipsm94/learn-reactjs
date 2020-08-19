import React from 'react';
import urlLogo from '../../assets/logo/burger-logo.png';
import classes from './logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} >
        <img  src={urlLogo} alt="logo" />
    </div>
)

export default logo;