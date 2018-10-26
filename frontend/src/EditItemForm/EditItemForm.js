import React, { Component } from "react";
import axios from "axios";
import "./EditItemForm.css";

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
    axios
      .put("https://fridgifydb.herokuapp.com/api/items/" + this.state._id, this.state)
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
        <div className="row-wrap1">
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
        </div>
        <div className="row-wrap2">
          <div className="expdate"><label>Exp:</label><input
            type="text"
            name="expiration"
            value={this.state.expiration}
            onChange={this.handleInputChange}
            placeholder=""
          /></div>
          <div className="list-item-buttons">
            <button id="save-button" type="submit" onClick={this.updateItem}>
              ✔ Save
            </button>
            <button id="delete-button"
              onClick={() => {
                this.props.delete(this.props.itemToUpdate);
              }}
            >
              ✘ Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default EditItemForm;
