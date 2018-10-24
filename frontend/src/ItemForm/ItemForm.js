import React, { Component } from "react";

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
  render() {
    return (
      <aside>
        <input type="text" name="name" value={this.state.name} placeholder="Name" />
        <div class="two-inputs">
          <input type="text" name="quantity" value={this.state.quantity} placeholder="Quantity" />
          <input type="text" name="expiration" value={this.state.expiration} placeholder="Exp. Date" />
        </div>
        <select name="category" value={this.state.category} placeholder="Category">
          <option value="Meats">Meats</option>
          <option value="Dairy">Dairy</option>
          <option value="Grains">Grains</option>
          <option value="Vegetables">Vegetables</option>
        </select>
        <div class="checkboxes">
          <input type="radio" name="freezer" value={this.state.freezer} />
          <label for="freezer">Freezer</label>
          <input type="radio" name="freezer" value={this.state.freezer} />
          <label for="fridge">Fridge</label>
        </div>
        <button type="submit">Submit</button>
      </aside>
    );
  }
}

export default ItemForm;
