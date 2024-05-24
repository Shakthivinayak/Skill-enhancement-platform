import express from'express'
import {Course,getCourse} from '../controller/courseContoller.js'

const courseRoute=express.Router()

courseRoute.route('/add').post(Course)
courseRoute.route('/').get(getCourse)

export default courseRoute  