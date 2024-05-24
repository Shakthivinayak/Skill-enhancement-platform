import React from 'react'
import QuizApp from '../quiz/Quiz'
import Navbar from '../navbar/navbar'

const VideoJsx = () => {
  return (
    <div className='container'>
      <Navbar/>

 <div className='row'>
 <div className='col-lg-6'>
 <iframe className='p-3' width="100%" height="500" src="https://www.youtube.com/embed/7fPXI_MnBOY?si=7F6h8bWognNQqcvB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  
 </div>

 <div className='col-lg-5 '>
 <h1 className='d-flex justify-content-center align-items-center p-5'>Quiz</h1>
 <QuizApp/>
 </div>
 </div>

 <div className='row '>
<h4>Jsx</h4>
  <div className="progress">
  <div className="progress-bar  w-25  " role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div>

</div>
   </div>
  )
}





export  {VideoJsx}