import React, { Component } from 'react';
import Refrigerator from '../Refrigerator/Refrigerator'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <header>
        <h1>Fridgify</h1>
        {/* <button>+</button> */}
      </header>
      <Refrigerator />
      </div>
    );
  }
}

export default App;
