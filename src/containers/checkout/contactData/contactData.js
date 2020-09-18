import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../../components/UI/button/button';
import Input from '../../../components/UI/input/input';
import classes from './contactData.module.css';

class ContactData extends Component{

    state = {
        orderForm: {
            name: {
                tipoelement:'input',
                elementoConfig:{
                    type:'text',
                    placeholder:'Ingresa tu nombre'
                },
                value:''
            },
            street: {
                tipoelement:'input',
                elementoConfig:{
                    type:'text',
                    placeholder:'calle 1'
                },
                value:''
            },
            postalCode: {
                tipoelement:'input',
                elementoConfig:{
                    type:'text',
                    placeholder:'119102'
                },
                value:''
            },
            country: {
                tipoelement:'input',
                elementoConfig:{
                    type:'text',
                    placeholder:'colombia'
                },
                value:''
            },
            email: {
                tipoelement:'input',
                elementoConfig:{
                    type:'email',
                    placeholder:'fmesa@gmail.com'
                },
                value:''
            },
            deliveryMethod: {
                tipoelement:'select',
                elementoConfig:{
                    options:[
                        {
                            value:'fasted',
                            displayValue:'Fasted'
                        },
                        {
                            value:'cheapest',
                            displayValue:'Cheapest'
                        }
                    ]
                },
                value:''
            }
        },
    }

    orderhandler = (event) => {
        event.preventDefault();
        console.log('ingredients', this.props.ings);
        console.log('total Price', this.props.totPrice);
    }

    inputChangedHandler = (event, inputIdentifier) =>{
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        this.setState({orderForm: updatedOrderForm});
    }

    render(){
        const formElementsArrays = [];
        for(let key in this.state.orderForm){
            formElementsArrays.push({
                id:key,
                config:this.state.orderForm[key]
            });
        }
        return(

            <div className={classes.ContactData}>
                <h1>Enter your Contact Data</h1>
                <form>
                {formElementsArrays.map(formElement => (
                    <Input 
                        elementType={formElement.config.tipoelement}
                        elementConfig={formElement.config.elementoConfig}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                        key={formElement.id} />
                ))}
                    <Button btnType="Success" clicked={this.orderhandler}>Order</Button>
                </form>
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return {
        ings : state.ingredients,
        totPrice: state.totalPrice,
    }
}

export default connect(mapStatetoProps)(ContactData)