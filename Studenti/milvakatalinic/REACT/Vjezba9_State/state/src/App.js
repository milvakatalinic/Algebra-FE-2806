import React from 'react';
import './App.css';
import {UserFunction, UserClass, UserChildren} from './user';


class App extends React.Component{

  state = {
    users:[
      {name: 'Ivan', years: 30},
      {name: 'Marko', years: 25},
      {name: 'Ana', years: 25}
    ],
childrenText: "A hobi mi je plivanje"
  };

  render(){
    const {users, childrenText} = this.state; 

    return (
      <div className="App">
        <h1>React aplikacija</h1>
        <p>Ovo zaista radi</p>
        <UserFunction ime={this.state.users[0].name} years={this.state.users[0].years} />
        <UserClass name={users[1].name} years={users[1].years}/>
        <UserChildren name={users[2].name} years={users[2].years}>{childrenText}</UserChildren>
      </div>
    );
  }
  }

export default App;