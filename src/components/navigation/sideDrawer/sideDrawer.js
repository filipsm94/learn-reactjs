import React from 'react';
import Logo from '../../logo/logo';
import NavigationItems from '../navigationItems/navigationItems';
import classes from './sideDrawer.module.css';
import Backdrop from '../../UI/backdrop/backdrop';
import Fake from '../../../hoc/fake';


const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close]
    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open]
    }


    return (
        <Fake>
            <Backdrop show={props.open} clicked={props.closed}></Backdrop>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo height="11%"></Logo>
                </div>
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
        </Fake>

    );
}

export default sideDrawer;