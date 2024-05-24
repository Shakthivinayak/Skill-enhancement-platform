import express from'express'
import Contact from'../controller/contactController.js'

const contactRoute=express.Router()

contactRoute.route('/contact').post(Contact)



export default contactRoute