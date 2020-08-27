import React, { Component } from 'react';
import Aux from '../../../hoc/fake';
import Button from '../../UI/button/button';

class OrderSummary extends Component {
    componentWillUpdate(){
        console.log('[OrderSummary] will update');
    }

    render(){
        const ingredientsSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
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
                <Button btnType="Danger" clicked={this.props.purchaseCancel}>Cancelar</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinue}>Comprar</Button>
            </Aux>
        );
    }
}

export default OrderSummary;