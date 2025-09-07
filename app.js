import { configDotenv } from 'dotenv'
import express from 'express'
import connectToDatabase from './config/database.js'
import taskRouter from './routes/taskRouter.js'
import userRouter from './routes/userRouter.js'

import cors from 'cors'

configDotenv()
connectToDatabase() 

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use('/api/auth', userRouter)
app.use('/api/tasks', taskRouter)

app.listen(3000, ()=>{
    console.log('Server is running..');    
})