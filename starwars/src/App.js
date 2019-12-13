import React, {useState, useEffect} from 'react';
import './App.css';
import Card from './components/card'
const axios = require('axios');

const App = () => {
  let [people, setPeople] = useState([]);
  let [page] = useState(1);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(`https://swapi.co/api/people/?page=${page}`)
    .then(response => {
      //console.log(response);
      let characters = response.data.results;
      setPeople(characters);
    })
    .catch(error => {
      console.log('RoB0t 8rOk3N!', error);
    })
  }, [])
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="container">
        {people.map(item => {
          return <Card key={item} name={item.name} height={item.height} />;
        })}
      </div>
    </div>
  );
}

export default App;
