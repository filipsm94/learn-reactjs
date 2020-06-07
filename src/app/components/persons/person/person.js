import React, { Component } from 'react';
import classes from './person.module.css';

export default class Person extends Component{
    render(){
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>yo soy {this.props.name} y tengo {this.props.age}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        );
    };
}
