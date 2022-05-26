import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./shoes.css";

// name, id, price, image, brand, description
export default class Shoes extends Component {
  render() {
    // console.log(this.props.container);
    return (
      <div className={this.props.container}>
        <Link to={this.props.id} className="shoe-link">
          <img className="shoe" src={this.props.image} alt={this.props.description} />
        </Link>
        <div>{this.props.name}</div>
        <div>{this.props.brand}</div>
        <div>{this.props.price}$</div>
        {this.props.update && (
          <div className="update-buttons">
            <button>Update</button>
            <button
              onClick={() => {
                this.props.handleDelete(this.props.id);
              }}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    );
  }
}
