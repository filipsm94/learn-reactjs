import React from 'react';
import classes from './App.module.css';
import Cockpit from './components/cockpit/cockpit';
import Persons from './components/persons/persons';

class  App extends React.Component {

  state = {
    persons: [
      {id:'asdg1', name: 'felipe', age:26},
      {id:'asdg2', name: 'mildred', age:22},
      {id:'asdg3', name: 'kata', age:19}
    ],
    showPersons: false
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps',props);
    return null;
  }

  
  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps,nextState){ // should return a boolean. take a decision. because if i set false, i blocked the update of components as persons.js, then in this case return true 
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }

  componentWillUnmount(){
    console.log('[App.js] componentWillUnmount');
  }

  getSnapshotBeforeUpdate(){
    console.log('[App.js] getSnapshotBeforeUpdate');
    return null;
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex]= person;

    this.setState({ persons: persons});
  }

  deletePersonsHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow});

  }

  render() {
    console.log('[App.js] render')
    let persons = null;
    if(this.state.showPersons){
      persons = <Persons 
        persons={this.state.persons}
        clicked={this.deletePersonsHandler}
        changed={this.nameChangedHandler}/>
    }
    return (
      <div className={classes.App}>
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
          {persons}
      </div>
    );
  }
  
}

export default App;
