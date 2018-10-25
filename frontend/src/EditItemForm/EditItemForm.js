import React, { Component } from "react";
import axios from "axios";

class EditItemForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: this.props.itemToUpdate._id,
      name: this.props.itemToUpdate.name,
      expiration: this.props.itemToUpdate.expiration,
      quantity: this.props.itemToUpdate.quantity
    };
  }

  handleInputChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  };

  updateItem = itemId => {
    console.log(this.state);
    axios
      .put("http://localhost:3001/api/items/" + this.state._id, this.state)
      .then(item => {
        console.log("posted!");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleInputChange}
          placeholder="Name"
        />
          <input
            type="text"
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleInputChange}
            placeholder="Quantity"
          />
          <input
            type="text"
            name="expiration"
            value={this.state.expiration}
            onChange={this.handleInputChange}
            placeholder="Exp. Date"
          />
        <button type="submit" onClick={this.updateItem}>
          ✔
        </button>
        <button onClick={() => {this.props.delete(this.props.itemToUpdate)}}>X</button>
      </div>
    );
  }
}

export default EditItemForm;
