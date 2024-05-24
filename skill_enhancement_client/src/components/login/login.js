import React,{useState} from 'react'
import './login.css'
import '../../components/navbar/navbar.css'
import logo from '../../assets/68af98120706677.60b715b71f143.jpg'
import {Link,useNavigate} from 'react-router-dom'
import Navbar from '../navbar/navbar'
import axios from 'axios'

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  
  const nav = useNavigate()
  
  function handleSubmit(e){
    e.preventDefault()

    axios.post('http://localhost:8000/auth/login',{Email, Password})
    .then(res=>{
        console.log(res.data);
        if(res.data.msg === "pwd_incorrect"){
            alert("Check your password")
        }
        else if(res.data.msg === "please_signup"){
            alert("Go to signup")
        }
        else{
            nav("/home")
        }
    }).catch(err => console.log("error",err))

  }

  return (
    <div id='login'>     

         <h1 className="text-center">Login</h1>
         <div className="d-flex justify-content-center align-items-center">

    <form>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Email address</label>
        <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input onChange={(e) => setPassword(e.target.value)}type="password" className="form-control" id="exampleInputPassword1"/>
      </div>
     
      <button type="submit" onClick={(e)=>handleSubmit(e)} className="btn btn-primary">Submit</button>
    </form>
    </div>
    </div>
  )
}

export default Login