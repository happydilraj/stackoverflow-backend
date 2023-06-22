

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import userRoutes from "./routes/users.js"
import questionRoutes from "./routes/questions.js"
import answerRoutes from "./routes/answers.js"
import allUserRoutes from "./routes/allUsers.js"

const app = express();
dotenv.config()

const PORT = process.env.PORT || 5000

app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

app.get('/', (req,res) => {
    res.send("this is a stack overflow clone")
})

app.use('/user',userRoutes);
app.use('/questions',questionRoutes)
app.use('/answers',answerRoutes)
app.use('/AllUsers', allUserRoutes)


const uri = process.env.CONNECTION_URL
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>app.listen(PORT, ()=>{console.log(`app listening on port ${PORT}`)}))
.catch((error) => console.log(error.message))



