import React, { Component } from 'react';

import Person from './person/person'

export default class Persons extends Component {

    // This implementation is applied in a past implementation, at present it must not be using
    // static getDerivedStateFromProps(props, state){
    //     console.log('[App.js] getDerivedStateFromProps',props);
    //     return null;
    // }
    // componentWillReceiveProps(props) {
    //     console.log('[Persons.js] componentWillReceiveProps', props);
    // }
    // componentWillUpdate(){
    //     console.log('[Persons.js] componentWillUpdate', props);
    // }
    // End past implementation

    shouldComponentUpdate(nextProps, nextState) { // should return a boolean. take a decision
        console.log('[Persons.js] shouldComponentUpdate');
        if(nextProps.persons !== this.props.persons) {
            return true;
        } else {
            return false;
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message:'paso de datos lifecycle from snapshot'};
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Persons.js] componentDidUpdate', snapshot);
    }

    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] Rendering...');
        
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}

            />
        });
    }
}
