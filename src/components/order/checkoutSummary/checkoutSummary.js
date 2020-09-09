import React from 'react';
import Burger from '../../burger/burger';
import Button from '../../UI/button/button';
import classes from './checkoutSummary.module.css';

const checkoutSummary  = (props) => {

    return (
        <div className={classes.CheckoutSummary}>
            <h1>
                we hope i tastes well..
            </h1>
            <div style={{width:'100%',margin:'auto'}}>
                <Burger ingredients={props.ingredients}></Burger>
            </div>
            <Button btnType="Danger" clicked={props.btnCancel}>Cancelar</Button>
            <Button btnType="Success" clicked={props.btnComplete}>Continuar</Button>
        </div>
    );
}

export default checkoutSummary;