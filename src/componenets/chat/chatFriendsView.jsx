import React from "react";
import "./chatFreindsView.css";

export default function ChatFriendsView({ user, users, handleFriendChatClickP }) {
  //   const [friendsArray, setFriendsArray] = useState([]);
  function findFriends() {
    const userFreindsList = Object.keys(user.massenger);
    const friends = userFreindsList.map((friendID) => {
      return users.find((user) => user.id === friendID);
    });
    return friends;
  }

  const friends = findFriends();

  //   todo: add last massage from friend in friends view like whatsap
  //   function findLastMassageIndex(arr) {
  //     const lastIdx = arr.findLastIndex((n) => n === "him");
  //     console.log(lastIdx);
  //   }

  //   function findLastIndex(array, searchKey, searchValue) {
  //     const index = array
  //       .slice()
  //       .reverse()
  //       .findIndex((x) => x[searchKey] === searchValue);
  //     const count = array.length - 1;
  //     const finalIndex = index >= 0 ? count - index : index;
  //     console.log(finalIndex, index);
  //     return finalIndex;
  //   }

  function handleFriendChatClick(friendID) {
    handleFriendChatClickP(friendID);
  }
  function drawFriendsInChatWindow() {
    return friends.map((friend) => {
      //   console.log();
      const lastMsgFriendSent = friend.massenger[user.id].findLastIndex((e) => e["me"]);
      const lastMsgFriendRechive = friend.massenger[user.id].findLastIndex((e) => e["him"]);
      console.log(lastMsgFriendRechive - lastMsgFriendSent);
      return (
        <div className="friend-container" key={friend.id} onClick={(e) => handleFriendChatClick(friend.id)}>
          <div>
            <img src={friend.photoProfile} alt="" className="freind-img" />
          </div>
          <div>
            <div className="friend-name">{friend.name + " " + friend.lastName}</div>
            <div className="last-massage">
              {/* {friend.massenger[user.id][friend.massenger[user.id].findLastIndex((n) => n === "him")].me} */}
              {/* {findLastMassageIndex(friend.massenger[user.id])} */}
            </div>
          </div>
        </div>
      );
    });
  }

  return <div className="chat-friends-view-container">{drawFriendsInChatWindow()}</div>;
}
