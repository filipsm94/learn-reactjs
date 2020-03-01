import React from 'react';
import './user-input.css'

const UserInput = (props) => {
    return <input className="input-larege" type="text" onChange={props.change} value={props.username}></input>
}

export default UserInput;