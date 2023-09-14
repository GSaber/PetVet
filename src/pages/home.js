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
              Welcome {currentUser?.displayName} Prenez rapidement un
              rendez-vous avec votre médecin !
            </h1>
            <p>
              Sélectionnez votre médecin, choisissez la date et l'heure de votre
              rdv et recevez votre sms/mail de confirmation. C’est aussi simple
              que ça !
            </p>
          </div>
          <img src={require("../assets/img/imghome.jpg")} />
        </div>
      </div>
    </>
  );
};

export default Home;
