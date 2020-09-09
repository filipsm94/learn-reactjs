import React, { Component } from 'react';
import Button from '../../../components/UI/button/button';
import classes from './contactData.module.css';

export default class ContactData extends Component{

    state = {
        name:'',
        email:'',
        address: {
            street: '',
            postalCode: '',
        }
    }

    render(){
        return(
            <div className={classes.ContactData}>
                <h1>Enter your Contact Data</h1>
                <form>
                    <input type="text" name="name" placeholder="name"/>
                    <input type="email" name="email" placeholder="email"/>
                    <input type="text" name="street" placeholder="street"/>
                    <input type="text" name="postal" placeholder="postal"/>
                    <Button btnType="Success">Order</Button>
                </form>
            </div>
        );
    }
}