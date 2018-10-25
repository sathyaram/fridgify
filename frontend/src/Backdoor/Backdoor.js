import React, { Component } from 'react';
import './Backdoor.css'
import EditItemForm from '../EditItemForm/EditItemForm'
import axios from 'axios'

// need to change this to show items in this.props.ItemsToDisplays name

class Backdoor extends Component {
  constructor() {
    super()

    this.state = {
      items: [],
      categories: []
    }
  }

  componentDidMount () {
    axios.get('http://localhost:3001/api/items')
      .then((res) => {
        this.setState({
          items: res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
    
    axios.get('http://localhost:3001/api/categories')
    .then((res) => {
      this.setState({
        categories: res.data
      })
    })
    .catch((err) => {
      console.log(err)
    })  
  }

  editList = () => {
    let list = document.querySelector('.itemList');
    list.classList.add('editable')
  }

  saveList = () => {
    let save = document.querySelector('.itemList');
    save.classList.remove('editable')
  }

  openDoor = () => {
    let d = document.querySelector('.refrigerator');
    d.classList.add("open");
  }

  deleteItem = (e) => {
    e.preventDefault();
    let id = e.target.parentElement.getAttribute('id')
    axios.delete(`http://localhost:3001/api/items/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        const item = this.state.items.filter(i => i._id !== res.data._id)
        this.setState({items: item})
      })
  }
  
  render() {
    const chosenCat = this.props.category
    console.log("My category is " + chosenCat)

    const items = this.state.items.map((item) => {
      if (item.category === chosenCat) {
        return (
          <ul className="itemList" key={item._id}>
            <li id={item._id}>
            <EditItemForm itemToUpdate={item}/>
            <button onClick={this.deleteItem}>X</button>
            </li>
          </ul>
        )
      } else {
        return null
      }
    })

    return (
      <div onClick={this.openDoor} className="backDoor">
        <div className="seperator"></div>
        <div className="doorText">
          <div className="upperDoor">
            <h3><i className="fas fa-cocktail"></i>{chosenCat}</h3>
            <a onClick={this.editList} className="edit-list" href="#">Edit List</a>
          </div>
          <div>
            {items}
          </div>
        </div>
        {/* <div className="handle"></div> */}
      </div>
    );
  }
}

export default Backdoor;