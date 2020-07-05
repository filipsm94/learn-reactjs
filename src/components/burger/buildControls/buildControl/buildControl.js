import React from 'react';
import clasess from './buildControl.module.css'

const buildControl = (props) => {
    return (
        <div className={clasess.BuildControl}>
            <div className={clasess.Label}>{props.label}</div>
            <button className={clasess.Less} onClick={props.removed} disabled={props.disabled}>Menos</button>
            <button className={clasess.More} onClick={props.added}>Más</button>
        </div>
    );
}

export default buildControl;