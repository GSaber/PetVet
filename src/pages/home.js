import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Header from "../components/header";
import "../assets/css/home.scss";
const Home = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <Header />
      <div className="homepage">
        <div className="container">
          <div>
            <h1>
              Welcome "{currentUser?.displayName}" Make an appointment with your
              Veterinary Rapidly!
            </h1>
            <p>
              Select your doctor, choose the date and time of your appointment
              and receive your confirmation text/email. It's that simple only
              that !
            </p>
          </div>
          <img src={require("../assets/img/imghome.jpg")} />
        </div>
      </div>
    </>
  );
};

export default Home;
