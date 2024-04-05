import { connect } from 'mongoose';



const  DBConnection = () => {
    console.log("env file",process.env.DBCONNECTIONURL)
        try {
            connect(process.env.DBCONNECTIONURL)
            console.log('Connected to E-transport Database')
        } catch (error) {
            console.error('MongoDB connection error:', error)
        }
}

export default DBConnection