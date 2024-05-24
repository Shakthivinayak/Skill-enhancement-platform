import React ,{useState}from 'react'
import '../../components/signup/signup.css'
import '../../components/navbar/navbar.css'
import logo from '../../assets/68af98120706677.60b715b71f143.jpg'
import {Link, useNavigate} from 'react-router-dom'
import Navbar from '../navbar/navbar'
import axios from 'axios'
import Login from '../login/login'

const Signup = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Role, setRole] = useState("");

  const nav = useNavigate()


  function handleSubmit(e){
    e.preventDefault()

    axios.post('http://localhost:8000/auth/signup',{Name,Email,Password,Role})
    .then(res =>{
        console.log("credentials :"+res);
        if(res.data.msg === "added"){
            alert("signed up")
            nav('/login')
        }
        else if(res.data.msg === "exist"){
            alert("Email id already exist")
        }
    })

  }

  return (
    <div id='signup'>     
         <h1 className="text-center">Sign up</h1>
         <div className="d-flex justify-content-center align-items-center">

    <form>
    <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Name</label>
        <input onChange={(e) => setName(e.target.value)}
 type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Email address</label>
        <input  onChange={(e) => setEmail(e.target.value)}
 type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>

      <div className="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input onChange={(e) => setPassword(e.target.value)}
      type="password" className="form-control" id="exampleInputPassword1"/>
      </div>

      
      <div className="mb-3 ">
      <label for="exampleInputEmail1" className="form-label">Role</label>
      <select className="form-select" aria-label="Default select example" onChange={(e) => setRole(e.target.value)}>
      <option selected>Select your role</option>
      <option  value="1">Tutor</option>
      <option  value="2">Student</option>
</select>
      </div>
      <span>Already have a  <Link to={'/Login'} >Login</Link></span><br />

      <button type="submit" onClick={(e)=>handleSubmit(e)} className="btn btn-primary">Submit</button>

    </form>
    </div></div>
  )
}

export default Signup