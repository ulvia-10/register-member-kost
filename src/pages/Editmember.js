import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FormUpdate from '../components/FormUpdate'

const Editmember = () => {
  return (
    <div className='Container'>
      <Header/>
      <div className='main'> 
      <FormUpdate/>
      </div>
      <Footer/>
    </div>
  )
}

export default Editmember