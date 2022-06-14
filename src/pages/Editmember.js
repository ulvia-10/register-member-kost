import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FormUpdate from '../components/FormUpdate'
import {ToastContainer} from 'react-toastify'

const Editmember = () => {
  return (
    <div>
      <Header/>
      <ToastContainer/>
      <FormUpdate/>
      <Footer/>
    </div>
  )
}

export default Editmember