import React, { Component } from "react";
import Fake from '../../hoc/fake';
import Burger from '../../components/burger/burger';
import BuildControls from '../../components/burger/buildControls/buildControls';
import Modal from '../../components/UI/modal/modal';
import OrderSummary from '../../components/burger/orderSummary/orderSummary';

const INGREDIENT_PRICES = {
    salad:0.5,
    cheese: 0.4,
    meat: 1.2,
    bacon:0.75
};

export default class BurgerBuilder extends Component {

    state = {
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0,
        },
        totalPrice: 4,
        purchaseble: false,
        purchasing: false
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            }).reduce((sum, el) => {
                return sum + el;
            },0);
            this.setState({purchaseble: sum > 0})
    }

    addIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount +1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0) return;
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);
    }

    purchasingHandler = () => {
        this.setState({purchasing:true});
    }

    purchasingCancelHandler = () => {
        this.setState({purchasing:false});
    }

    pruchasePayContinueHandler = () =>{
        alert('tu estas comprando');
    }
    
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return(
            <Fake>
                <Modal show={this.state.purchasing} closeModal={this.purchasingCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients}
                        purchaseCancel={this.purchasingCancelHandler}
                        purchaseContinue={this.pruchasePayContinueHandler} />
                </Modal>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls
                    addIngredient={this.addIngredientsHandler}
                    removeIngredient={this.removeIngredientsHandler}
                    disabled={disabledInfo}
                    purchaseble={this.state.purchaseble}
                    ordered={this.purchasingHandler}
                    price={this.state.totalPrice}
                ></BuildControls>
            </Fake>
        );
    };
}