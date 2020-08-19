import React, { Component } from 'react';
import Fake from '../../hoc/fake';
import Toolbar from '../navigation/toolbar/toolbar';
import classes from './layout.module.css';
import SideDrawer from '../navigation/sideDrawer/sideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer:true
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false})
    }

    sideDrawerOpenHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }

    render(){
        return (
        <Fake>
            <Toolbar openMenu={this.sideDrawerOpenHandler} />
            <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Fake>
        );
    }
    
}

export default Layout;