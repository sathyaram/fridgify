import React, { Component } from 'react';
import Backdoor from '../Backdoor/Backdoor';
import './Refrigerator.css';
import axios from 'axios'

class Refrigerator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contents: this.props.contents,
      selectedCategory: this.props.contents[0].category,
      categories: []
    }
  }

  componentDidMount () {
    axios.get('http://localhost:3001/api/categories')
      .then((res) => {
        console.log(res)
        this.setState({
          categories: res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  openDoor = () => {
    var d = document.querySelector('.refrigerator');
    d.classList.toggle("open");
  }

  categorySelected = (e) => {
    console.log(e.target.textContent);
    this.setState({
      selectedCategory: e.target.textContent
    })
  }

  render() {
    const categories = this.state.categories.map((category) => {
      return (
        <div key={category._id}>
          <div>{category.name}</div>
        </div>
      )
    })
    return (
      <main>
        <div onClick={this.openDoor} className="refrigerator">
        <div className="shelves">
          <ul>
            {this.state.contents.map((item, i) => {
              return <li onClick={this.categorySelected} key={i}>{item.category}</li>
            })}
            <li><i className="fas fa-feather"></i>{categories}</li>
            {/* <li><i className="fas fa-cloud-moon"></i>Dairy</li>
            <li><i className="fas fa-apple-alt"></i>Fruit</li>
            <li><i className="fas fa-gem"></i>Vegetables</li>
            <li><i className="far fa-snowflake"></i>Freezer</li>
            <li><i className="fas fa-cocktail"></i>Drinks</li>
            <li><i className="fas fa-cookie-bite"></i>Snacks</li>
            <li><i className="fas fa-wine-bottle"></i>Condiments</li>
            <li><i className="fas fa-birthday-cake"></i>Grain</li>
            <li><i className="far fa-sun"></i>Other</li> */}
          </ul>
        </div>
        <Backdoor itemsToDisplay={this.state.contents.find(item => this.state.selectedCategory === item.category).items
        }/>
          
        </div>
      </main>
    );
  }
}

export default Refrigerator;