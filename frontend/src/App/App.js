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
      <aside>
        <input type="text" name="name" placeholder="Name"/>
        <div class="two-inputs">
          <input type="text" name="quantity" placeholder="Quantity"/>
          <input type="text" name="expdate" placeholder="Exp. Date"/> 
        </div>
        <select name="category" placeholder="Category">
          <option value="1">Meats</option>
          <option value="2">Dairy</option>
          <option value="3">Grains</option>
          <option value="4">Vegetables</option>
        </select>
        <div class="checkboxes">
          <input type="checkbox" id="freezer" name="freezer" value="freezer" />
          <label for="freezer">Freezer</label>
          <input type="checkbox" id="fridge" name="fridge" value="fridge" />
          <label for="fridge">Fridge</label>
        </div>
        <button type="submit">Submit</button>
      </aside>
      <Refrigerator />
      
      
      </div>
    );
  }
}

export default App;
