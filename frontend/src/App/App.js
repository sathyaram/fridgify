import React, { Component } from "react";
import Refrigerator from "../Refrigerator/Refrigerator";
import Tooltip from '../Tooltip/Tooltip'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import "./App.css";
import axios from "axios";

class App extends Component {
  // will need to do a comp did mount to and do an axios get to get the data for the state from the db
  // refer to price.js from bitcoin

  constructor(props) {
    super(props);

    this.state = {
      content: [],
      signedUp: false,
      loggedIn: false
    };
  }

  signup = (userInfo) => {
    console.log(userInfo)
    axios.post('http://localhost:3001/signup', userInfo)
    .then(info => {
      console.log(info)
      this.setState({
        signedUp: info.data.signedUp
      })
    }).catch(err => {
      console.log(err)
    })
  }

  login = (userInfo) => {
    console.log(userInfo)
    axios.post('http://localhost:3001/login', userInfo)
    .then(info => {
      console.log(info)
      this.setState({
        loggedIn: info.data.loggedIn
      })
    }).catch(err => {
      console.log(err)
    })
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
            <img src="images/fridge.png" alt="fridgify-logo" /><a href="/">Fridgify</a>
          </h1>
          <div id="info" className="tooltip" onClick={this.openTooltip}>
            <i className="far fa-lightbulb" />
          </div>
        </header>
        <Tooltip />
        <Login loggedIn={this.state.loggedIn} login={this.login}/>
        <Signup signedUp={this.state.signedUp} signup={this.signup} />
        <Refrigerator contents={this.state.content} />
      </div>
    );
  }
}

export default App;
