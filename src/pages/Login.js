import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../pages/Login.scss";
import { FaAngleDoubleRight } from "react-icons/fa";

const Login = () => {
  return (
    <div className="container">
      <Header />
      <div className="cardContainer">
        <form className="formLogin">
          <h2 style={{ textAlign: "center" }}>LOGIN PAGE</h2>
          <label>Username</label>
          <input type="text"></input>
          <label>Password</label>
          <input type="password"></input>
          <button type="submit">Login {FaAngleDoubleRight} </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
