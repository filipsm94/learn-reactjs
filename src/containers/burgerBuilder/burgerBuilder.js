import React, { Component } from "react";
import Fake from '../../hoc/fake';

export default class BurgerBuilder extends Component {
    render(){
        return(
            <Fake>
                <div>Burger</div>
                <div>BurgerControls</div>
            </Fake>
        );
    };
}