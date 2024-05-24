
import express from 'express'
import cors from 'cors'
import databaseConn from './databaseConn.js'
import authRoute from './routes/authRoute.js'
import courseRoute from './routes/courseRoute.js'
import contactRoute from './routes/contactRoute.js'
import quizRoute from './routes/quizRoute.js'
import scoreRoute from './routes/scoreRoute.js'


const app =express()

app.use(express.json())
app.use(cors())
app.use("/auth",authRoute)
app.use("/course",courseRoute)
app.use("/contact",contactRoute)
app.use("/quiz",quizRoute)
app.use("/score",scoreRoute)





databaseConn()


app.listen(8000,()=>{
    console.log('server is listening pm port 8000')
})
