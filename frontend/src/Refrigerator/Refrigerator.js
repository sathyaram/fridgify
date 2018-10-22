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
            Testio!
            <div className="handle"></div>
          </div>
          
        </div>
      </main>
    );
  }
}

export default Refrigerator;