import React, { useContext, useState, useEffect } from "react";
import "./chat.css";
// import { loginContext } from "../../App";
import usersAPI from "../../api/usersAPI";
import Loader1 from "../loader/loader";

export default function ChatMassanger({ user, massenger }) {
  const [error, setError] = useState("");
  const [msgColor, setMsgColor] = useState("");
  const [msg, setMsg] = useState("");
  // const { users, user, setUser, isLogedIn, setIsLogedIn } = useContext(loginContext);
  // !

  const [isLoading, setIsloading] = useState(false);

  const handleNote = (massage, time, color) => {
    setError(massage);
    setMsgColor(color);
    // console.log("test", color);
    setTimeout(() => {
      setError("");
    }, time);
  };

  //* Put request
  const updateChatMassanger = async (friendObj, senderID) => {
    // setIsloading((prev) => !prev);
    const updatedFreindObj = { friendObj, massenger: [...massenger, { senderID, msg }] };
    try {
      await usersAPI.put(`/${friendObj.id}`, updatedFreindObj);

      //   setIsloading((prev) => !prev);
      //* update UI
    } catch (error) {
      console.log("Post Error:", error);
      //   setIsloading((prev) => !prev);
    }
  };

  //   useEffect(() => {
  //     updateChatMassanger(user, user.id);
  //   });
  function submitHandler(e) {
    e.preventDefault();
    updateChatMassanger(user, user.id);
  }

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <label>user</label>
      <input
        type="text"
        value={msg}
        onChange={(e) => {
          setMsg((p) => e.target.value);
        }}
      />
    </form>
  );
}

//   //* PUT request
//   handleEdit = async (id, name, brand, price, description, image) => {
//     this.setState({ isSpinner: true });
//     const findItemObjectToUpdate = this.state.storeData.find((item) => item.id === id);
//     const updatedItem = { ...findItemObjectToUpdate, name: name, brand, price, description, image };

//     try {
//       const { data } = await storeAPI.put(`/${id}`, updatedItem);
// * Update UI
//       this.setState((prev) => {
//         return {
//           storeData: prev.storeData.map((item) => {
//             if (item.id === id) {
//               return data;
//             }
//             return item;
//           }),
//           isSpinner: !prev.isSpinner,
//         };
//       });
//     } catch (error) {
//       console.log("Error PUT request:", error);
//     }
//   };
