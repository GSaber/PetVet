import React, { useContext, useEffect } from "react";
import "../assets/css/profilesetting.scss";
import { AuthContext } from "../context/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase";
const ProfileSetting = () => {
  const { currentUser } = useContext(AuthContext);
  const handleUpdateProfile = (e) => {
    const displayName = e.target.displayName.value;
    updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: currentUser?.photoURL,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };
  return (
    <form onSubmit={handleUpdateProfile}>
      <label htmlFor="displayName">Full name: </label>
      <input
        type="text"
        id="displayName"
        placeholder={currentUser?.displayName}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={currentUser?.email}
        disabled
        autoComplete="current-password"
      />

      <button>Save</button>
    </form>
  );
};

export default ProfileSetting;
