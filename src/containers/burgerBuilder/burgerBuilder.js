import React, { Component } from "react";
import Fake from '../../hoc/fake';
import Burger from "../../components/burger/burger";

export default class BurgerBuilder extends Component {

    state = {
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0,
        }
    }
    render(){
        return(
            <Fake>
                <Burger ingredients={this.state.ingredients}></Burger>
                <div>BurgerControls</div>
            </Fake>
        );
    };
}