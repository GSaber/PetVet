import React, { useContext, useEffect, useState } from "react";
import "../assets/css/profile.scss";
import { AuthContext } from "../context/AuthContext";
import ProfileSetting from "../components/profilesettings";
import Header from "../components/header";
import ChangePwd from "../components/changepwd";
const Profile = () => {
  const [windowContent, setWindowContent] = useState("ProfileSetting");
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <Header />
      <div className="profile">
        <div className="userInfo">
          {currentUser?.photoURL && <img src={currentUser?.photoURL} alt="/" />}
          <span>{currentUser?.displayName}</span>
          <span>{currentUser?.email}</span>

          <p onClick={() => setWindowContent("ProfileSetting")}>
            Profile Setting
          </p>
          <p onClick={() => setWindowContent("ChangePwd")}>Change Password</p>
        </div>
        <div className="profile_content">
          {windowContent === "ProfileSetting" && <ProfileSetting />}
          {windowContent === "ChangePwd" && <ChangePwd />}
        </div>
      </div>
    </>
  );
};

export default Profile;
