import React, { Component } from "react";
import axios from "axios";

class ItemForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      name: "",
      expiration: "",
      quantity: 1,
      freezer: false,
      category: ""
    };
  }

  handleInputChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    axios
      .get("https://fridgifydb.herokuapp.com/api/categories")
      .then(res => {
        this.setState({
          categories: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  clearInputs = () => {
    this.setState({
      name: "",
      expiration: "",
      quantity: 1,
      freezer: false,
      category: ""
    })
  }

  render() {
    const categories = this.state.categories.map(category => {
      return (
        <option key={category._id} value={category.name}>
          {category.name}
        </option>
      );
    });
    return (
      <aside className="full-item-form">
        <input
          type="text"
          name="name"
          ref="form-name"
          value={this.state.name}
          onChange={this.handleInputChange}
          placeholder="Name"
        />
        <div className="two-inputs">
          <input
            type="text"
            name="quantity"
            ref="form-quantity"
            value={this.state.quantity}
            onChange={this.handleInputChange}
            placeholder="Quantity"
          />
          <input
            type="text"
            name="expiration"
            ref="form-expiration"
            value={this.state.expiration}
            onChange={this.handleInputChange}
            placeholder="Exp. Date"
          />
        </div>
        <select
          name="category"    
          ref="form-category"    
          onChange={this.handleInputChange}
          placeholder="Category"
        >
        <option>Choose category</option>
          {categories}
        </select>
        <div className="checkboxes">
          <input
            type="checkbox"
            name="freezer"
            ref="form-freezer"
            onChange={this.handleInputChange}
            value={this.state.freezer}
          />
          <label htmlFor="freezer">Freezer</label>
        </div>
        <button type="submit" onClick={() => {this.props.createItem(this.state, this.clearInputs)}}>
          Submit
        </button>
      </aside>
    );
  }
}

export default ItemForm;
