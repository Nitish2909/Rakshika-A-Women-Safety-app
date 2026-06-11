import express from "express"
import dotenv from "dotenv"
import User from "./Src/models/User.js"
import connectDB from "./Src/config/db.js"

dotenv.config()
const app = express()

connectDB();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    res.send("Hello, World!")
})

app.use("/api/auth",)
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})