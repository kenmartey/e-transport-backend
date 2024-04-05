import express from 'express'
const app = express()
import userRouter from '../routes/users.js'
import DBConnection from '../db/connection.js'

const APIVERSION = '/api/v1'
app.use(express.json()) // middleware
// DB Connection
DBConnection()

// middleware to print the path
const logger = (req, res, next) =>{
    console.log(req.originalUrl)
    next()
}

console.log(`${APIVERSION}/users`)
app.use(logger)


app.use(`${APIVERSION}/users`, userRouter)
console.log('Server started on Port: 8000')



app.listen(8000)

