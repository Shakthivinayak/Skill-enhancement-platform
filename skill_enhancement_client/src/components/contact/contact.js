import React, { useState } from 'react'
import '../../components/contact/contact.css'
import '../../components/navbar/navbar.css'
import axios from 'axios' 

const Contact = () => {
   const [Message, setMessage] = useState("");
   const [Email, setEmail] = useState("");

function handleSubmit(e){
  e.preventDefault()

  axios.post('http://localhost:8000/contact/contact',{Message,Email})
  .then(res =>{
      console.log("credentials :"+res);
      if(res.data.msg === "added"){
          alert("signed up")
      }
   
  })

}
  return (
    <div id='contact' >
              <div className='container'>
        <h1 className='d-flex justify-content-center align-items-center p-3'>Contact form</h1>

        <div className='row'>
            
       <div className=" justify-content-center align-items-center col-lg-6">
   
      <div className="mb-3 ">
        <label for="exampleInputEmail1" className="form-label">Email address</label>
        <input onChange={(e) => setEmail(e.target.value)}   type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" class="form-label">Comments</label>
        <textarea onChange={(e) => setMessage(e.target.value)}   className="form-control" id="exampleInputPassword1"rows='5'/>
      </div>
    
      <button type="submit"  onClick={(e)=>handleSubmit(e)}  className="btn btn-primary">Submit</button>
    </div>


<div className='col-lg-4 d.none .d-sm-block '><img className='w-100'src="https://media.istockphoto.com/id/1329528525/photo/shot-of-a-young-businesswoman-using-her-laptop-to-host-a-video-conference-at-work.jpg?s=612x612&w=0&k=20&c=3gQ4wouisozooCMoeg2ftMMij5xyfvnl84fpeyuLpSA="alt="" />
</div>
</div>
</div>

  </div>
  )
}

export default Contact