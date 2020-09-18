import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CheckoutSummary from '../../components/order/checkoutSummary/checkoutSummary';
import ContactData from "./contactData/contactData";

class Checkout extends Component{

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
                    ingredients={this.props.ings}
                    btnComplete={this.continueBtnHandler}
                    btnCancel={this.cancelBtnHandler}
                ></CheckoutSummary>
                <Route path={this.props.match.path+'/contact-data'} component={ContactData}></Route>
            </div>
        )
    }
}

const mapStatetoProps = state => {
    return {
        ings : state.ingredients,
    }
}

export default connect(mapStatetoProps)(Checkout) ;