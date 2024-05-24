import React, { useState, useEffect } from 'react';
import axios from "axios"

const Quiz2 = () => {


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [data, setData] = useState([])

  const handleAnswerOptionClick = (selectedAnswer) => {
    if (selectedAnswer === data[currentQuestion].Answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < data.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  useEffect(()=>{
    axios.get("http://localhost:8000/quiz/getQuiz")
    .then((res)=>{
      console.log(res.data.user)
      setData(res.data.user)
    })
  },[])

  return (
    <div className='quiz'>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {data.length}
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{data.length}
            </div>
            <div className='question-text'>{data[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {data[currentQuestion].Options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz2;