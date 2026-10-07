import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from "mongoose"
import userRoutes from './routes/crudRoute.js'

dotenv.config()

const app = express()

// middleware

app.use(cors())
app.use(express.json())

app.use("/api/user", userRoutes)

//mongoDb connection

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("connected to mongoDB")

})
.catch((error) => {
    console.log(error)
})

//server
const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})