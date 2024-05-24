import express from'express'
import {Quiz,getQuiz} from '../controller/quizController.js'

const quizRoute=express.Router()

quizRoute.route('/addQuiz').post(Quiz)
quizRoute.route('/getQuiz').get(getQuiz)

export default quizRoute