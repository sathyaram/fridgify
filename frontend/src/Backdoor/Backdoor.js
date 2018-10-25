import React, { Component } from "react";
import "./Backdoor.css";
import EditItemForm from "../EditItemForm/EditItemForm";
import axios from "axios";

// need to change this to show items in this.props.ItemsToDisplays name

class Backdoor extends Component {

  editList = () => {
    let list = document.querySelector(".itemList");
    list.classList.add("editable");
  };

  saveList = () => {
    let save = document.querySelector(".itemList");
    save.classList.remove("editable");
  };

  openDoor = () => {
    let d = document.querySelector(".refrigerator");
    d.classList.add("open");
  };

  render() {
    const chosenCat = this.props.category;
    console.log("My category is " + chosenCat);
    const itemz = this.props.items.map(item => {
      if (item.category === chosenCat) {
        let freezeClass = "";
        if (item.freezer) {
          freezeClass = "freezer";
        }
        return (
          <li className={freezeClass} id={item._id}>
            <EditItemForm itemToUpdate={item} />
            <button onClick={() => {this.props.delete(item)}}>X</button>
          </li>
        );
      } else {
        return null;
      }
    });

    return (
      <div onClick={this.openDoor} className="backDoor">
        <div className="seperator" />
        <div className="doorText">
          <div className="upperDoor">
            <h3>
              <i className="fas fa-cocktail" />
              {chosenCat}
            </h3>
            <a onClick={this.editList} className="edit-list" href="#">
              Edit List
            </a>
          </div>
          <ul className="itemList">{itemz}</ul>
        </div>
      </div>
    );
  }
}

export default Backdoor;
