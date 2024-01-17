import { useState } from 'react';
import './App.css';

function Child({title, onBtnClick}){

  let msg = "Goodbye!";

  return (
    <>
    <h2>Child: {title}</h2>
    <button onClick={() => onBtnClick(msg)}>Change</button> 
    </>
  );
}

function Parent() {

  const [message, setMessage] = useState("Hello World");

  function buttonClickHandler(newMessage){

    setMessage (newMessage);
  }

  return(
    <>
    <h2>Parent: {message}</h2>
    <Child  title="Moje dijete" onBtnClick={buttonClickHandler}/>

    </>
  );
}

function App() {
  
  const [counter, setCounter] = useState(0);

  function buttonClickHandler(){
    setCounter((prethodnoStanje) => prethodnoStanje +1);//ako vise puta postavimo novo stanje moramo koristiti funkcijsku opciju
    setCounter((prethodnoStanje) => prethodnoStanje +1);//stanje se mijenja koristeci prethodno stanje!
    setCounter((prethodnoStanje) => prethodnoStanje +1);
    setCounter((prethodnoStanje) => prethodnoStanje +1); 


  }

  return (
    <div className="App">
      <p>Brojac: {counter}</p>
      <button onClick={buttonClickHandler}>Uvecaj brojac</button>
      <Parent />
    </div>
  );
}

export default App;
