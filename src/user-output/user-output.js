import React from 'react';
import './user-output.css'

const UserOutput = (props) => {
    return (
        <div className="paragrahps">
            <h2>This is a one paragraph output</h2>
            <p>{props.username} this is a two paragraph output</p>
        </div>
    );
}

export default UserOutput;