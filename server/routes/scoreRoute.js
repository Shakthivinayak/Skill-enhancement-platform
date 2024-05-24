import express from'express'
import {Score,getScore} from '../controller/scoreController.js'

const ScoreRoute=express.Router()

ScoreRoute.route('/add').post(Score)
ScoreRoute.route('/').get(getScore)

export default ScoreRoute