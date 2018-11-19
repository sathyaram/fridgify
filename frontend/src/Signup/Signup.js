import React, { Component } from "react";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {
    this.props.signup(this.state);
    
  };

  render() {
    return this.props.signedUp ? (
      <div>Signed up!</div>
    ) : (
      <div>
        <input
          type="text"
          name="email"
          onChange={this.handleInputChange}
          value={this.state.email}
        />
        <input
          type="password"
          name="password"
          onChange={this.handleInputChange}
          value={this.state.password}
        />
        <button onClick={this.handleSubmit} type="submit">
          Signup
        </button>
      </div>
    );
  }
}

export default Signup;
