import React from 'react';

const ValidationComponent = (props) => {

    let textDescription = null;

    if ( props.lenText.length >= 5 ) {
        textDescription = ( <p>Text long enough</p> );
    }else {
        textDescription = (<p>Text too short</p>);
    }
    return textDescription; 
}

export default ValidationComponent;