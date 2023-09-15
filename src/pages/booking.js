import React, { useEffect, useState } from "react";
import Header from "../components/header";
import "../assets/css/booking.scss";
import {
  FaDog,
  FaCat,
  FaPaw,
  FaKiwiBird,
  FaFish,
  FaHorse,
  FaCarrot,
  FaBacteria,
  FaPoop,
  FaSyringe,
} from "react-icons/fa";
import { BsEyeFill, BsFillHeartPulseFill } from "react-icons/bs";
import {
  GiSandSnake,
  GiRabbit,
  GiMonkey,
  GiTap,
  GiChicken,
  GiSunCloud,
  GiPoisonBottle,
  GiWhistle,
  GiBackwardTime,
} from "react-icons/gi";
import { AiFillBug } from "react-icons/ai";
import { CiBandage } from "react-icons/ci";
import { FaUserDoctor } from "react-icons/fa6";
const Booking = () => {
  const [showMore, setShowMore] = useState(3);
  const [shoMoreConcerns, setShoMoreConcerns] = useState(10);
  const [petType, setPetType] = useState("");
  const [petConcern, setPetConcern] = useState([]);
  const [pets, setPets] = useState([
    {
      name: "dog",
      icon: <FaDog style={{ height: "25px", width: "25px" }} />,
    },
    {
      name: "cat",
      icon: <FaCat style={{ height: "25px", width: "25px" }} />,
    },
    {
      name: "Show more",
      icon: <FaPaw style={{ height: "25px", width: "25px" }} />,
    },
    {
      name: "Bird",
      icon: <FaKiwiBird style={{ height: "25px", width: "25px" }} />,
    },
    {
      name: "Farm Animal",
      icon: <GiChicken style={{ height: "25px", width: "25px" }} />,
    },
    {
      name: "Horse",
      icon: <FaHorse style={{ height: "25px", width: "25px" }} />,
    },
    {
      name: "Reptile / Amphibian",
      icon: <GiSandSnake style={{ height: "25px", width: "25px" }} />,
    },
    {
      name: "Small Mammal",
      icon: <GiRabbit style={{ height: "25px", width: "25px" }} />,
    },
    {
      name: "Fish",
      icon: <FaFish style={{ height: "25px", width: "25px" }} />,
    },
    {
      name: "Other / Exotic",
      icon: <GiMonkey style={{ height: "25px", width: "25px" }} />,
    },
  ]);
  const [concerns, setconcerns] = useState([
    {
      concern: "Nutrition",
      icon: <FaCarrot style={{ height: "25px", width: "25px" }} />,
    },
    {
      concern: "Skin and ear infections",
      icon: <FaBacteria style={{ height: "25px", width: "25px" }} />,
    },
    {
      concern: "Eye issues",
      icon: <BsEyeFill style={{ height: "25px", width: "25px" }} />,
    },
    {
      concern: "Diarrhea and vomiting",
      icon: <FaPoop style={{ height: "25px", width: "25px" }} />,
    },
    {
      concern: "Urinary problems",
      icon: <GiTap style={{ height: "25px", width: "25px" }} />,
    },
    {
      concern: "Mobility concerns",
      icon: <FaSyringe style={{ height: "25px", width: "25px" }} />,
    },
    {
      concern: "Flea and tick",
      icon: <AiFillBug style={{ height: "25px", width: "25px" }} />,
    },
    {
      concern: "Trauma and injury triage",
      icon: <CiBandage style={{ height: "25px", width: "25px" }} />,
    },
    {
      concern: "Behaviour consults",
      icon: <GiSunCloud style={{ height: "25px", width: "25px" }} />,
    },
    {
      concern: "Preventative wellness",
      icon: <BsFillHeartPulseFill style={{ height: "25px", width: "25px" }} />,
    },
    {
      concern: "Toxin ingestion",
      icon: <GiPoisonBottle style={{ height: "25px", width: "25px" }} />,
    },
    {
      concern: "Training and obedience",
      icon: <GiWhistle style={{ height: "25px", width: "25px" }} />,
    },
    {
      concern: "Other",
      icon: <FaUserDoctor style={{ height: "25px", width: "25px" }} />,
    },
  ]);
  const handleSelect = (x) => {
    if (x === 2) {
      setPets((current) => current.filter((pet) => pet.name !== "Show more"));

      setShowMore(pets.length);
    } else {
      setPetType(pets[x].name);
    }
  };
  const handleSelectConcern = (concern) => {
    if (petConcern.includes(concern)) {
      setPetConcern((current) => current.filter((x) => x !== concern));
    } else {
      setPetConcern([...petConcern, concern]);
    }
  };
  console.log(petConcern);
  return (
    <>
      <Header />
      <div className="booking-container">
        <nav>navigation</nav>
        {petType ? (
          <div>
            <h1>What are your concerns?</h1>
            <div className="concerns">
              {concerns.slice(0, shoMoreConcerns).map((concern, x) => (
                <div
                  key={x}
                  className={`concern ${
                    petConcern.includes(concern.concern) ? "active" : ""
                  }`}
                  onClick={() => handleSelectConcern(concern.concern)}
                >
                  {concern.icon}
                  <p>{concern.concern}</p>
                </div>
              ))}
            </div>
            <button>Find vets</button>
            <div className="start-over " onClick={() => setPetType("")}>
              <GiBackwardTime
                style={{ color: "black", height: "20px", width: "20px" }}
              />
              <span>Start Over</span>
            </div>
          </div>
        ) : (
          <div>
            <h1>Who is the appointment for?</h1>
            <div className="pets">
              {pets.slice(0, showMore).map((pet, x) => (
                <div key={x} className="pet" onClick={() => handleSelect(x)}>
                  {pet.icon}
                  <p>{pet.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Booking;
