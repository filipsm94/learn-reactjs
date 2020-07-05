import React from 'react';
import BuildControl from './buildControl/buildControl';
import classes from './buildControls.module.css';

const controls = [
    {label:'Salad', type: 'salad'},
    {label:'Bacon', type: 'bacon'},
    {label:'Cheese', type: 'cheese'},
    {label:'Meat', type: 'meat'}    
]

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Precio de tu hamburguesa: <strong>${props.price.toFixed(2)}</strong> Usd</p>
            {controls.map(ctrl => (
                <BuildControl 
                    key={ctrl.label}
                    label={ctrl.label}
                    type={ctrl.type}
                    added={() => props.addIngredient(ctrl.type)}
                    removed={() => props.removeIngredient(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}></BuildControl>
            ))}
        </div>
    );
}

export default buildControls;