import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../pages/Detail.scss";
import { connect } from "react-redux";
import { fetchMemberByid } from "../actions/Member";
import { useParams } from "react-router-dom";
import moment from "moment";

const DetailMember = (props) => {
  const { member, fetchingId } = props;
  const [isLoading, setLoading] = useState("true");
  const { id: idLink } = useParams(); //ini object.karena nama id yg dikirim dari routes 

  useEffect(() => {
    const fetchMemberId = async () => {
      try {
        const response = await fetchingId(idLink);
        if (response) {
          setLoading(true);
        }
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
        } else {
          console.log(`Error`);
        }
      }
    };
    fetchMemberId();
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="card"></div>
      <div class="card bg-light mb-3" style={{ maxWidth: "18 rem" }}>
        <div
          class="card-header bg-primary"
          style={{ textAlign: "center", color: "#FFF" }}
        >
          Detail Page
        </div>
        <div class="card-body">
          <h5 class="card-title">{member?.nama}</h5>
          <p class="card-text">Email: {member?.email}</p>
          <p class="card-text">No Telepon: {member?.noTelp}</p>
          <p class="card-text">Alamat: {member?.alamat}</p>
          <p class="card-text">Tanggal Masuk: {moment(member?.tanggal).format("D MMM YYYY")}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    member: state.MemberReducer.detailMember, //camel casee ulvia!!
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingId: async (id) => dispatch(fetchMemberByid(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailMember);
