import express from "express";
import cors from "cors";
import connectDB from "./config/connectDB.js";
import route from "./routes/index.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
connectDB();
mongoose.set("strictQuery", false);

const PORT = process.env.PORT || 3000;
const app = express();

app.listen(PORT, () => {
  console.log("Server on PORT " + PORT);
});
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Replaced bodyParser with built-in method
app.use(cookieParser());
app.use(cors());

app.use(route);

////////
