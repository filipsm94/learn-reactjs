import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './person.module.css';

export default class Person extends Component{
    render(){
        console.log('[Person.js] Rendering...');
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>yo soy {this.props.name} y tengo {this.props.age}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        );
    };   
}

Person.propTypes ={
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}
