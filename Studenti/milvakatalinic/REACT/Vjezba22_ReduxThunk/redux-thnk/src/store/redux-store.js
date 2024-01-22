import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";

export const GET_DATA = "GET_DATA";

const NASA_API_KEY = "2V23yzRZJtL2g5CqylFcG2VoR3Q7krQaf5ZbcITV";

const initialState = {
  nasaData: {
    title: "",
    url: "",
    explanation: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return { nasaData: action.payload };
    default:
      return state;
  }
};

export function getNasaData() {
  return async function (dispatch) {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`
    );
    const responseData = await response.json();
    const fetchedNasaData = {
      title: responseData.title,
      url: responseData.url,
      explanation: responseData.explanation,
    };

    dispatch({ type: GET_DATA, payload: fetchedNasaData });
  };
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
