import React, { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { loginContext } from "../../App";
import "./person.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faEdit } from "@fortawesome/free-solid-svg-icons";
import Popup from "../popUP/popup";
import usersAPI from "../../api/usersAPI";

import ChatMassanger from "../chat/chat";
// todo delete this import

export default function Person() {
  const [showChat, setShowChat] = useState(false);

  const [showPopUp, setShowPopUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [tempUserdata, setTempUserData] = useState("");
  const { user, setUser, users, setUnreadMsg } = useContext(loginContext);
  const {
    name,
    lastName,
    userName,
    age,
    phone,
    photoProfile,
    aboutMe,
    city,
    country,
    background,
    jobTitle,

    // areaOfIntrest,
    // massenger,
  } = user;

  const handleEdit = (personEditData) => {
    const { name, lastName, phone, age, photoProfile, aboutMe, city, country, background } = personEditData;
    setTempUserData((p) => {
      return { name, lastName, phone, photoProfile, aboutMe, city, country, background, age };
    });
  };

  const acceptEditData = (tempUserdata) => {
    const { name, phone, lastName, age, photoProfile, aboutMe, city, country, background } = tempUserdata;
    setUser((p) => {
      return { ...p, name, lastName, phone, photoProfile, aboutMe, city, country, background, age };
    });

    console.log("accept edit");
    if (user.id == JSON.parse(localStorage.getItem("user")).id) {
      localStorage.setItem("user", JSON.stringify(user));
      console.log("update user on local storage");
    }

    // setTimeout(() => {
    //   window.location.reload();
    // }, 1500);
  };

  useEffect(() => {
    console.log("user updated ui");
    const updateApi = async () => {
      try {
        setIsLoading(true);
        await usersAPI.put(`/${user.id}`, user);
        //! Just for effect i add timeout
        setTimeout(() => {
          setIsLoading(false);
          setShowPopUp(false);
        }, 300);
      } catch (error) {
        console.log("Post Error:", error);
        setShowPopUp(false);
      }
    };
    updateApi();

    console.log("user updated API");
  }, [user]);

  return (
    <div className="personal-page-container">
      <div className="personal-detailes-container">
        <div className="description-personal-details">
          <PersonOneData dataName="Full Name" dataX={name} dataY={lastName} user={user} />
          <PersonOneData dataName="User Name" dataX={userName} user={user} />
          <PersonOneData dataName="Age" dataX={age} user={user} />
          <PersonOneData dataName="Country" dataX={country} user={user} />
          <PersonOneData dataName="City" dataX={city} user={user} />
          <PersonOneData dataName="Phone" dataX={phone} user={user} />
          <PersonOneData dataName="Background" dataX={background} user={user} />
          <PersonOneData dataName="Job Title" dataX={jobTitle} user={user} />
          <PersonOneData dataName="About Me" dataX={aboutMe} user={user} />
        </div>
        <div>
          <img src={photoProfile} alt={userName} className="user-large-photo" />
        </div>
      </div>
      <div>
        <button onClick={() => setShowChat((p) => !p)}>
          chat <FontAwesomeIcon icon={faComment} className="bell-icon" />
        </button>
        <button onClick={() => setShowPopUp((p) => !p)}>
          Edit Profile <FontAwesomeIcon icon={faEdit} />
        </button>
        {showPopUp && (
          <Popup
            massage="Edit Profile"
            type={"edit"}
            dataToEdit={user}
            confirm="Save"
            reject="Cancle"
            isLoading={isLoading}
            handleEdit={handleEdit}
            acceptAction={() => {
              acceptEditData(tempUserdata);
              // console.log("save btn connect");
            }}
            rejectAction={() => setShowPopUp(false)}
          />
        )}
      </div>

      {showChat && (
        <ChatMassanger setUnreadMsg={setUnreadMsg} user={user} users={users} closeBtn={() => setShowChat((p) => !p)} />
      )}
    </div>
  );
}

function PersonOneData({ dataName, dataX, dataY }) {
  return (
    <div className="person-one-data">
      <div>
        <span className="bold-text">{dataName}:</span> {dataY ? dataX + " " + dataY : dataX}
      </div>
    </div>
  );
}
// function PersonOneData({ dataName, dataX, dataY, showEdit, user }) {
//   const [isShownEdit, setIsShownEdit] = useState(false);
//   const [showPopUp, setShowPopUp] = useState(false);
//   return (
//     <div className="person-one-data">
//       <div>
//         <span className="bold-text">{dataName}:</span> {dataX + " " + dataY}
//       </div>
//       {showEdit && (
//         <button
//           onClick={() => setShowPopUp((p) => !p)}
//           className="edit-btn-icon"
//         >
//           <FontAwesomeIcon icon={faEdit} />
//         </button>
//       )}
//       {isShownEdit && <div className="show-data-over">Edit {dataName} </div>}
//       {showPopUp && <Popup massage={`Editing: ${dataName}`} type={"edit"} dataToEdit={user} />}
//     </div>
//   );
// }

//massage= what will see, type="edit/or no" , dataToEdit=not now ,handleEdit=not now
