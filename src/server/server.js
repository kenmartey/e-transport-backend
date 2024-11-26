import express from 'express'
import cors from "cors";
const app = express()
import userRouter from '../routes/users.routes.js'
import bookingRouter from '../routes/booking.routes.js'
import userProfileRouter from '../routes/userProfile.routes.js'
import ticketDataRouter from '../routes/ticketData.routes.js'
import smsDataRouter from '../routes/aws.routes.js'
import seatsDataRouter from '../routes/seats.routes.js'
import DBConnection from '../db/connection.js'


import bodyParser from 'body-parser';

const APIVERSION = '/api/v1'
app.use(express.json()) // middleware
app.use(cors())
app.use(bodyParser.json());

// DB Connection
var corsOptions = {
    origin: "http://localhost:3000"
  };
  app.use(cors(corsOptions));
  
DBConnection()

// middleware to print the path
const logger = (req, res, next) => {
    console.log(req.originalUrl)
    next()
}

console.log(`${APIVERSION}/users`)
app.use(logger)


app.use(`${APIVERSION}/users`, userRouter)
app.use(`${APIVERSION}/bookings`, bookingRouter)
app.use(`${APIVERSION}/user-profile`, userProfileRouter)
app.use(`${APIVERSION}/ticket-data`, ticketDataRouter)
app.use(`${APIVERSION}/sms`, smsDataRouter)
app.use(`${APIVERSION}/seats`, seatsDataRouter)



console.log('Server started on Port: 8000')

app.listen(8000)

