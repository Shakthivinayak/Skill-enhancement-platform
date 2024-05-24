import React, { useState,useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios'


// const quizData = [
//   {
//     Questions: 'What is the capital of France?',
//     Options: ['London', 'Paris', 'Rome', 'Berlin'],
//     correctAnswer: 'Paris'
//   },
//   {
//     Questions: 'Which planet is known as the Red Planet?',
//     Options: ['Mars', 'Jupiter', 'Saturn', 'Mercury'],
//     correctAnswer: 'Mars'
//   },
// ];

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  // const [data, setData] = useState([])
  const [data2, setData2] = useState([])

  const nav =useNavigate()

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < data2.length) { 
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  //  let a = data.map((e)=>{

  // const handleOptionSelect = (option) => {
  //   setSelectedOption(option);
  // };

  // const handleNextQuestion = () => {
  //   if (selectedOption === data2.CorrectAnswer) {
  //     setScore(score + 1);
  //   }
  //   setSelectedOption('');
  //   setCurrentQuestion(currentQuestion + 1);
  // };
  // const handleSubmit = () =>{
  //     console.log(score)
  //     if(score ===2){
  //       nav("/react")
  //     }
  //     else{
  //       nav("/home")
  //     }
  // }
  useEffect(()=>{
    axios.get("http://localhost:8000/quiz/getQuiz")
    .then((res)=>{
      console.log(res.data.user)
      setData2(res.data.user)
    })

    // axios.post("http://localhost:8000/score/add")
    // .then((res)=>{
    //   console.log("score"+score)
    //   setData(score)
    // })

  },[])



  return (
    <div>
      {currentQuestion < data2.length ? (
        <div>
          <h2>{data2[currentQuestion].Questions}</h2>
          <ul>
            {data2[currentQuestion].Options.map((e, id) => (
              <li key={id}>
                <label>
                  <input
                    type="radio"
                    className='check'
                    value={e}
                    checked={currentQuestion === e}
                    onChange={() => handleAnswerOptionClick(e)}
                  />
                  {e}
                </label>
              </li>
            ))}
          </ul>
          <button className='btn btn-outline-primary' onClick={handleAnswerOptionClick} >
            Next
          </button>
        </div>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <p>Your Score: {score}/{data2.length}</p>
          <button className='btn btn-outline-primary' onClick={() => handleAnswerOptionClick()}>Restart Quiz</button>
          {/* <Link to={'/react'}><button className='btn btn-outline-primary'>Home</button></Link> */}
        </div>
      )}
    </div>
  )
// });
  // return({a})
}

export default QuizApp;
