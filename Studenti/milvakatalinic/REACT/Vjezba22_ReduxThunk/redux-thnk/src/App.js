import "./App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNasaData } from "./store/redux-store";

function App() {
  const nasaData = useSelector((state) => state.nasaData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNasaData());
  }, [dispatch]);

  if (!nasaData.title) {
    return (
      <div className="App">
        <p>Loading NASA data...</p>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>NASA Picture of the Day</h1>
      <h3>{nasaData.title}</h3>
      <img src={nasaData.url} alt={nasaData.title} width={500} height={500} />
      <p>{nasaData.explanation}</p>
    </div>
  );
}

export default App;
