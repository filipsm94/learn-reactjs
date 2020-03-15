import React from 'react';
import './App.css';
import UserInput from './user-input/user-input';
import ValidationComponent from './validation/validation';
import CharComponent from './char/char';

class  App extends React.Component {

  state = {
    textChar : ''
  }

  changeUsernameHandler = (event) => {
    this.setState({
      textChar: event.target.value
    })
  }

  deleteCharIndexHandler = (charIndex) => {
    const text = this.state.textChar.split('');
    text.splice(charIndex, 1);
    const newText = text.join('');
    this.setState({textChar: newText});
  }

  render() {
    const list = this.state.textChar.split('').map((ch, index) => {
      return <CharComponent text={ch} key={index} change={this.deleteCharIndexHandler} />
    });

    return (
      <div>
        <UserInput change={this.changeUsernameHandler} text={this.state.textChar} />
        <ValidationComponent lenText={this.state.textChar} />
        {list}
      </div>
    );
  }
  
}

export default App;
