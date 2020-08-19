import React from 'react';
import classes from './toolbar.module.css';
import Logo from '../../logo/logo';
import NavigationItems from '../navigationItems/navigationItems'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div onClick={props.openMenu}>MENU</div>
        <div className={classes.Logo}>
            <Logo></Logo>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems></NavigationItems>
        </nav>
    </header>
);

export default toolbar;