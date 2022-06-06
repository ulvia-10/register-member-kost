import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../pages/Home.scss";
import image from "../peopleinroom.jpg";
import {FaArrowRight} from 'react-icons/fa'

const Home = () => {
  return (
    <div className="container">
      <Header />
      <div className="main">
        <div className="mainLeft">
          <h1 style={{color: '#425BB2', fontSize:'4em'}}> Hi ~!  </h1>
          <h3 style={{color: '#424B75', fontSize: '2em'}}> Welcome! kost Bu Haji Dodo</h3>
          <button className="buttonStart"> Get Started <FaArrowRight/></button>
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
