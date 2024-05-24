import axios from 'axios'
import React ,{useState}from 'react'
import { useNavigate} from 'react-router-dom'



const AddCourse = () => {
    const [Image, setImage] = useState("");
    const [Name, setName] = useState("");
    const [Description, setDescription] = useState("");
    const [Rating, setRating] = useState("");
    const [Duration, setDuration] = useState("");
    const [Item, setItem] = useState("");
    const [Path, setPath] = useState("");

  
    const nav = useNavigate()
  
  
    function handleSubmit(e){
      e.preventDefault()

      axios.post('http://localhost:8000/course/add',{Image,Name,Description,Rating,Duration,Item,Path})
      .then(res =>{
          console.log("credentials :"+res);
      if(res.data.msg === "added"){
          alert(" course added")
          nav("/courses")
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
        <input onChange={(e) => setImage(e.target.value)}
 type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      </div>

      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Name</label>
        <input onChange={(e) => setName(e.target.value)}
 type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      </div>

      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Name</label>
        <input onChange={(e) => setDescription(e.target.value)}
 type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      </div>

      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Name</label>
        <input onChange={(e) => setRating(e.target.value)}
 type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      </div>

      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Name</label>
        <input onChange={(e) => setDuration(e.target.value)}
 type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      </div>

      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Name</label>
        <input onChange={(e) => setItem(e.target.value)}
 type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      </div>

      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Name</label>
        <input onChange={(e) => setPath(e.target.value)}
 type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      </div>
      <button type="submit" onClick={(e)=>handleSubmit(e)} className="btn btn-primary">Submit</button>

    </form>
    </div>
    </div>
  )
}

export  {AddCourse}