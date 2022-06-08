import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../pages/About.scss'
import {FaMapMarkedAlt, FaImages} from "react-icons/fa"

const About = () => {
  return (
    <div className='container'>
        <Header/>
        <div className='main'>
          <h3 style={{color:"#3B5417",borderBottom:"1px solid", borderBottomColor: '#3F3F1A'}}>Hola! Member Kost</h3>
          <div className='description'>
            <h6><p class="text-justify">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p></h6>
            <h6>Feature </h6>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>

            <div className='images'>
            <h5 style={{ color:'#3B5417'}}>Images <FaImages/></h5>
            {/* <img src="..." class="rounded float-left" alt="...">
            <img src="..." class="rounded float-right" alt="..."> */}
            </div>
          </div>
          <div className='maps'>
          <h5 style={{borderBottom: "1px solid", borderBottomColor:"#3F3F1A"}}>Location <FaMapMarkedAlt/></h5>
          <iframe style={{alignItems: 'center'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6072247871116!2d106.93372277126046!3d-6.183290633379594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698b18062cdfa1%3A0xc8ce876939bb179a!2sPasar%20Cakung!5e0!3m2!1sen!2sid!4v1654617515784!5m2!1sen!2sid" width="800" height="300" style={{border: '0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <br/>
        <Footer/>
    </div>
  )
}

export default About