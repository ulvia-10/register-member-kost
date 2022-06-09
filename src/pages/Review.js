import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../pages/Review.scss";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { FaClipboardCheck } from "react-icons/fa";
import { memberAxios } from "../api/data";

const Review = ({ addReview, deleteReview }) => {
  const state = useSelector((state) => state.ReviewReducer);
  const [refresh, isRefresh] = useState("true");
  const [nama, setNama] = useState("");
  const [review, setReview] = useState("");
  const [datareview, setDataReview] = useState("");

  useEffect(() => {
    const fetchReview = async () => {
      try {
        if (refresh) {
          const response = await memberAxios.get("/review");
          setDataReview(response.data);
        } else {
          isRefresh(true);
        }
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
        } else {
          console.log(`Error : ${err.message}`);
        }
      }
    };
    fetchReview();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      id: state.length > 0 ? state[state.length - 1] + 1 : 0,
      nama,
      review,
    };

    try {
      const response = await memberAxios.post("/review", data);
      addReview(response);
      toast.success("Review successfully added! ");
    } catch (err) {
      console.err(err);
    }
  };

  //delete review
  const ondeleteHandler = async (id) => {
    try {
      const response = await memberAxios.delete(`/review/${id}`);
      deleteReview(response);
    } catch (err) {
      console.err(err);
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <Header />
      <div className="main">
        <div className="cardFormReview">
          <h4>Add Review</h4>
          <form onSubmit={submitHandler}>
            <div class="form-group">
              <label for="exampleFormControlInput1">Nama</label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="masukkan nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              ></input>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Review</label>
              <textarea
                value={review}
                class="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Masukkan review"
                rows="3"
                onChange={(e) => setReview(e.target.value)}
              ></textarea>
            </div>
            <br />
            <button type="submit" class="btn btn-success">
              Submit
            </button>
          </form>
        </div>
        <br />
        <div>
          <h5 style={{ color: "green", borderBottomStyle: "solid" }}>
            Review <FaClipboardCheck /> <br />
          </h5>
          {datareview.length > 0 ? (
            datareview.map((review) => (
              <div className="card" key={review.id}>
                <div class="card-body">
                  <div className="buttonaction">
                    <div
                      onClick={() => {
                        ondeleteHandler(review.id);
                      }}
                      className="text-primary sm"
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </div>
                    {/* <div onClick={()=>{editReview(review.id)}} className="text-danger sm" style={{display:'flex', justifyContent: 'flex-end', cursor: 'pointer'}}>Edit</div> */}
                  </div>
                  <h5 class="card-title" style={{ color: "green" }}>
                    {review.nama}
                  </h5>
                  <h6 class="card-subtitle mb-2 text-muted">member kost</h6>
                  <p class="card-text"> Review: {review.review}</p>
                </div>
              </div>
            ))
          ) : (
            <div
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Nothing Review Here!
            </div>
          )}
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.ReviewReducer,
  };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    addReview: (data) => {
      dispatch({ type: "ADD_REVIEW", payload: data });
    },
    deleteReview: (id) => {
      dispatch({ type: "DELETE_REVIEW", payload: id });
    },
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(Review);
