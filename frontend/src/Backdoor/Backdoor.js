import React, { Component } from "react";
import "./Backdoor.css";
import EditItemForm from "../EditItemForm/EditItemForm";

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
    const itemz = this.props.items.map(item => {
      if (item.category === chosenCat) {
        let freezeClass = "";
        if (item.freezer) {
          freezeClass = "freezer";
        }
        return (
          <li className={freezeClass} key={item._id} id={item._id}>
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
          </div>
          <ul className="itemList">{itemz}</ul>
        </div>
      </div>
    );
  }
}

export default Backdoor;
