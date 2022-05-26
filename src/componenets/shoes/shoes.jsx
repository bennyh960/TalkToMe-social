import React, { Component } from "react";
import { Link } from "react-router-dom";
import Popup from "../popUP/popup";
import "./shoes.css";

// name, id, price, image, brand, description
export default class Shoes extends Component {
  state = { isPopUp: false };
  handleDelete = () => {
    this.props.handleDelete(this.props.id);
    this.reverseState();
  };

  reverseState = () => {
    this.setState((prev) => {
      return { isPopUp: !prev.isPopUp };
    });
  };
  render() {
    // console.log(this.props.container);
    return (
      <>
        {this.state.isPopUp && (
          <Popup
            massage={"Are you sure to delete this item?"}
            acceptDelete={this.handleDelete}
            rejectDelete={this.reverseState}
          />
        )}
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
                  //   this.props.handleDelete(this.props.id);
                  this.setState({ isPopUp: true });
                }}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </>
    );
  }
}
