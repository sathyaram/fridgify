import React, { Component } from 'react';
import Refrigerator from '../Refrigerator/Refrigerator'
import ItemForm from '../ItemForm/ItemForm'
import './App.css';

class App extends Component {

  openForm() {
    var ai = document.querySelector('#additem');
    var aside = document.querySelector('aside');
    aside.classList.toggle("open");
    ai.classList.toggle("spin");
  }

  render() {
    return (
      <div>
        <header>
          <div id="additem" className="tooltip" onClick={this.openForm}>
            <i class="fas fa-plus"></i>
          </div>
          <h1><a href="/">Fridgify</a></h1>
          <div id="info" className="tooltip">
            <i class="far fa-lightbulb"></i>
          </div>
        </header>
      <ItemForm />
      <Refrigerator />
      </div>
    );
  }
}

export default App;
