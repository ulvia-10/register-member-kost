import React from 'react'
import { Link } from 'react-router-dom'
import '../components/TabelListMember.scss'

const TabelListMember = () => {
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
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody class="table-group-divider">
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>3927372192</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td><span className='btn btn-danger'>Delete</span>
        <span className='btn btn-success'>Update</span></td>
      </tr>
    </tbody>
  </table>
  </div>
  )
}


export default TabelListMember