import React, { Component } from "react";
import Fake from '../../hoc/fake';
import Burger from '../../components/burger/burger';
import BuildControls from '../../components/burger/buildControls/buildControls';
import Modal from '../../components/UI/modal/modal';
import OrderSummary from '../../components/burger/orderSummary/orderSummary';
import axiosOrder from '../../axios-orders';
import Spinner from "../../components/UI/spinner/spinner";
import { connect } from "react-redux";
import * as burgerBuilderActions from '../../store/actions/index';

class BurgerBuilder extends Component {

    state = {
        totalPrice: 4,
        purchaseble: false,
        purchasing: false,
        loading: false
    }

    componentDidMount(){
        this.props.onInitIngredients();
      }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            }).reduce((sum, el) => {
                return sum + el;
            }, 0);
        return sum > 0;
    }

    purchasingHandler = () => {
        this.setState({ purchasing: true });
    }

    purchasingCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    pruchasePayContinueHandler = () => {
        this.setState({ loading: true })
        const orderRq = {
            ingredients: this.props.ings,
            price: this.props.totPrice,
            customer: {
                name: 'Felipe',
                addres: {
                    street: 'calle 1',
                    postalCode: 119102,
                    country: 'colombia'
                },
                email: 'fmesa@gmail.com'
            },
            deliveryMethod: 'fast'

        }
        axiosOrder.post('/orders.json', orderRq)
            .then((res) => {
                this.props.history.push('/checkout');
            })
            .catch((err) => console.log(err))
            .finally(() => this.setState({ loading: false, purchasing: false }))


    }

    render() {
        const disabledInfo = {
            ...this.props.ings
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let orderSummary = <OrderSummary ingredients={this.props.ings}
            purchaseCancel={this.purchasingCancelHandler}
            purchaseContinue={this.pruchasePayContinueHandler} />
        
        let burger = this.props.error ? <p>lo lamentamos no se pueden cargar los ingredientes</p> : <Spinner></Spinner>;

        if(this.props.ings){
            burger = <Fake>
                <Modal show={this.state.purchasing} closeModal={this.purchasingCancelHandler}>
                    {orderSummary}
                </Modal>
                <Burger ingredients={this.props.ings}></Burger>
                <BuildControls
                    addIngredient={this.props.onIngredientsAdd}
                    removeIngredient={this.props.onIngredientsRemove}
                    disabled={disabledInfo}
                    purchaseble={this.updatePurchaseState(this.props.ings)}
                    ordered={this.purchasingHandler}
                    price={this.props.totPrice}
                ></BuildControls>
            </Fake>;

        }
        return (
            burger
        );
    };
}

const mapStatetoProps = state => {
    return {
        ings : state.ingredients,
        totPrice: state.totalPrice,
        error: state.error
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        onIngredientsAdd: (ingName) => dispatch(burgerBuilderActions.addIngridient(ingName)),
        onIngredientsRemove: (ingName) => dispatch(burgerBuilderActions.removeIngridient(ingName)),
        onInitIngredients: () => dispatch(burgerBuilderActions.initIngridients())
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(BurgerBuilder);