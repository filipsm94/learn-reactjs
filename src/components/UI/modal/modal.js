import React, { Component } from 'react';

import classes from './modal.module.css';
import Aux from '../../../hoc/fake';
import Backdrop from '../backdrop/backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    // Esto es para verificar que gracias al shouldComponentUpdate si no se muestra el modal no se actualizan lo datos de la pantalla
    // no consume memoria procesando de nuevo un componente
    componentWillUpdate(){ 
        console.log('[Modal] will update');
    }

    render(){
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.closeModal}></Backdrop>
                <div 
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)': 'translateY(-100vh)',
                        opacity: this.props.show ? '1': '0'}}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal;