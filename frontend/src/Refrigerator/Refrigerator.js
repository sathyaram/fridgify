import React, { Component } from "react";
import Backdoor from "../Backdoor/Backdoor";
import ItemForm from "../ItemForm/ItemForm";
import "./Refrigerator.css";
import axios from "axios";

class Refrigerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: "",
      categories: [],
      items: []
    };
  }

  createItem = itemToCreate => {
    axios
      .post("https://fridgifydb.herokuapp.com/api/items", itemToCreate)
      .then(item => {
        console.log("posted!");
        this.getCategories();
        this.getItems();
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteItem = item => {
    axios
      .delete(`https://fridgifydb.herokuapp.com/api/items/${item._id}`)
      .then(res => {
        this.getItems();
      });
  };

  getCategories = () => {
    axios
      .get("https://fridgifydb.herokuapp.com/api/categories")
      .then(res => {
        this.setState({
          categories: res.data
          // selectedCategory: res.data[1].name
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getItems = () => {
    axios
      .get("https://fridgifydb.herokuapp.com/api/items")
      .then(res => {
        this.setState({
          items: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getCategories();
    this.getItems();
  }

  categorySelected = e => {
    let doorText = document.querySelector(".doorText");
    doorText.classList.remove("introText");
    let thisItem = document.querySelectorAll("li.selected");
    thisItem.forEach(function(li) {
      li.classList.remove("selected");
    });
    e.target.classList.add("selected");
    this.setState({
      selectedCategory: e.target.textContent
    });
  };

  render() {
    const categories = this.state.categories.map(category => {
      return (
        <li onClick={this.categorySelected} key={category._id}>
          <img alt="category-icon" src={category.icon} />
          {category.name}
        </li>
      );
    });
    return (
      <main>
        <ItemForm createItem={this.createItem} />
        <div className="refrigerator">
          <div className="shelves">
            <ul>{categories}</ul>
          </div>
          <Backdoor
            category={this.state.selectedCategory}
            items={this.state.items}
            delete={this.deleteItem}
          />
        </div>
      </main>
    );
  }
}

export default Refrigerator;
