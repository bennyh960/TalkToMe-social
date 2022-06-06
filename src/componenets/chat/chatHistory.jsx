import React, { useEffect, useRef } from "react";
import "./chatHistory.css";
import ChatFriendsView from "./chatFriendsView";

export default function ChatHistory({
  history,
  rechiverID,
  rechiverImg,
  rechiverName,
  handleFriendChatClickPP,
  users,
  user,
}) {
  //   const checkNewDate = ()=>{
  //       history.m
  //   }
  const lastMassageScrollDownRef = useRef(null);

  const scrollToBottom = () => {
    // lastMassageScrollDownRef.current?.scrollIntoView({ behavior: "smooth" });
    lastMassageScrollDownRef.current?.scrollIntoView({ behavior: "auto" });
  };

  useEffect(() => {
    scrollToBottom();
    console.log("x");
  });

  const printHistoryChat = () => {
    return (
      history &&
      history.map((msg, idx) => {
        return (
          <div key={rechiverID + idx}>
            {msg.me && (
              <div className="sender-chat-box">
                <div className="time-font">{msg.time}</div>
                <div className="text-font">{msg.me}</div>
                {/* <div className="text-font">{msg.dayDate}</div> */}
              </div>
            )}
            {msg.him && (
              <div className="rechiver-chat-box">
                <div ref={lastMassageScrollDownRef} className="time-font">
                  {msg.time}
                </div>
                <div className="text-font">{msg.him}</div>
              </div>
            )}
          </div>
        );
      })
    );
  };
  return (
    <div className="chat-outer-container">
      <div className="chat-container">
        <div className="rechiver-details">
          {rechiverImg && <img src={rechiverImg} alt="chat-profile-pic" className="chat-rechiver-img" />}
          {rechiverName && <div>{rechiverName}</div>}
        </div>
        {printHistoryChat()}
      </div>
      <ChatFriendsView users={users} user={user} handleFriendChatClickP={handleFriendChatClickPP} />
    </div>
  );
}
