import React from "react";
import "./unreadMassage.css";

// component
export default function DrawTheUnreadMassage({ user, users }) {
  const userFreinds = Object.keys(user.massenger);
  const friendObj = {};
  userFreinds.forEach((key) => {
    const { totalUnread, lastIndexSent } = findLastUnreadMassageFromFreinds(user.massenger, key);
    // friendObj[key] = [findLastUnreadMassageFromFreinds(user.massenger, key), users.find((u) => u.id === key).name];
    if (totalUnread > 0) {
      friendObj[key] = [users.find((u) => u.id === key).name, totalUnread, lastIndexSent];
    }
  });

  //   console.log(friendObj);

  return Object.keys(friendObj).map((m, i) => {
    return (
      <div key={i} className="nav-total-unread">
        <span className="unread-from-one-friend">
          {" "}
          You have {friendObj[m][1]} unread massages from {friendObj[m][0]}.
        </span>
      </div>
    );
  });
}

// utils func
function findLastUnreadMassageFromFreinds(array, index) {
  // * Logic is opposite direction due to checking in friends in user - so me mean him and him mean me
  const lastIndexRechived = array[index].findLastIndex((e) => e.him); //him
  const lastIndexSent = array[index].findLastIndex((e) => e.me); //me
  // const arrayLen = array.length;
  const totalUnread = lastIndexRechived - lastIndexSent;
  console.log(totalUnread);
  return totalUnread > 0 ? { totalUnread, lastIndexSent } : 0;
}
