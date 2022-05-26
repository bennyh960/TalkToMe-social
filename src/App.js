import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import storeAPI from "./api/storeAPI";
import "./App.css";
import Spinner from "./componenets/spinner/spinner";
import Shoes from "./componenets/shoes/shoes";
import NavBar from "./componenets/navbar/navbar";
import AddNewItem from "./componenets/sellerUpdate/addNewItem";
import Popup from "./componenets/popUP/popup";

export default class App extends Component {
  state = { storeData: [], isSpinner: true };

  // Get
  async componentDidMount() {
    try {
      const getStoreData = await storeAPI.get();
      this.setState({ storeData: getStoreData.data, isSpinner: false });
    } catch (error) {
      console.log("Error Benny:", error);
    }
  }

  // Post
  // addNewProduct = async ({ name, brand, image, description, price }) => {
  addNewProduct = async (NewProductObjToAdd) => {
    this.setState((prev) => {
      return { isSpinner: !prev.isSpinner };
    });
    try {
      const NewProduct = await storeAPI.post("", NewProductObjToAdd);

      // update UI
      this.setState((prev) => {
        return { storeData: [...prev.storeData, NewProduct.data], isSpinner: !prev.isSpinner };
      });
    } catch (error) {
      console.log("Benny Post Error:", error);
    }
  };

  // Delete
  handleDelete = async (deletedItemID) => {
    this.setState((prev) => {
      return { isSpinner: !prev.isSpinner };
    });

    const updatedItemsArr = this.state.storeData.filter((item) => {
      return item.id !== deletedItemID;
    });

    try {
      await storeAPI.delete(`/${deletedItemID}`);
      this.setState((prev) => {
        return { storeData: updatedItemsArr, isSpinner: !prev.isSpinner };
      });
    } catch (error) {
      console.log("Benny Delete Error:", error);
    }
  };

  // UI - HomePage
  drawItems = (isUpdate) => {
    return this.state.storeData.map(({ name, id, price, image, brand, description }) => {
      return (
        <Shoes
          key={id}
          name={name}
          id={id}
          price={price}
          image={image}
          brand={brand}
          description={description}
          container={"shoe-container"}
          update={isUpdate}
          handleDelete={this.handleDelete}
          // container={containerName}
        />
      );
    });
  };
  // UI - Extra for UX
  drawOneItem = () => {
    return this.state.storeData.map(({ name, id, price, image, brand, description }) => {
      return (
        <Route path={`/${id}`} key={id}>
          <Shoes
            name={name}
            id={id}
            price={price}
            image={image}
            brand={brand}
            description={description}
            container={"shoe-container-one-item"}
          />
        </Route>
      );
    });
  };

  render() {
    if (this.state.isSpinner) {
      return (
        <>
          <BrowserRouter>
            <NavBar />
          </BrowserRouter>
          <Spinner />
        </>
      );
    } else {
      return (
        <BrowserRouter>
          <NavBar />
          {/* <Switch> */}
          <Route path={"/"} exact>
            <h1 style={{ textAlign: "center" }}>Brand New</h1>
            <div className="store-container">{this.drawItems(false)}</div>
          </Route>
          <Route path={"/update"} exact>
            <h1 style={{ textAlign: "center", margin: "2rem" }}>Store Update</h1>
            <AddNewItem addNewItem={this.addNewProduct} />
            <div className="store-container-update">{this.drawItems(true)}</div>
          </Route>

          <div className="shoe-container-one-item">{this.drawOneItem()}</div>

          {/* </Switch> */}
        </BrowserRouter>
      );
    }
  }
}

function About() {
  return <div>About</div>;
}
