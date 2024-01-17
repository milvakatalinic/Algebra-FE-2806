
import './App.css';
import { useEffect, useState } from 'react';

const NASA_API_KEY = '2V23yzRZJtL2g5CqylFcG2VoR3Q7krQaf5ZbcITV';

function App() {

  const [data, setData]= useState(null);


  
  useEffect(() => {

    //fetch (`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`)
   // .then(response => response.json())
   // .then(responseData => setData(responseData));

    async function getData(){

      const response = await fetch (`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);
      const responseData = await response.json();
      setData(responseData);
    }
    getData();
  

  }, []);//prazan arrey omogucava da se useeff funkcija izvrsi samo jednom kad se ucita komponennta

  if(!data){

    return(
      <div className='App'>
        <p>Loading NASA data...</p>
      </div>
    );
     
  }
  
  return (
    <div className="App">
      <h1>NASA Picture of the Day</h1>
      <h3>{data.title}</h3>
      <img src={data.url} alt={data.titl} width={500} />
      <p>{data.explanation}</p>
    </div>
  );
}
  

export default App;
