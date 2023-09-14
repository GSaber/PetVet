import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Header from "../components/header";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <Header />
    </>
  );
};

export default Home;
