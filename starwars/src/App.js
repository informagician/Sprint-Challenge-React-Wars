import React, {useState, useEffect} from 'react';
import './App.css';
const axios = require('axios');

const App = () => {
  let [page] = useState(1);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(`https://swapi.co/api/people/?page=${page}`)
    .then(response => {
      console.log(response);
      let people = response.data.results;
      people.map(item => {

      })
    })
    .catch(error => {
      console.log('RoB0t 8rOk3N!');
    })
  }, [])
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
