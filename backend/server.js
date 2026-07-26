const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes")
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://your-vercel-app.vercel.app"
    ],
    credentials: true
}));
app.use(express.json()); //middleware to prepare request. parses json

app.use("/api/diary", require("./routes/diaryRoutes"));
app.use("/api/auth", authRoutes)



const PORT = process.env.PORT || 5000
// console.log(cors)

app.listen(PORT, () => {
    console.log(`Server is running at PORT: ${PORT}`)
});