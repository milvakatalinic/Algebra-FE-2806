import { Routes, Route, Link, useNavigate} from 'react-router-dom';
import './App.css';

function Index(){
  return(
    <>
    <h1>Welcome to Router!</h1>
    <p>Ovo je primjer koristenja React Router-a.</p>
    <p>Sad sam na pocetnoj stranici</p>
    </>
  )
}

function Komponenta1(){
  return(
    <>
    <h1>Welcome to Komponenta1!</h1>
    <p>Ovo je primjer koristenja React Router-a.</p>
    <p>Sad sam na Komponenti 1.</p>
    </>
  )
}

function Komponenta2(){

  const navigate = useNavigate();

  function clickHandler(){
    navigate("/")
  }

  return(
    <>
    <h1>Welcome to Komponenta2!</h1>
    <p>Ovo je primjer koristenja React Router-a.</p>
    <p>Sad sam na Komponenti 2.</p>
    <button onClick={clickHandler}>Home</button>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/k1">Komponenta 1</Link>
          </li>
          <li>
            <Link to="/k2">Komponenta 2</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/k1" element={<Komponenta1/>}/>
        <Route path="/k2" element={<Komponenta2/>}/>


      </Routes>
      
    </div>
  );
}

export default App;
