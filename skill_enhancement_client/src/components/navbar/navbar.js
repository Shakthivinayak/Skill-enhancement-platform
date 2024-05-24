import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'
import{HashLink} from 'react-router-hash-link'




const Navbar = () => {
  return (
    <div className='container'><nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <Link to='/home' className="nav-link"><img src={logo} alt="" className='logo' />
</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center " id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <HashLink to={'/home#home'} className="nav-link">Home</HashLink>
                </li>
                <li className="nav-item">
                <HashLink to={'/home#course' }className="nav-link">Courses</HashLink>
                </li>
                <li className="nav-item">
                <HashLink to={'/home#certificates'}className="nav-link">Certifications</HashLink>
                </li>
                <li className="nav-item">
                <Link to={'/login'} className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                <Link to={'/signup'} className="nav-link">Signup</Link>
                </li>
            </ul>
            <div className='navbar-collapse justify-content-end'>
       <HashLink to='/home#contact' > <button className="btn btn-outline-success " type="submit">Contact Us</button></HashLink>
       </div>
        </div>
    </div>
</nav>

 
    </div>
  )
}

export default Navbar