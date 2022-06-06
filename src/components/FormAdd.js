import React from 'react'
import '../components/FormAdd.scss'

const FormAdd = () => {
  return (
    <div className='Container'>
        <div className='cardFormAdd'>
        <form className='formAdd'>
            <h4 style={{textAlign: 'center'}}>Add Member </h4>
            <label>Nama</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>No Telepon</label>
            <input type="text"></input>
            <label>Alamat</label>
            <input type="text"></input>
            <button className='btn btn-success' type='submit'>Add</button>
        </form>
        </div>
    </div>
  )
}

export default FormAdd