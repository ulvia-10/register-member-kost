import React from "react";
import "../components/FormAdd.scss";
import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import {FaPlusCircle} from 'react-icons/fa'

const FormAdd = ({ member, addMember }) => {

  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [noTelp, setnoTelp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [tanggal, setTanggal] = useState("")

  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = {
        id: member.length > 0 ? member[member.length - 1] + 1 : 0,
        nama,
        email,
        noTelp,
        alamat,
        tanggal
      };

      addMember(data);
      navigate('/ListMember')
      toast.success("Data berhasil ditambah")
      
  }

  return (
    <div className="Container">
      <div className="cardFormAdd">
        <form className="formAdd" onSubmit={handleSubmit}>
          <h4 style={{ textAlign: 'center'}}>Add Member </h4>
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
          <br/>
          <button style={{padding: '2px'}} className="btn btn-success" type="submit"> Add  <FaPlusCircle/></button>
        </form>
      </div>
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
    addMember: (data) => {
      dispatch({ type: "ADD_MEMBER", payload: data });
    },
  };
};
export default connect(mapStateToProps, mapDispatchtoProps)(FormAdd);

//    const [state, setState] = useState({
//     nama: "",
//     email:"",
//     noTelp: "",
//     alamat: "",
//    })

//    React.useEffect(() => {
//     console.log(state);
//   }, [state]);

//   const onchange = (key) => (e) => {
//     setState((prevState) => {
//       return {
//         ...prevState,
//         [e.target.value]: e.target.value,
//       };
//     });
//   return;
// }
