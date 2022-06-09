import React, { Component } from "react";
import Loader1 from "../loader/loader";
import "./popup.css";
export default class Popup extends Component {
  render() {
    return (
      <div className="pop-up">
        <div className="pop-up-box-border">
          <div className="pop-up-box">
            {this.props.isLoading && <Loader1 />}

            <div>{this.props.massage}</div>
            <div className="buttons-pop-up">
              {this.props.type === "edit" && (
                <InputToEdit dataToEdit={this.props.dataToEdit} handleEdit={this.props.handleEdit} />
              )}
              <button onClick={this.props.acceptAction}>{this.props.confirm}</button>
              <button onClick={this.props.rejectAction}>{this.props.reject}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class InputToEdit extends Component {
  state = {
    name: this.props.dataToEdit ? this.props.dataToEdit.name : "",
    lastName: this.props.dataToEdit ? this.props.dataToEdit.lastName : "",
    age: this.props.dataToEdit ? this.props.dataToEdit.age : "",
    ID: this.props.dataToEdit ? this.props.dataToEdit.id : "",
    photoProfile: this.props.dataToEdit ? this.props.dataToEdit.photoProfile : "",
    country: this.props.dataToEdit ? this.props.dataToEdit.country : "",
    city: this.props.dataToEdit ? this.props.dataToEdit.city : "",
    phone: this.props.dataToEdit ? this.props.dataToEdit.phone : "",
    background: this.props.dataToEdit ? this.props.dataToEdit.background : "",
    password: this.props.dataToEdit ? this.props.dataToEdit.password : "",
    userType: this.props.dataToEdit ? this.props.dataToEdit.userType : "",
    aboutMe: this.props.dataToEdit ? this.props.dataToEdit.aboutMe : "",
    // isRequire: this.props.dataToEdit ? false : true,
  };
  handleInputEditItem = (e) => {
    e.preventDefault();
    // console.log(e.target.id, e.target.value);
    this.setState(
      (prev) => {
        return { [e.target.id]: e.target.value };
      },
      () => {
        this.props.handleEdit(this.state);
        // console.log(this.state[e.target.id]);
      }
    );
  };
  render() {
    // console.log(this.state);
    return (
      <form className="edit-input-data-form">
        <div className="edit-area">
          <label htmlFor="name">F.Name:</label>
          <input
            type="text"
            value={this.state.name}
            id="name"
            onChange={this.handleInputEditItem}
            // required={this.state.isRequire}
          />
        </div>
        <div className="edit-area">
          <label htmlFor="lastName">L.Name:</label>
          <input type="text" value={this.state.lastName} id="lastName" onChange={this.handleInputEditItem} />
        </div>
        <div className="edit-area">
          <label htmlFor="photoProfile">Image:</label>
          <input type="text" value={this.state.photoProfile} id="photoProfile" onChange={this.handleInputEditItem} />
        </div>
        <div className="edit-area">
          <label htmlFor="country">Country:</label>
          <input type="text" value={this.state.country} id="country" onChange={this.handleInputEditItem} />
        </div>
        <div className="edit-area">
          <label htmlFor="city">City:</label>
          <input type="text" value={this.state.city} id="city" onChange={this.handleInputEditItem} />
        </div>
        <div className="edit-area">
          <label htmlFor="age">Age:</label>
          <input type="number" value={this.state.age} id="age" onChange={this.handleInputEditItem} />
        </div>
        <div className="edit-area">
          <label htmlFor="phone">Phone:</label>
          <input type="text" value={this.state.phone} id="phone" onChange={this.handleInputEditItem} />
        </div>
        <div className="edit-area">
          <label htmlFor="background">Background:</label>
          <input type="text" value={this.state.background} id="background" onChange={this.handleInputEditItem} />
        </div>

        {this.props.dataToEdit && (
          <div className="edit-area">
            <label htmlFor="password">Password:</label>
            <input type="text" value={this.state.password} id="password" onChange={this.handleInputEditItem} />
          </div>
        )}
        {this.props.dataToEdit === undefined && (
          <div className="edit-area">
            <label htmlFor="userType">userType:</label>
            <select name="userType" id="userType" onClick={this.handleInputEditItem} required>
              <option value={true}>Hear</option>
              <option value={false}>Talk</option>
            </select>
          </div>
        )}
        {this.props.dataToEdit && (
          <div className="edit-area-big">
            <label htmlFor="about" id="about-label">
              About Me:
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
        )}
      </form>
    );
  }
}
