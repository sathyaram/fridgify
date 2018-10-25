import React, { Component } from "react";
import Refrigerator from "../Refrigerator/Refrigerator";
import ItemForm from "../ItemForm/ItemForm";
import Tooltip from '../Tooltip/Tooltip'
import "./App.css";

class App extends Component {
  // will need to do a comp did mount to and do an axios get to get the data for the state from the db
  // refer to price.js from bitcoin

  constructor(props) {
    super(props);

    this.state = {
      content: []
    };
  }

  openForm = () => {
    let ai = document.querySelector("#additem");
    let aside = document.querySelector(".full-item-form");
    aside.classList.toggle("open");
    ai.classList.toggle("spin");
  }

  openTooltip = () => {
    let tT = document.querySelector('.tooltip-aside');
    tT.classList.toggle('open');
  }

  render() {
    return (
      <div>
        <header>
          <div id="additem" className="tooltip" onClick={this.openForm}>
            <i className="fas fa-plus" />
          </div>
          <h1>
            <a href="/">Fridgify</a>
          </h1>
          <div id="info" className="tooltip" onClick={this.openTooltip}>
            <i className="far fa-lightbulb" />
          </div>
        </header>
        <Tooltip />
        <Refrigerator contents={this.state.content} />
      </div>
    );
  }
}

export default App;
