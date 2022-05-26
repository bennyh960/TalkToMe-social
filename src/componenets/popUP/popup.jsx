import React, { Component } from "react";
import "./popup.css";

export default class Popup extends Component {
  render() {
    return (
      <div className="pop-up">
        <div className="pop-up-box">
          <div>{this.props.massage}</div>
          <div className="buttons-pop-up">
            <button onClick={this.props.acceptDelete}>Yes</button>
            <button onClick={this.props.rejectDelete}>No</button>
          </div>
        </div>
      </div>
    );
  }
}
