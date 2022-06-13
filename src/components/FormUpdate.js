import React, { useEffect } from "react";
import Footer from "./Footer";
import { connect, useSelector } from "react-redux";
import { useState } from "react";
import "../components/FormUpdate.scss";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { memberAxios } from "../api/data";

const FormUpdate = ({ editMember}) => {

  const { id } = useParams();
  const navigate = useNavigate();
  const state = useSelector((state) => state.MemberReducer);

  const [member, setMember] = useState({
    nama: "",
    email:"",
    noTelp:"",
    alamat: "", 
    tanggal:""
  })

  useEffect(() => {
    const fetchMemberById = async () => {
      try {
        let response = await memberAxios.get(`/member/${id}`);
        response = response.data
        setMember({
          ...member,
          nama: response.nama,
          email: response.email,
          noTelp: response.noTelp, 
          alamat: response.alamat, 
          tanggal: response.tanggal
        });
        console.log("member", member)
      } catch (err) {
        console.err(err);
      }
    };
    fetchMemberById();
  }, []);

  useEffect(() => {
    console.log("state: ", state);
  }, [state]);

  //getting id
 //keynya itu ambil dari member, tergantung dari set member nyaa 
  const onchange = (key)=>(e) => {
    setMember((prevState) => {
      return {
        ...prevState,
        [key]: e.target.value, //[e.target.nama] : e.target.value  //e.target.value : e.target.value  key: itu dari value 
      };
    });
  return;
};


  // console.log(member.data.nama)
  // find data

  // const members = member.data
  // const currentContact = members.find((member) => member.id === parseInt(id));
  // console.log(currentContact)

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    // const checkemailexist = statefilter((member) =>
    //   member.email === email && member.id !== currentContact.id ? member : null
    // );

    // const checknoTelpexist = state.filter((member) =>
    //   member.noTelp === noTelp && member.id !== currentContact.id
    //     ? member
    //     : null
    // );

    // if (checkemailexist.length > 0) {
    //   return toast.warning("This email is already exist");
    // }

    // if (checknoTelpexist.length > 0) {
    //   return toast.warning("This no Telepon is already exist");
    // }

    // if (!nama || !email || !noTelp || !alamat || !tanggal) {
    //   return toast.success("please insert all required! ");
    // }

    const data = {
      ...member,
      id: id
    };

    try {
      const response = await memberAxios.put(`/member/${id}`, data);
      editMember(response);
    } catch (err) {
      if (err.response) {
        console.log(`Error`);
        console.log(err.response.data);
        console.log(err.response.headers);
        console.log(err.response.status);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
    toast.success("Data berhasil di Update");
    navigate("/ListMember");
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
              nama="nama"
              value={member?.nama}
              onChange={onchange("nama")}
            ></input>
            <label>Email</label>
            <input
              type="email"
              nama="email"
              value={member?.email}
              onChange={onchange("email")}
            ></input>
            <label>No Telepon</label>
            <input
              type="text"
              value={member?.noTelp}
              nama="noTelp"
              onChange={onchange("noTelp")}
            ></input>
            <label>Alamat</label>
            <input
              type="text"
              nama="alamat"
              value={member?.alamat}
              onChange={onchange("alamat")}
            ></input>
            <label>Tanggal Masuk</label>
            <input
              type="date"
              nama="tanggal"
              value={member?.tanggal}
              onChange={onchange("tanggal")}
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
    member: state.MemberReducer,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    editMember: (data) => { dispatch({ type: "UPDATE_MEMBER", payload: data }); },
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(FormUpdate);
