import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../pages/Review.scss";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { FaClipboardCheck } from "react-icons/fa";
import { memberAxios } from "../api/data";
import { Link, useNavigate } from "react-router-dom";
import { fetchReview, fetchDeleteReview } from "../actions/Review";

const Review = (props) => {
  const { addReview, deleteReview, listReview, dataReview } = props;
  const state = useSelector((state) => state.ReviewReducer);
  const [nama, setNama] = useState("");
  const [review, setReview] = useState("");
  const [datareview, setDataReview] = useState("");
  const [isLoading, setIsLoading] = useState("true");
  const navigate = useNavigate('/review')

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await listReview();
        if (response) {
          setIsLoading(false);
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
     nama, 
     review,
      id: state.length > 0 ? state[state.length - 1] + 1 : 0,
    };

    try {
      const response = await memberAxios.post("/review", data);
      window.location.reload();
      addReview(response);
    } catch (err) {
      console.err(err);
    }
    toast.success("Review successfully added! ");
  };

  //delete review
  const ondeleteHandler = async (id) => {
    try {
      const response = await deleteReview(id);
      window.location.reload();
      if (response) {
        setIsLoading(false);
      }
    } catch (err) {
      console.err(err);
    }
  };

  return (
    <>
      <div className="container">
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
          {datareview === 0 ? (
            <h2>Loading...</h2>
          ) : (
            <div>
              <h5 style={{ color: "green", borderBottomStyle: "solid" }}>
                Review <FaClipboardCheck /> <br />
              </h5>
              {dataReview?.length > 0 ? (
                dataReview?.map((review) => (
                  <div className="card" key={review?.id}>
                    <div class="card-body">
                      <div className="buttonaction">
                        <div
                          onClick={() => {
                            ondeleteHandler(review?.id);
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
                        <Link to={`/EditReview/${review.id}`}>
                          <div
                            className="text-success sm"
                            style={{
                              display: "flex",
                              justifyContent: "flex-end",
                              cursor: "pointer",
                              textDecoration: "none",
                            }}
                          >
                            Edit
                          </div>
                        </Link>
                      </div>
                      <h5 class="card-title" style={{ color: "green" }}>
                        {review?.nama}
                      </h5>
                      <h6 class="card-subtitle mb-2 text-muted">member kost</h6>
                      <p class="card-text"> Review: {review?.review}</p>
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
          )}
        </div>

        <br />
        <Footer />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    dataReview: state.ReviewReducer?.listReview,
  };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    addReview: (data) => {
      dispatch({ type: "ADD_REVIEW", payload: data });
    },
    deleteReview: (id) => {
      dispatch(fetchDeleteReview(id));
    },
    listReview: async () => dispatch(fetchReview()),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(Review);
