import React, { Component } from "react";
import { Link } from "react-router-dom";
import Popup from "../popUP/popup";
import "./shoes.css";

// name, id, price, image, brand, description
export default class Shoes extends Component {
  state = {
    isPopUp: false,
    action: "",
    massage: "",
    nameIn: "",
    ID: "",
    priceIn: "",
    descriptionIn: "",
    brandIn: "",
    imageIn: "",
  };
  handleDelete = () => {
    this.props.handleDelete(this.props.id);
    this.reverseState();
  };

  handleEdit = ({ nameIn, ID, priceIn, imageIn, descriptionIn, brandIn }) => {
    this.setState(() => {
      return { nameIn, ID, priceIn, imageIn, brandIn, descriptionIn };
    });
  };
  handleAcceptEdit = () => {
    this.props.handleEdit(
      this.state.ID,
      this.state.nameIn,
      this.state.brandIn,
      this.state.priceIn,
      this.state.descriptionIn,
      this.state.imageIn
    );
    this.reverseState();
  };

  reverseState = () => {
    this.setState((prev) => {
      return { isPopUp: !prev.isPopUp, action: "" };
    });
  };
  render() {
    // console.log(this.props.container);
    return (
      <>
        {this.state.isPopUp && (
          <Popup
            dataToEdit={this.props}
            handleEdit={this.handleEdit}
            massage={this.state.massage}
            type={this.state.action}
            acceptAction={() => {
              if (this.state.action === "delete") {
                this.handleDelete();
              } else if (this.state.action === "edit") {
                this.handleAcceptEdit();
              }
            }}
            rejectAction={this.reverseState}
          />
        )}
        <div className={this.props.container}>
          <Link to={this.props.id} className="shoe-link">
            <img className="shoe" src={this.props.image} alt={this.props.description} />
          </Link>
          <h3>{this.props.name}</h3>
          <div>{this.props.brand}</div>
          <div>{this.props.price}$</div>
          {this.props.update && (
            <div className="update-buttons">
              <button
                onClick={() => {
                  this.setState({ isPopUp: true, action: "edit", massage: "Edit your item." });
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  this.setState({ isPopUp: true, action: "delete", massage: "Are you sure to delete this item?" });
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
