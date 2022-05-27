import React, { Component } from "react";
import "./popup.css";

export default class Popup extends Component {
  render() {
    return (
      <div className="pop-up">
        <div className="pop-up-box">
          <div>{this.props.massage}</div>
          <div className="buttons-pop-up">
            {this.props.type === "edit" && (
              <InputToEdit dataToEdit={this.props.dataToEdit} handleEdit={this.props.handleEdit} />
            )}
            <button onClick={this.props.acceptAction}>Yes</button>
            <button onClick={this.props.rejectAction}>No</button>
          </div>
        </div>
      </div>
    );
  }
}

class InputToEdit extends Component {
  state = {
    nameIn: this.props.dataToEdit.name,
    ID: this.props.dataToEdit.id,
    // imageIn: this.props.dataToEdit.image,
    // descriptionIn: this.props.dataToEdit.description,
    // brandIn: this.props.dataToEdit.brand,
    // priceIn: this.props.dataToEdit.price,
  };
  handleInputEditItem = (e) => {
    e.preventDefault();
    // console.log(e.target.id, e.target.value);
    this.setState((prev) => {
      return { [e.target.id]: e.target.value };
    });
    this.props.handleEdit(e.target.value, this.state.ID);
  };
  render() {
    console.log(this.state);
    return (
      <form>
        <input type="text" value={this.state.nameIn} id="nameIn" onChange={this.handleInputEditItem} />
        {/* <input type="text" value={this.state.imageIn} id="imageIn" onChange={this.handleInputEditItem} />
        <input type="text" value={this.state.descriptionIn} id="descriptionIn" onChange={this.handleInputEditItem} />
        <input type="text" value={this.state.brandIn} id="brandIn" onChange={this.handleInputEditItem} />
        <input type="number" value={this.state.priceIn} id="priceIn" onChange={this.handleInputEditItem} /> */}
      </form>
    );
  }
}
// class InputToEdit extends Component {
//   state = {
//     nameIn: this.props.dataToEdit.name,
//     imageIn: this.props.dataToEdit.image,
//     descriptionIn: this.props.dataToEdit.description,
//     brandIn: this.props.dataToEdit.brand,
//     priceIn: this.props.dataToEdit.price,
//   };
//   handleInputEditItem = ({ target }) => {
//     console.log(target.id, target.value);
//     this.setState((prev) => {
//       return { [target.id]: target.value };
//     });
//   };
//   render() {
//     return (
//       <form>
//         <input type="text" value={this.state.nameIn} id="nameIn" onChange={this.handleInputEditItem} />
//         <input type="text" value={this.state.imageIn} id="imageIn" onChange={this.handleInputEditItem} />
//         <input type="text" value={this.state.descriptionIn} id="descriptionIn" onChange={this.handleInputEditItem} />
//         <input type="text" value={this.state.brandIn} id="brandIn" onChange={this.handleInputEditItem} />
//         <input type="number" value={this.state.priceIn} id="priceIn" onChange={this.handleInputEditItem} />
//       </form>
//     );
//   }
// }
