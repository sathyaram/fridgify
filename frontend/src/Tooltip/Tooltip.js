import React, { Component } from 'react';
import "./Tooltip.css";

class Tooltip extends Component {
  render() {
    return (
      <aside className="tooltip-aside">
        <h2>Welcome to Fridgify!</h2>
        <br />
        <p>Fridgify is your virtual food tracker! It is very simple to use. Our short instruction here is ment to help you understand the app and recieve the best experience.</p>
        <br />
        <p>There are 10 categories which you can use to separate you foods. To add a product is as simple as a button click. Literaly! Just click + and fill the inputs in the sidebar menu. As soon as you press submit, you food will be assigned to the corresponding category in the fridge and appear on the door. You can switch between categories and edit items by just simply hovering over them. Save changes by pressing the tick and delete items by clicking the cross.</p>
        <br />
        <p>Now you know how to use Fridgify! Enjoy!</p>
      </aside>
    );
  }
}

export default Tooltip;