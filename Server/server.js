import express from "express"
import dotenv from "dotenv"
import User from "./Src/models/User.js"
import connectDB from "./Src/config/db.js"
import authRoutes from "./Src/routes/authRoutes.js"
import contactRoutes from "./Src/routes/contactRoutes.js"
import cookieParser from "cookie-parser";
import session from "express-session";
import cors from "cors";
import emergencyRoutes from "./Src/routes/emergencyRoutes.js"
import { auth } from "./Src/middleware/authMiddleware.js"

dotenv.config()
const app = express()

connectDB();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }))

app.use("/api/auth",authRoutes)

app.use("/api/emergency", emergencyRoutes )
app.use("/api/contacts",auth, contactRoutes)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})