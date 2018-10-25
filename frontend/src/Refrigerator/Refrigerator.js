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
      items:[]
    };
  }

  createItem = (itemToCreate) => {
    console.log(itemToCreate);
    axios
      .post("/api/items", itemToCreate)
      .then(item => {
          console.log("posted!");
          this.getCategories();
          this.getItems();
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteItem = (item) => {
    axios.delete(`/api/items/${item._id}`).then(res => {
      this.getItems()
      });
  };

  getCategories = () => {
    axios
      .get("/api/categories")
      .then(res => {
        console.log("Hello!" + res.data);
        this.setState({
          categories: res.data
        });
      })
      .catch(err => {
        console.log(err);
    });
  }

  getItems = () => {
    axios
      .get("/api/items")
      .then(res => {
        console.log(res.data)
        this.setState({
          items: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getCategories();
    this.getItems();
  }

  categorySelected = e => {
    console.log("bob" + e.target.textContent);
    this.setState({
      selectedCategory: e.target.textContent
    });
  };

  render() {
    console.log(this.state.items)
    const categories = this.state.categories.map(category => {
      return (
        <li onClick={this.categorySelected} key={category._id}>
          <img src={category.icon} />
          <div>{category.name}</div>
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
          <Backdoor category={this.state.selectedCategory} items={this.state.items} delete={this.deleteItem}/>
        </div>
      </main>
    );
  }
}

export default Refrigerator;
