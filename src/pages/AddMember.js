import React from "react";
import FormAdd from "../components/FormAdd";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../pages/AddMember.scss";
import { ToastContainer } from "react-toastify";

const AddMember = () => {
  return (
    <div>
      <Header />
      <ToastContainer />
      <div className="main">
        <FormAdd />
      </div>
      <Footer />
    </div>
  );
};

export default AddMember;
