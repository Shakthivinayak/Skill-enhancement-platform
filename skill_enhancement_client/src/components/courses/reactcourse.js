import React from 'react'
import bg from '../../assets/react.jpg'
import Navbar from '../navbar/navbar'


import {Link} from 'react-router-dom'

const Reactcourse = () => {
  return (
    <>
    <Navbar/>
    <div className='container'>
    <div className='row '>
        <div className=' col-lg-6 align-items justify-content-center p-5 '>
        <img className='w-100 h-75' src={bg} alt="" />

        </div>
        <div className='col-lg-6  justify-content-center'>
            <h1 className='d-flex justify-content-center align-items-center p-5'>Learn React</h1>
            <table class="table caption-top">

  <tbody>
    <tr>
      <td>Earn a certificate of completion</td>
      <td></td>
    </tr>
    <tr>
      <td>7 Projects</td>
      <td></td>
    </tr>
    <tr>
      <td>11 Lessons</td>
      <td></td>
    </tr>
    <tr>
      <td>Intermedidate</td>
      <td></td>
    </tr>
  </tbody>
</table>
        </div>
        </div>

        <div className='row justify-content-center'>
     <h1 className='d-flex justify-content-center align-items-center '>Syllabus</h1>
 
<div className="btn-group col-lg-6 col-md-9 p-3">
  <button type="button" className="btn1 btn-l dropdown-toggle " data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">JSX
  </button>
  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
    <li><a className="dropdown-item">
        <table className="table  justify-content-center">
            <thead><h6>Learn to use JSX,the basic syntax of REACT js:</h6></thead>
  <tbody>
    <tr>
      <td>Lesson</td>
      <td>Intro to JSX</td>
    </tr>
    <tr>
      <td>Article</td>
      <td>React:The Virtual DOM</td>
    </tr>
    <tr>
      <td>Lesson</td>
      <td>Advanced JSX</td>
    </tr>
    <tr>
      <td>Project</td>
      <td>Animal Fun Facts</td>
    </tr>
    <tr>
      <td>Quiz</td>
      <td>JSX</td>
    </tr>
  </tbody>
</table></a></li> 
<li ><Link to={'/VideoJsx'}><button className='btn btn-outline-primary'>Get started</button></Link></li>
  </ul>
  </div>
        


        <div className="btn-group col-lg-6 col-md-9 p-3">
  <button type="button" className="btn1 btn-l dropdown-toggle " data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">React Components
  </button>
  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
    <li><a className="dropdown-item">
        <table className="table  justify-content-center">
            <thead><h6>Learn to make React Components.</h6></thead>
  <tbody>
    <tr>
      <td>Lesson</td>
      <td>Components and</td>
      <td></td>
    </tr>
    <tr>
      <td>Article</td>
      <td>React:The Virtual DOM</td>
      <td></td>
    </tr>
    <tr>
      <td>Lesson</td>
      <td>Advanced JSX</td>
      <td></td>
    </tr>
    <tr>
      <td>Project</td>
      <td>Animal Fun Facts</td>
      <td></td>
    </tr>
    <tr>
      <td>Quiz</td>
      <td>JSX</td>
      <td></td>
    </tr>
  </tbody>
</table></a></li> 
<li ><Link to={'/ReactComp'}><button className='btn btn-outline-primary'>Get started</button></Link></li>
  </ul>
  </div>
  </div>


  
<div className='row justify-content-center'>
  <div className="btn-group col-lg-6 col-md-9 p-3">
  <button type="button" className="btn1 btn-l dropdown-toggle " data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">Components Interacting
  </button>
  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
    <li><a className="dropdown-item">
        <table className="table  justify-content-center">
            <thead><h6>Learn to use JSX,the basic syntax of REACT js:</h6></thead>
  <tbody>
    <tr>
      <td>Lesson</td>
      <td>Intro to JSX</td>
      <td></td>
    </tr>
    <tr>
      <td>Article</td>
      <td>React:The Virtual DOM</td>
    </tr>
    <tr>
      <td>Lesson</td>
      <td>Advanced JSX</td>
    </tr>
    <tr>
      <td>Project</td>
      <td>Animal Fun Facts</td>
    </tr>
    <tr>
      <td>Quiz</td>
      <td>JSX</td>
    </tr>
  </tbody>
</table></a></li> 
<li ><Link to={'/ComponentsInter'}><button className='btn btn-outline-primary'>Get started</button></Link></li>
  </ul>
  </div>


  

  <div className="btn-group col-lg-6 col-md-9 p-3">
  <button type="button" className="btn1 btn-l dropdown-toggle " data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">Hooks
  </button>
  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
    <li><a className="dropdown-item">

    <table class="table table-hover">
    <thead><h6>Learn to use JSX,the basic syntax of REACT js:</h6></thead>
  <tbody>
    <tr>
      <td>Lesson</td>
      <td>Intro to JSX</td>
    </tr>
    <tr>
      <td>Article</td>
      <td>React:The Virtual DOM</td>
    </tr>
    <tr>
      <td>Lesson</td>
      <td>Advanced JSX</td>
    </tr>
    <tr>
      <td>Project</td>
      <td>Animal Fun Facts</td>
    </tr>
    <tr>
      <td>Quiz</td>
      <td>JSX</td>
    </tr>
  </tbody>
</table>

</a>
</li> 
<li ><Link to={'/VideoHooks'}><button className='btn btn-outline-primary'>Get started</button></Link></li>
  </ul>
  </div>
  </div>

<div className='row '>
<h4>Jsx</h4>
  <div className="progress">
  <div className="progress-bar  w-25  " role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div>

</div>

<div className='row '>
<h4>React Component</h4>
  <div className="progress">
  <div className="progress-bar  w-75  " role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
</div>

</div>

<div className='row '>
<h4>Components Interaction</h4>
  <div className="progress">
  <div className="progress-bar  w-50  " role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
</div>

</div>

<div className='row '>
<h4>  Hooks</h4>
  <div className="progress">
  <div className="progress-bar  w-100 " role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">100%</div>
</div>

</div>
        </div>
    </>
  )
}

export default Reactcourse