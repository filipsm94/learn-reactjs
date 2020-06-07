import React from 'react';
import classes from './person.module.css';


const Person = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>yo soy {props.name} y tengo {props.age}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );

}

export default Person;