import React, { Component } from "react";
import { useHistory } from "react-router";
// import Loader1 from "../loader/loader";
import "./popup.css";

export default function PopupContact({ massage, type, dataToEdit, handleEdit }) {
  const history = useHistory();

  const handleSubmit = () => {
    console.log("submited");
    history.push("/");
  };

  return (
    <div className="pop-up">
      <div className="pop-up-box-border">
        <div className="pop-up-box">
          <div>{massage}</div>
          <div className="buttons-pop-up">
            {type === "edit" && (
              <InputToEdit dataToEdit={dataToEdit} handleEdit={handleEdit} handleSubmit={handleSubmit} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

class InputToEdit extends Component {
  state = {
    name: this.props.dataToEdit ? this.props.dataToEdit.name : "",

    age: this.props.dataToEdit ? this.props.dataToEdit.age : "",
    email: this.props.dataToEdit ? this.props.dataToEdit.email : "",
    ID: this.props.dataToEdit ? this.props.dataToEdit.id : "",

    aboutMe: this.props.dataToEdit ? this.props.dataToEdit.aboutMe : "",
    // isRequire: this.props.dataToEdit ? false : true,
  };
  handleInputEditItem = (e) => {
    e.preventDefault();
    // console.log(e.target.id, e.target.value);
    this.setState(
      (prev) => {
        return { [e.target.id]: e.target.value };
      }
      // () => {
      //   this.props.handleEdit(this.state);
      // console.log(this.state[e.target.id]);
      // }
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit();
  };

  render() {
    // console.log(this.state);
    return (
      <form className="edit-input-data-form" onSubmit={(e) => this.handleSubmit(e)}>
        <div className="edit-area">
          <label htmlFor="name">Full Name:</label>
          <input type="text" value={this.state.name} id="name" onChange={this.handleInputEditItem} />
        </div>

        <div className="edit-area">
          <label htmlFor="email">Email:</label>
          <input type="email" value={this.state.email} id="email" onChange={this.handleInputEditItem} />
        </div>

        <div className="edit-area-big">
          <label htmlFor="aboutMe" id="about-label">
            Additional Details:
          </label>

          <textarea
            name="about"
            id="aboutMe"
            cols="30"
            rows="10"
            value={this.state.aboutMe}
            onChange={this.handleInputEditItem}
          />
        </div>
        <button>Submit</button>
      </form>
    );
  }
}
