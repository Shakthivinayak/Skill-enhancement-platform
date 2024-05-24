import Navbar from "../navbar/navbar"
import QuizApp from "../quiz/Quiz"
import React from 'react'


const ReactComp = () => {
    return (
      <div className='container'>
        <Navbar/>
   <div className='row'>
   <div className='col-7'>
   <iframe className='p-5' width="100%" height="500" src="https://www.youtube.com/embed/Y2hgEGPzTZY?si=Ls45kNLsWLQQ-xIB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  
   </div>
  
   <div className='col-5 '>
   <h1 className='d-flex justify-content-center align-items-center p-5'>Quiz</h1>
   <QuizApp/>
   </div>
   </div>
   
<div className='row '>
<h4>React Component</h4>
  <div className="progress">
  <div className="progress-bar  w-75  " role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
</div>

</div>
     </div>
    )
  }
  export {ReactComp}