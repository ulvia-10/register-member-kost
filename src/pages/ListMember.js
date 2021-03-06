import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FaPlusCircle } from "react-icons/fa";
import TabelListMember from "../components/TabelListMember";
import { ToastContainer } from "react-toastify"; 
import "../pages/ListMember.scss";

const ListMember = () => {

  const navigate = useNavigate()
  const moveAddMember = () => {
    navigate('/AddMember')
  }

  return (
    <div>
      <Header/>
      <ToastContainer />
      <div className="isiContent">
          <h2>List Member Kost</h2>
          <button className="btn btn-primary btn-sm" onClick={moveAddMember}> <FaPlusCircle/> Add Member</button>
        <TabelListMember/>
      </div>
      <Footer/>

    </div>
  );
};

export default ListMember;
