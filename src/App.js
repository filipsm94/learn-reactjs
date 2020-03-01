import React from 'react';
import './App.css';
import UserInput from './user-input/user-input';
import UserOutput from './user-output/user-output';

class  App extends React.Component {

  state = {
    username : 'Carlos'
  }

  changeUsernameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div>
        <UserInput change={this.changeUsernameHandler} username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
  
}

export default App;
