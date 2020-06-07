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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;

    const persons = [...this.state.persons];
    person[personIndex]= person;

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
