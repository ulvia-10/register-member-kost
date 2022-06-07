import React, { useEffect } from 'react'
import '../components/TabelListMember.scss'
import { connect, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {FaTrash, FaEdit} from 'react-icons/fa'

const TabelListMember = ({ deleteMember}) => {

  const state = useSelector(state => state.MemberReducer)

  useEffect(()=>{
    console.log('state: ', state)
  }, [state])

  return (
    <div className='cardTable'>
    <table class="table">
    <thead>
      <tr>
        <th scope="col">No</th>
        <th scope="col">Nama</th>
        <th scope="col">Email</th>
        <th scope="col">No Telepon</th>
        <th scope="col">Alamat</th>
        <th scope="col">Tanggal Masuk</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody className="table-group-divider">
      {state.length > 0 ? (
           state.map ((member, id) =>(
            <tr key ={id}>
            <th scope="row">{id+1}</th>
            <td>{member.nama}</td>
            <td>{member.email}</td>
            <td>{member.noTelp}</td>
            <td>{member.alamat}</td>
            <td>{member.tanggal}</td>
            <td className='buttonHandle'><button className='btn btn-danger btn-sm' onClick={()=> deleteMember(member.id)}><FaTrash/></button>
            <Link to={`/editMember/${member.id}`}><button className='btn btn-success btn-sm'><FaEdit/></button></Link></td>
          </tr>
       ))     
      ) : (
        <h2>Empty Data</h2>
      )}
    </tbody>
  </table>
  </div>
  )
}

const mapStateToProps = (state) => {
  return{
    member: state,
  };
}

const mapDispatchtoProps = (dispatch) => {
  //making a props 
  return{
    deleteMember : (id) => {
      dispatch({type: "DELETE_MEMBER", payload: id})
    },
    
  }

}

export default connect (mapStateToProps, mapDispatchtoProps) (TabelListMember)