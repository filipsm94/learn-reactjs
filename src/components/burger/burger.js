import React from 'react';

import BurgerIngredient from './ingredients/burgerIngredients';
import classes from './burger.module.css';

const burger = (props) => {
    let transformedIndredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_,i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            })
        }).reduce((arr, el) => {
            return arr.concat(el);
        },[]);

    if(transformedIndredients.length === 0){
        transformedIndredients = <p>Porfavor ingrese ingredientes</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {transformedIndredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    );
}

export default burger;