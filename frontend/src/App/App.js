import React, { Component } from 'react';
import Refrigerator from '../Refrigerator/Refrigerator'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <header>
      <h1><a href="/">Fridgify</a></h1>
        <div className="tooltip-menu">
          <div id="info" className="tooltip">
            <i class="far fa-lightbulb"></i>
          </div>
          <div id="additem" className="tooltip">
            <i class="fas fa-plus"></i>
          </div>
        </div>
      </header>
      <Refrigerator />
      
      
      </div>
    );
  }
}

export default App;
