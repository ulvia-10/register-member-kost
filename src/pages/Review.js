import React, {useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../pages/Review.scss";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import {FaClipboardCheck} from 'react-icons/fa'
const Review = ({addReview}) => {

  const state = useSelector(state => state.ReviewReducer)

  const [nama, setNama] = useState('')
  const [review, setReview] = useState('')


  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      id: state.length>0 ? state[state.length -1] + 1 : 0,
      nama, 
      review
    }
    addReview(data)
    toast.success('Review successfully added! ')
  }

  return (
    <div className="container">
      <Header />
      <ToastContainer/>
      <div className="main">
        <div className="cardFormReview">
          <h4>Add Review</h4>
          <form onSubmit={submitHandler}>
            <div class="form-group">
              <label for="exampleFormControlInput1">Nama </label>
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
        <br/>
        <div>
          <h5 style={{color: 'green', borderBottomStyle: 'solid', borderBottomColor:'green',}}>Review <FaClipboardCheck/></h5>
        {state.map((review) => 
        <div className="card" key={review.id}>
            <div class="card-body" >
              <h5 class="card-title" style={{color: 'green'}}> {review.nama} </h5>
              <h6 class="card-subtitle mb-2 text-muted">member kost</h6>
              <p class="card-text"> Review: {review.review}</p>
            </div>
          </div>
            )}
        </div>
        </div>
          <br/>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
    return{
      state : state.ReviewReducer
    }
}
  const mapDispatchtoProps = (dispatch) => {
    return{
      addReview: (data) => {
        dispatch ({type: "ADD_REVIEW", payload: data})
      }
    }
  }


export default connect (mapStateToProps,mapDispatchtoProps)(Review);

