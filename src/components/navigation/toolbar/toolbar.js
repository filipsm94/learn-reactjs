import React from 'react';
import classes from './toolbar.module.css';
import Logo from '../../logo/logo';
import NavigationItems from '../navigationItems/navigationItems'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo></Logo>
        <nav>
            <NavigationItems></NavigationItems>
        </nav>
    </header>
);

export default toolbar;