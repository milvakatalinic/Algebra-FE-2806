import {useState} from 'react';
import './App.css';

function App(){

    const [name, setName] = useState('');


  const handleChange = (event)=>{
  setName(event.target.value);

  }
  const handleSubmit = (event) => {
    event.preventDefault();//onemogucava reloadanje

    const {name} = this.state
    alert(`Ime: ${name}`);
    setName('');

  }


    return (
      <div className="App">
        <h1>Obrasci 1</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="ime">Ime:
          <input id="ime"type="text" value={name} onChange={handleChange}/>
          </label>
          <button>Posalji</button>
        </form>
        
      </div>
    );
  }


export default App;
