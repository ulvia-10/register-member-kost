import React from 'react'
import { Link } from 'react-router-dom'
import '../components/Header.scss'

const Header = () => {

  return (
    <div className='navigasi'>
        <ul className='navbarTop'>
           <Link to="/" style={{color: 'white', textDecoration:'none'}}><li className='navbarItem'>Home</li></Link> 
           {/* <Link to="/Login" style={{color: 'white', textDecoration:'none'}}><li className='navbarItem'>Login</li></Link>  */}
            <Link to="/Review" style={{color: 'white', textDecoration:'none'}}><li className='navbarItem'>List Member</li></Link>  
            <Link to="/AddMember" style={{color: 'white', textDecoration:'none'}}><li className='navbarItem'>Add Member</li></Link>
        </ul>
    </div>
  )
}

export default Header