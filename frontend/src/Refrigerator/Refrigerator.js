import React, { Component } from 'react';
import Backdoor from '../Backdoor/Backdoor';
import './Refrigerator.css';

class Refrigerator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contents: this.props.contents,
      selectedCategory: this.props.contents[0].category
    }
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
    return (
      <main>
        <div onClick={this.openDoor} className="refrigerator">
        <div className="shelves">
          <ul>
            {this.state.contents.map((item, i) => {
              return <li onClick={this.categorySelected} key={i}>{item.category}</li>
            })}
            <li><i class="fas fa-feather"></i>Meats</li>
            <li><i class="fas fa-cloud-moon"></i>Dairy</li>
            <li><i class="fas fa-apple-alt"></i>Fruit</li>
            <li><i class="fas fa-gem"></i>Vegetables</li>
            <li><i class="far fa-snowflake"></i>Freezer</li>
            <li><i class="fas fa-cocktail"></i>Drinks</li>
            <li><i class="fas fa-cookie-bite"></i>Snacks</li>
            <li><i class="fas fa-wine-bottle"></i>Condiments</li>
            <li><i class="fas fa-birthday-cake"></i>Grain</li>
            <li><i class="far fa-sun"></i>Other</li>
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