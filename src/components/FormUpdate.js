import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { connect } from "react-redux";
import { useState } from "react";
import "../components/FormUpdate.scss"
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const FormUpdate = ({ member, editMember }) => {

  //getting id 
  const {id} = useParams();
  const navigate = useNavigate()
  
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [noTelp, setnoTelp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [tanggal, setTanggal] = useState("");

  //find data
  const currentContact = member.find (
    (member)=>
    member.id === parseInt(id)
  );
  
  //trigger current contact 
  useEffect (()=>{
    setNama(currentContact.nama);
    setEmail(currentContact.email);
    setnoTelp(currentContact.noTelp);
    setAlamat(currentContact.alamat);
    setTanggal(currentContact.tanggal)
  },[currentContact])

  const handleSubmitUpdate = (e) =>{
    e.preventDefault();

    const checkemailexist = member.filter((member)=>
        member.email === email && member.id !== currentContact.id
        ? member : null
    )

    if(checkemailexist.length > 0 ){
      return toast.warning('This email is already exist')
    }
    const data = {
        id: currentContact.id,
        nama,
        email,
        noTelp,
        alamat,
        tanggal
      };


    editMember(data)
    toast.success("Data berhasil di Update")
    navigate ('/ListMember')
  }
  


  
  return (
    <div className="container">
      <Header />
      <div className="main">
        <div className="cardContainerUpdate">
          <form className="formAdd" onSubmit={handleSubmitUpdate}>
            <h4 style={{ textAlign: "center" }}>Edit Member </h4>
            <label>Nama</label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            ></input>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label>No Telepon</label>
            <input
              type="text"
              value={noTelp}
              onChange={(e) => setnoTelp(e.target.value)}
            ></input>
            <label>Alamat</label>
            <input
              type="text"
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
            ></input>
            <label>Tanggal Masuk</label>
            <input
              type="date"
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
            ></input>
            <br />
            <button
              style={{ padding: "2px" }}
              className="btn btn-success"
              type="submit"
            >
              Edit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    member: state,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    editMember: (data) => {
      dispatch({ type: "UPDATE_MEMBER", payload: data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(FormUpdate);
