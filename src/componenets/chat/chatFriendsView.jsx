import React, { useRef } from "react";
import "./chatFreindsView.css";

export default function ChatFriendsView({ user, users, handleFriendChatClickP, setUnreadMsg }) {
  //   const [friendsArray, setFriendsArray] = useState([]);
  // const [totalUnreadMsgState, setTotalUnreadMsg] = useState(0);

  const totalUnreadMsg = useRef(0);

  //   useEffect(() => {
  //     console.log("update unread massages");
  //   }, [totalUnreadMsg]);

  function findFriends() {
    const userFreindsList = Object.keys(user.massenger);
    // console.log("user friend list:", userFreindsList);
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

  function handleFriendChatClick(friendID) {
    handleFriendChatClickP(friendID);
  }
  function drawFriendsInChatWindow() {
    return friends.map((friend) => {
      const lastMsgFriendSent = friend.massenger[user.id].findLastIndex((e) => e["me"]);
      const lastMsgFriendRechive = friend.massenger[user.id].findLastIndex((e) => e["him"]);
      const totalNewMsgFriendSent = friend.massenger[user.id].length - lastMsgFriendRechive;
      //   setTotalUnreadMsg((p) => p + totalNewMsgFriendSent - 1);
      totalUnreadMsg.current += totalNewMsgFriendSent - 1;
      return (
        <div className="friend-container" key={friend.id} onClick={(e) => handleFriendChatClick(friend.id)}>
          <div>
            <img src={friend.photoProfile} alt="" className="freind-img" />
          </div>
          <div>
            <div className="friend-name">
              {friend.name + " " + friend.lastName}
              {totalNewMsgFriendSent - 1 > 0 && <div className="new-msg-from-friend">{totalNewMsgFriendSent - 1}</div>}
            </div>
            <div className="last-massage">
              <div>{lastMsgFriendSent > 0 && friend.massenger[user.id][lastMsgFriendSent].time}</div>
              <div>{lastMsgFriendSent > 0 && friend.massenger[user.id][lastMsgFriendSent].me}</div>
            </div>
          </div>
        </div>
      );
    });
  }
  //   console.log(totalUnreadMsg.current, "totalunread msg");
  setTimeout(() => {
    setUnreadMsg(totalUnreadMsg);
  }, 100);
  //   console.log(setUnreadMsg);
  totalUnreadMsg.current = 0;
  return <div className="chat-friends-view-container">{drawFriendsInChatWindow()}</div>;
}
