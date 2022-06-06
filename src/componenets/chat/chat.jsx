import React, { useState } from "react";
import "./chat.css";
import usersAPI from "../../api/usersAPI";
import Loader1 from "../loader/loader";
import ChatHistory from "./chatHistory";

export default function ChatMassanger({ user, users, closeBtn }) {
  const [rechiverID, setFriendID] = useState("");
  const [rechiverName, setFriendName] = useState("");
  const [rechiverImg, setFriendImg] = useState("");
  const [msg, setMsg] = useState("");

  const [isLoading, setIsloading] = useState(false);

  function sendRechiveObj(whoObj, whoKey, otherID) {
    const timeObj = new Date();
    const hour = timeObj.getHours();
    const minutes = timeObj.getMinutes();
    const timeStr = hour + ":" + minutes;
    let dayNow = timeObj.toLocaleDateString("en-us", { weekday: "long", month: "long", day: "numeric" });

    if (whoObj.massenger[otherID]) {
      whoObj.massenger[otherID].push({ [whoKey]: msg, time: timeStr, dayDate: dayNow });
      console.log("user id:", whoObj.id, "update chat user id:", otherID);
    } else {
      whoObj.massenger[otherID] = [{ [whoKey]: msg, time: timeStr, dayDate: dayNow }];
      console.log("user id:", whoObj.id, "create chat with user id:", otherID);
    }
  }

  //* Put request
  const updateChatMassanger = async (user, friendID) => {
    const friendObj = users.find((friend) => friend.id === friendID);
    setFriendImg(friendObj.photoProfile);
    setFriendName(friendObj.name + " " + friendObj.lastName);

    sendRechiveObj(user, "me", friendObj.id);
    sendRechiveObj(friendObj, "him", user.id);

    const massenger = { massenger: { ...user.massenger, [friendObj.id]: [...user.massenger[friendObj.id]] } };
    const massengerRechiver = { massenger: { ...friendObj.massenger, [user.id]: [...friendObj.massenger[user.id]] } };
    try {
      await usersAPI.put(`/${user.id}`, massenger);
      await usersAPI.put(`/${friendObj.id}`, massengerRechiver);

      //* update UI
    } catch (error) {
      console.log("Post Error:", error);
    }
  };

  function submitHandler(e) {
    e.preventDefault();
    // console.log(typeof rechiverID);
    updateChatMassanger(user, rechiverID);
    setMsg("");
  }

  function handleFriendChatClickPPP(id) {
    setFriendID((p) => id);
    updateChatMassanger(user, id);
  }

  return (
    <div className="chat-massanger">
      <form onSubmit={(e) => submitHandler(e)} className="chat-form">
        <div className="close-chat-btn-container">
          <label>friend ID:</label>
          <div className="close-chat-btn" onClick={closeBtn}>
            X
          </div>
        </div>
        <input
          type="text"
          value={rechiverID}
          name="id"
          onChange={(e) => {
            setFriendID((p) => e.target.value);
          }}
        />
        <ChatHistory
          history={user.massenger[rechiverID]}
          rechiverID={rechiverID}
          rechiverImg={rechiverImg}
          rechiverName={rechiverName}
          friendsIDarray={Object.keys(user.massenger)}
          users={users}
          user={user}
          handleFriendChatClickPP={handleFriendChatClickPPP}
        />
        <div className="chat-msg-input-field">
          <input
            type="text"
            placeholder="Print Your Massage"
            className="massage-input"
            value={msg}
            name="msg"
            onChange={(e) => {
              setMsg((p) => e.target.value);
            }}
          />
          <input type="submit" value="Send" id="submitMsg" />
        </div>
      </form>
    </div>
  );
}
