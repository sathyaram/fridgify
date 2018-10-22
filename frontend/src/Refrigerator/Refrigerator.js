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
          <div className="backDoor">
            <div className="doorText">
              <ul>
                <li>Meats</li>
                <li>Dairy</li>
                <li>Fruit</li>
                <li>Vegetables</li>
                <li>Freezer</li>
                <li>Drinks</li>
                <li>Snacks</li>
                <li>Condiments</li>
                <li>Grain</li>
                <li>Miscellaneous</li>
              </ul>
            </div>
            {/* <div className="handle"></div> */}
          </div>  
          <div className="shelves">
          </div>
        </div>
      </main>
    );
  }
}

export default Refrigerator;