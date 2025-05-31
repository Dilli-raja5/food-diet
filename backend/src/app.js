import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./db";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

console.log("rr")
connectDB();

app.get('/', (req, res) => {
  res.send('API is running 🚀');
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});