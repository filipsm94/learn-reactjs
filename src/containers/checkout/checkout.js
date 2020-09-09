import React, { Component } from "react";
import { Route } from "react-router-dom";
import CheckoutSummary from '../../components/order/checkoutSummary/checkoutSummary';
import ContactData from "./contactData/contactData";

export default class Checkout extends Component{

    state={
        ingredients:{
            salad:1,
            bacon:2,
            cheese:1,
            meat:1,
        }
    }

    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for(let param of query.entries()){
            ingredients[param[0]] = +param[1];
        }
        this.setState({
            ingredients:ingredients
        });
    }

    continueBtnHandler = () => {
        this.props.history.push('/checkout/contact-data')
    }

    cancelBtnHandler = () => {
        this.props.history.push({
            pathname:'/'
        });
    }

    render(){
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    btnComplete={this.continueBtnHandler}
                    btnCancel={this.cancelBtnHandler}
                ></CheckoutSummary>
                <Route path={this.props.match.path+'/contact-data'} component={ContactData}></Route>
            </div>
        )
    }
}