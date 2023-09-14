import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import "../assets/css/header.scss";
import { IoMdArrowDropdown } from "react-icons/io";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="navbar">
      <h3>PetVet</h3>
      <nav>
        <a href="/">Home</a>

        <div className="dropdown">
          <button className="dropbtn">
            <div className="user">
              <span>{currentUser?.displayName}</span>
              <img src={currentUser?.photoURL} alt="" />
              <IoMdArrowDropdown />
            </div>
          </button>
          <div className="dropdown-content">
            <Link to={"/profile"}>Profile</Link>
            <a href="#">appointments</a>
            <button className="logout" onClick={handleSignOut}>
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
