import React, { Component } from "react";
import axios from 'axios';

class ItemForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
        name: '',
        expiration: '',
        quantity: 1,
        freezer: false,
        category: ''
    }
  }

  handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  createItem = () => {
    console.log(this.state)
    axios.post('http://localhost:3001/items', this.state)
    .then(item => {
      console.log('posted!')
    }).catch(err => {
      console.log(err)
    }) 
  }

  render() {
    return (
      <aside>
        <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Name" />
        <div className="two-inputs">
          <input type="text" name="quantity" value={this.state.quantity} onChange={this.handleInputChange} placeholder="Quantity" />
          <input type="text" name="expiration" value={this.state.expiration} onChange={this.handleInputChange} placeholder="Exp. Date" />
        </div>
        <select name="category" value={this.state.category} onChange={this.handleInputChange} placeholder="Category">
          <option value="Meats">Meats</option>
          <option value="Dairy">Dairy</option>
          <option value="Grains">Grains</option>
          <option value="Vegetables">Vegetables</option>
        </select>
        <div className="checkboxes">
          <input type="radio" name="freezer" onChange={this.handleInputChange} value={this.state.freezer} />
          <label for="freezer">Freezer</label>
          <input type="radio" name="freezer" onChange={this.handleInputChange} value={!this.state.freezer} />
          <label for="fridge">Fridge</label>
        </div>
        <button type="submit" onClick={this.createItem}>Submit</button>
      </aside>
    );
  }
}

export default ItemForm;
