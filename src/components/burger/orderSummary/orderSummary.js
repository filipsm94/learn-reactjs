import React from 'react';
import Aux from '../../../hoc/fake';
import Button from '../../UI/button/button';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
        });
    return(
        <Aux>
            <h3>your order</h3>
            <p>una hamburguesa con los siguientes ingredientes</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>¿Deseas continuar con la compra?</p>
            <Button btnType="Danger" clicked={props.purchaseCancel}>Cancelar</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>Comprar</Button>
        </Aux>
    );
}

export default orderSummary;