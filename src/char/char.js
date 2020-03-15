import React from 'react';
import './char.css';

const CharComponent = (props) => {
    const characteres = props.text.split('');
    
    return (
        <div>
            {
                characteres.map((ch, index) => {
                    return <div className="char"
                    key={index}
                    onClick={() => props.change(index)}
                    >{ch}</div>                
                })
            }

        </div>
        
    )
}

export default CharComponent;