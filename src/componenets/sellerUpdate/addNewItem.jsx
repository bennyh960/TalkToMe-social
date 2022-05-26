import React, { Component } from "react";
import "./addNewItem.css";

export default class AddNewItem extends Component {
  state = { name: "", brand: "", image: "", description: "", price: "" };

  AddNewItemClick = (e) => {
    e.preventDefault();
    this.props.addNewItem(this.state);
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  render() {
    return (
      <form className="form">
        <h3>Add New Product</h3>

        <div>
          <label htmlFor="name">Name :</label>
          <input type="text" id="name" value={this.state.name} onChange={this.handleInputChange} />
        </div>
        <div>
          <label htmlFor="brand">Brand:</label>
          <input type="brand" id="brand" value={this.state.brand} onChange={this.handleInputChange} />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input type="text" id="image" value={this.state.image} onChange={this.handleInputChange} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" value={this.state.description} onChange={this.handleInputChange} />
        </div>
        <div>
          <label htmlFor="price">Price [$]:</label>
          <input type="number" id="price" value={this.state.price} onChange={this.handleInputChange} />
        </div>
        <button className="update-new-btn" onClick={this.AddNewItemClick}>
          Update New Product
        </button>
      </form>
    );
  }
}
