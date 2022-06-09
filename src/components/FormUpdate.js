import React, { useEffect } from "react";
import Footer from "./Footer";
import { connect, useSelector } from "react-redux";
import { useState } from "react";
import "../components/FormUpdate.scss";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { memberAxios } from "../api/data";

const FormUpdate = ({ editMember }) => {
  const state = useSelector((state) => state.MemberReducer);

  useEffect(() => {
    console.log("state: ", state);
  }, [state]);

  //getting id
  const { id } = useParams();
  const navigate = useNavigate();

  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [noTelp, setnoTelp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [tanggal, setTanggal] = useState("");

  //find data
  const currentContact = state.find((member) => member.id === parseInt(id));
  console.log(currentContact)
  console.log(state)
  //trigger current contact
  useEffect(() => {
    setNama(currentContact.nama);
    setEmail(currentContact.email);
    setnoTelp(currentContact.noTelp);
    setAlamat(currentContact.alamat);
    setTanggal(currentContact.tanggal);
  }, [currentContact]);

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    const checkemailexist = state.filter((member) =>
      member.email === email && member.id !== currentContact.id ? member : null
    );

    const checknoTelpexist = state.filter((member) =>
      member.noTelp === noTelp && member.id !== currentContact.id
        ? member
        : null
    );

    if (checkemailexist.length > 0) {
      return toast.warning("This email is already exist");
    }

    if (checknoTelpexist.length > 0) {
      return toast.warning("This no Telepon is already exist");
    }

    if (!nama || !email || !noTelp || !alamat || !tanggal) {
      return toast.success("please insert all required! ");
    }

    const data = {
      id: currentContact.id,
      nama,
      email,
      noTelp,
      alamat,
      tanggal,
    };

    try {
      const response = await memberAxios.put(`/member/${id}`, data);
      editMember(response);
      console.log(response);
      toast.success("Data berhasil di Update");
      navigate("/ListMember");
    } catch {
      console.log(`Error`);
    }

 
  };

  return (
    <div className="container">
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
              style={{
                padding: "5px",
                width: "80px",
                display: "flex",
                justifyContent: "center",
                marginLeft: "40px",
              }}
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
