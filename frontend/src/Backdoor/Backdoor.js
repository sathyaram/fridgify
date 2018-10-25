import React, { Component } from "react";
import "./Backdoor.css";
import EditItemForm from "../EditItemForm/EditItemForm";
import axios from "axios";

// AddItem wasnt connected to Backdoor, so, i moved the state up into refridgorator, 

class Backdoor extends Component {

  // editList = () => {
  //   let list = document.querySelector(".itemList");
  //   list.classList.add("editable");
  // };

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
    const itemz = this.props.items.map((item, i) => {
      if (item.category === chosenCat) {
        let freezeClass = "";
        if (item.freezer) {
          freezeClass = "freezer";
        }
        console.log("bob" + item.freezer)
        return (
          <li className={freezeClass} key={i} id={item._id}>
            <EditItemForm delete={this.props.delete} itemToUpdate={item} /> 
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
              {chosenCat}
            </h3>
            {/* <a onClick={this.editList} className="edit-list" href="#">
              Edit List
            </a> */}
          </div>
          <ul className="itemList">{itemz}</ul>
        </div>
      </div>
    );
  }
}

export default Backdoor;
