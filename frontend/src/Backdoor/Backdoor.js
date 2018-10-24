import React, { Component } from 'react';

// need to change this to show items in this.props.ItemsToDisplays name

class Backdoor extends Component {
  render() {
    console.log(this.props.itemsToDisplay);
    return (
      <div className="backDoor">
        <div className="seperator"></div>
        <div className="doorText">
          <div className="upperDoor">
            <h3><i class="fas fa-cocktail"></i>Drinks</h3>
            <a className="edit-list" href="#">Edit List</a>
          </div>
          <ul>
            <li>{this.props.itemsToDisplay[0].name}</li>
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
    );
  }
}

export default Backdoor;