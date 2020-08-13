import React from 'react';
import NavigationItem from './navigationItem/navigationItem';
import classes from './navigationItems.module.css';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Compras</NavigationItem>
    </ul>
)

export default navigationItems;