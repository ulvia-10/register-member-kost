import React from "react";
import Footer from "../components/Footer";
import "../pages/Home.scss";
import image from "../peopleinroom.jpg";
import { FaArrowRight, FaSmileBeam } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handlemoveAbout = () => {
    navigate("/About");
  };
  return (
    <div className="container">
      <div className="main">
        <div className="mainLeft">
          <h1 style={{ color: "#425BB2", fontSize: "4em" }}> Hi ~! </h1>
          <h3 style={{ color: "#424B75", fontSize: "2em" }}>
            {" "}
            Welcome! kost Bu Haji Dodo <br /> Kost Hunian Nyaman dan <br />
            Terjangkau <FaSmileBeam />
          </h3>
          <button className="buttonStart" onClick={handlemoveAbout}>
            {" "}
            Get Started <FaArrowRight />
          </button>
        </div>
        <div className="mainRight">
          <img src={image} width="700px"></img>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
