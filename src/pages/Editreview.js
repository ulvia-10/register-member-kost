import React from 'react'
import { FaEdit, FaPlusCircle } from 'react-icons/fa'
import Footer from '../components/Footer'
import '../pages/EditReview.scss'
import Header from '../components/Header'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { memberAxios } from "../api/data";
import { connect } from 'react-redux/es/exports'

const Editreview = ({Editreview}) => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [review, setReview] = useState({
        nama: "",
        review:""
      })
    console.log(review)

    useEffect(() => {
        const fetchReviewById = async () => {
          try {
            let response = await memberAxios.get(`/review/${id}`);
            response = response.data
            setReview({
              ...review,
              nama: response.nama,
              review: response.review,
            });
            console.log("member", review)
          } catch (err) {
            console.err(err);
            console.log(err.message)
          }
        };
        fetchReviewById();
      }, []);


      const onchange = (key) => (e) =>{
        setReview ((prevState) =>{ //key dari review
          return{
            ...prevState, 
            [key]: e.target.value
          }
        })
      }

      const handleEditSubmit = async (e) => {
        e.preventDefault();
        const data = {
          ...review,
          id: id
        };

        try{
          const response = await memberAxios.put(`/review/${id}`, data);
          Editreview(response);
          window.location.reload()
        } catch (err) {
          console.log(err)
        }
        navigate("/Review")
        
      }

  return (
    <div>
    <Header/>
        <div className='cardFormReview'>
        <form onSubmit={handleEditSubmit}>
            <h5 style={{textAlign:'center'}}>Edit Review <FaEdit/></h5>
            <div class="form-group">
              <label for="exampleFormControlInput1">Nama</label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="masukkan nama"
                value={review.nama}
                onChange={onchange("nama")}
              ></input>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Review</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Masukkan review"
                rows="3"
                value={review.review}
                onChange={onchange("review")}
              ></textarea>
            </div>
            <br />
            <button type="submit" class="btn btn-primary" style={{marginLeft: '20px'}}>
              Submit <FaPlusCircle/>
            </button>
          </form>
        </div>
        <Footer/>
   </div>
  )
}

const mapDispatchtoProps = (dispatch) => {
  return{
    Editreview : (data) =>{  dispatch({type:"UPDATE_REVIEW", payload: data})
    }
  }
}
export default connect (null, mapDispatchtoProps)(Editreview)