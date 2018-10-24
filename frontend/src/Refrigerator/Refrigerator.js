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
    axios.get('/api/categories')
      .then((res) => {
        this.setState({
          categories: res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
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
        <li key={category._id}><i className="fas fa-feather"></i>{category.name}</li>
      )
    })
    return (
      <main>
        <div className="refrigerator">
        <div className="shelves">
          <ul onClick={this.categorySelected}>
            {/* {this.state.contents.map((item, i) => {
              return <li onClick={this.categorySelected} key={i}>{item.category}</li>
            })} */}
          {categories}
          </ul>
        </div>
        <Backdoor category={this.state.selectedCategory}/>
        </div>
      </main>
    );
  }
}

export default Refrigerator;