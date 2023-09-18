import React, { useContext, useEffect, useState } from "react";
import "../assets/css/profilesetting.scss";
import { auth, db, storage } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const ProfileSetting = () => {
  const { currentUser } = useContext(AuthContext);
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const handleUpdateProfile = (e) => {
    let displayName = e.target.displayName.value;
    const file = e.target.avatar.files[0];
    const storageRef = ref(storage, currentUser.uid);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        // Handle unsuccessful uploads
        setErr(error);
        console.log();
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          if (displayName.length === 0) {
            displayName = currentUser.displayName;
          }
          await updateDoc(doc(db, "users", currentUser.uid), {
            displayName: displayName,
            photoURL: downloadURL,
          });
          await updateProfile(currentUser, {
            displayName,
            photoURL: downloadURL,
          });
          window.location.reload();
        });
      }
    );
  };
  return (
    <form onSubmit={handleUpdateProfile}>
      <label htmlFor="displayName">
        Full name:{" "}
        <input
          type="text"
          id="displayName"
          placeholder={currentUser?.displayName}
        />
      </label>

      <input style={{ display: "none" }} type="file" id="avatar" />
      <label htmlFor="avatar">
        <span>Add Avatar: </span>
        <img src={require("../assets/img/AddAvatar.png")} alt="" />
      </label>

      <label htmlFor="email">
        Email:{" "}
        <input
          type="email"
          id="email"
          value={currentUser?.email}
          disabled
          autoComplete="current-password"
        />
      </label>

      <button>Save</button>
    </form>
  );
};

export default ProfileSetting;
