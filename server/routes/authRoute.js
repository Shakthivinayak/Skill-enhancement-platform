import express from'express'
import{Signup,Login} from'../controller/authController.js'

const authRoute=express.Router()

authRoute.route('/signup').post(Signup)
authRoute.route('/login').post(Login)


export default authRoute