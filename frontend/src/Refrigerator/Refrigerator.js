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
          <h2>Drinks</h2>
          <ul>
            <li>Ugly</li>
            <li>UglyUgly</li>
            <li>Ugly</li>
            <li>UglyUgly</li>
            <li>Ugly</li>
            <li>UglyUgly</li>
          </ul>
        </div>
          <div className="backDoor">
            <div className="doorText">
              <ul>
                <li>Meats</li>
                <li>Dairy</li>
                <li>Fruit</li>
                <li>Vegetables</li>
                <li>Freezer</li>
                <li><i class="fas fa-cocktail"></i>Drinks</li>
                <li><i class="fas fa-cookie-bite"></i>Snacks</li>
                <li>Condiments</li>
                <li>Grain</li>
                <li>Miscellaneous</li>
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