import React from 'react'
import '../../components/navbar/navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'
import Navbar from '../navbar/navbar'
import Course from '../courses/course'
import Certificates from '../certificates/certificates'
import Contact from '../contact/contact'
import Process from '../Process/Process'

const Home = () => {
  return (
    <div id="home" >
      <Navbar/>
      <div className='container'>


    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
  <div className="carousel-item" data-bs-interval="2000">
      <img src="https://trainings.internshala.com/blog/wp-content/uploads/2023/12/Best-Courses-to-Pursue-for-Your-Future-1.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item active" data-bs-interval="2000">
      <img src="https://www.sandipuniversity.edu.in/placements/images/header/Employability-Enhancement-Program.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://media.cakeresume.com/image/upload/v1699199557/ulmeel94gmlxwdaeyypr.jpg" class="d-block w-100" alt="..."/>
    </div>
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<Course/>
<Certificates/>
<Process/>
<Contact/>
</div>
</div>
    
  )
}

export default Home