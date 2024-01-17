import React from 'react';
import './App.css';
import {UserFunction, UserClass, UserChildren} from './user';


class App extends React.Component{

//  constructor() {
//  super();

// this.state = {
//   users:[
//     {name: 'Ivan', years: 30},
//     {name: 'Marko', years: 25},
//     {name: 'Ana', years: 25}
//   ],
//childrenText: "A hobi mi je plivanje"
// };
//}


state = {
  users: [
    {name: 'Ivan', years: 30},
    {name: 'Marko', years: 25},
    {name: 'Ana', years: 25}
  ],
  
childrenText: "A hobi mi je plivanje"
};
btnClickHandler = () => {
  
  const newUsers = this.state.users.map((user) => { //java kod, koristimo ga zbog map funkc, mijenjamo kompl niz
    return {...user, years: user.years +1};
  });

  this.setState({ users: newUsers });

}

  render(){
    const {users, childrenText} = this.state; 

    return (
      <div className="App">
        <h1>React aplikacija</h1>
        <p>Ovo zaista radi</p>
        <UserFunction ime={this.state.users[0].name} years={this.state.users[0].years} />
        <UserClass name={users[1].name} years={users[1].years}/>
        <UserChildren name={users[2].name} years={users[2].years}>{childrenText}</UserChildren>
        <button onClick={this.btnClickHandler}>Promjena godina</button>
      </div>
    );
  }
  }

export default App;
