import React from 'react'
import QuizApp from '../quiz/Quiz'

const VideoHooks = () => {
    return (
      <div className='container'>
  
   <div className='row'>
   <div className='col-7'>
   <iframe className='p-5' width="100%" height="500" src="https://www.youtube.com/embed/HnXPKtro4SM?si=CpJhczEUFTaJ3b2l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  
   </div>
  
   <div className='col-5 '>
   <h1 className='d-flex justify-content-center align-items-center p-5'>Quiz</h1>
   <QuizApp/>
   </div>
   </div>

   <div className='row '>
<h4>  Hooks</h4>
  <div className="progress">
  <div className="progress-bar  w-100 " role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">100%</div>
</div>

</div>
     </div>
    )
  }

export  {VideoHooks}