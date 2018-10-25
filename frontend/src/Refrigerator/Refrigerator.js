import React, { Component } from "react";
import Backdoor from "../Backdoor/Backdoor";
import "./Refrigerator.css";
import axios from "axios";

class Refrigerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: "",
      categories: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/categories")
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

  categorySelected = e => {
    console.log(e.target.textContent);
    this.setState({
      selectedCategory: e.target.textContent
    });
  };

  render() {
    const categories = this.state.categories.map(category => {
      return (
        <li key={category._id}>
          <i className="fas fa-feather" />
          {category.name}
        </li>
      );
    });
    return (
      <main>
        <div className="refrigerator">
          <div className="shelves">
            <ul onClick={this.categorySelected}>{categories}</ul>
          </div>
          <Backdoor category={this.state.selectedCategory} />
        </div>
      </main>
    );
  }
}

export default Refrigerator;
