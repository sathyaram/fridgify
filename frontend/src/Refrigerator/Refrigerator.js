import React, { Component } from 'react';
import './Refrigerator.css';

class Refrigerator extends Component {

  openDoor() {
    var d = document.querySelector('.refrigerator');
    d.classList.toggle("open");
  }

  render() {
    return (
      <main>
        <div onClick={this.openDoor} className="refrigerator">
        <div className="shelves">
          <ul>
            <li><i class="fas fa-feather"></i>Meats</li>
            <li><i class="fas fa-cloud-moon"></i>Dairy</li>
            <li><i class="fas fa-apple-alt"></i>Fruit</li>
            <li><i class="fas fa-gem"></i>Vegetables</li>
            <li><i class="far fa-snowflake"></i>Freezer</li>
            <li><i class="fas fa-cocktail"></i>Drinks</li>
            <li><i class="fas fa-cookie-bite"></i>Snacks</li>
            <li><i class="fas fa-wine-bottle"></i>Condiments</li>
            <li><i class="fas fa-birthday-cake"></i>Grain</li>
            <li><i class="far fa-sun"></i>Other</li>
          </ul>
        </div>
          <div className="backDoor">
            <div className="seperator"></div>
            <div className="doorText">
              <div className="upperDoor">
                <h3><i class="fas fa-cocktail"></i>Drinks</h3>
                <a className="edit-list" href="#">Edit List</a>
              </div>
              <ul>
                <li>Yellowtail Red Wine [2]</li>
                <li>Smirnoff Vodka</li>
                <li>Milk</li>
                <li>Orange Juice</li>
                <li>Shocktop Lager</li>
                <li>Almond Milk [1/2]</li>
              </ul>
            </div>
            {/* <div className="handle"></div> */}
          </div>

          
        </div>
      </main>
    );
  }
}

export default Refrigerator;