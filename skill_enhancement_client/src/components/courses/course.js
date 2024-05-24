import React, { useEffect, useState } from 'react'
import './course.css'   
import '../../components/contact/contact.css'
import '../../components/navbar/navbar.css'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Course = () => {

  const [data, setData] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:8000/course")
    .then((res)=>{
      console.log(res)
      setData(res.data.user)
    })

  },[])

  let a = data.map((e)=>{
    return (

<div className="card col-4">
  <img src={e.Image} className="card-img-top" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">{e.Name}</h5>
      <p className="card-text">{e.Description}</p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Duration: {e.Duration}</li>
      <li className="list-group-item">Rating :{e.Rating}<i className="bi bi-star"></i></li>
      <li className="list-group-item">{e.Item}</li>
    </ul>
    <div className="card-body">
    <Link to={e.Path} ><button className="btn btn-outline-primary " type="submit">Enroll now</button></Link>
    </div>
    </div>
    
  
    )
  })
  return (
    <div  id="course">
     <h1 className='d-flex justify-content-center align-items-center p-3'>Courses to do</h1>
    <div className='row d-flex justify-content-center align-items-center'>
      {a}
</div>
</div> 
  )
}

export default Course