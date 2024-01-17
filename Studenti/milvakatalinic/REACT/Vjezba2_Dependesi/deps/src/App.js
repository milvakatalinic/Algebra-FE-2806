import randomstring from 'randomstring';

import './App.css';

function App() {

  const tmp = randomstring.generate();
  return (
    <div className="App"> 
    <p>Moj randomstring: {tmp} </p>
  </div>
  );
}

export default App;
