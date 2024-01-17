import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      name:''
    };

  }

  handleChange = (event)=>{
  this.setState({name:event.target.value});

  }
  handleSubmit = (event) => {
    event.preventDefault();//onemogucava reloadanje

    const {name} = this.state
    alert(`Ime: ${name}`);
    this.setState({name: ''});

  }

  render(){
    return (
      <div className="App">
        <h1>Obrasci 1</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="ime">Ime:
          <input id="ime"type="text" value={this.state.name} onChange={this.handleChange}/>
          </label>
          <button>Posalji</button>
        </form>
        
      </div>
    );
  }
}


export default App;
