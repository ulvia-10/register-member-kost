import React, { useEffect, useState} from 'react'
import '../components/TabelListMember.scss'
import { connect, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {FaTrash, FaEdit} from 'react-icons/fa'
import {memberAxios} from  "../api/data"


const TabelListMember = ({ deleteMember}) => {

  const state = useSelector(state => state.MemberReducer)
  const [anggota, setAnggota] = useState('')
  const [isRefresh, setIsRefresh] = useState(true)
  const setRefresh = (status) => {
    setIsRefresh(status)
  }

  useEffect(()=>{
    const fetchMember = async () => {
      try{  
        const response = await memberAxios.get('/member')
        setAnggota(response.data)
      }catch(err){
        if(err.response){
          console.log(err.response.data)
        }else{
          console.log(`Error:${err}`)
        }
      }
    }
    fetchMember()
    console.log(fetchMember)
  },[]) 

    const handleDelete = async (id) => {
      try{
        if(isRefresh){
        const response = await memberAxios.delete(`/member/${id}`)
        .then(()=>{
          setRefresh(true)
        })
        deleteMember(response)
      }
      } catch (err) {
        console.log(`Error : ${err.message}`)
      }
    }

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
      {anggota.length > 0 ? (
           anggota.map ((member, id) =>(
            <tr key ={id}>
            <th scope="row">{id+1}</th>
            <td>{member.nama}</td>
            <td>{member.email}</td>
            <td>{member.noTelp}</td>
            <td>{member.alamat}</td>
            <td>{member.tanggal}</td>
            <td className='buttonHandle'><button className='btn btn-danger btn-sm' onClick={()=>handleDelete(member.id)}><FaTrash/></button>
          <Link to={`/editMember/${member.id}`}><button className='btn btn-success btn-sm'><FaEdit/></button></Link></td>
            {console.log(member.id)}
          </tr>
       ))     
      ) : (
        <h6 style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>Oops! No Data Here !</h6>
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