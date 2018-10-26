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
      category: "Meats"
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

  // clearInputs = () => {
  //   this.setState({
  //     name: "",
  //     expiration: "",
  //     quantity: 1,
  //     freezer: false,
  //     category: ""
  //   })
  // }

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
          value={this.state.name}
          onChange={this.handleInputChange}
          placeholder="Name"
        />
        <div className="two-inputs">
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
        </div>
        <select
          name="category"    
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
            onChange={this.handleInputChange}
            value={this.state.freezer}
          />
          <label htmlFor="freezer">Freezer</label>
        </div>
        <button type="submit" onClick={() => {this.props.createItem(this.state)}}>
          Submit
        </button>
      </aside>
    );
  }
}

export default ItemForm;
