import React from 'react'
import FormAdd from '../components/FormAdd'
import Header from '../components/Header'
import Footer from '../components/Footer'

const AddMember = () => {
  return (
    <div className='container'>
        <Header/>
        <div className='main'><FormAdd/></div>
        <Footer/>
    </div>
  )
}

export default AddMember