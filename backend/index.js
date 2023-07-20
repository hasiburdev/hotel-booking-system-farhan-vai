import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import roomRoute from "./routes/rooms.js";
import hotelRoute from "./routes/hotels.js";
import userRoute from "./routes/users.js";
import reviewRoute from "./routes/reviews.js";
import bookingRoute from "./routes/bookings.js";

import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
// const SSLCommerzPayment = require('sslcommerz-lts')
dotenv.config();
const port = process.env.PORT || 8000;
const corsOptions = {
  origin: '*',
  Credential: true,
};

const store_id = process.env.STORE_ID;
const store_passwd = process.env.STORE_PASS;
const is_live = false; //true for live, false for sandbox
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewURlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected To MongoDB");
  } catch (error) {
    console.log("Connection To MongoDB  failed");
  }
};
mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!");
});
mongoose.connection.on("connected", () => {
  console.log("MongoDB connected!");
});
// //how api work
//  app.get("/",(req,res)=>{
//     res.send("Hello!")
//  })
//middlewares

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
// app.use("/api/auth",authRoute)
// app.use("/api/users",authRoute)
// app.use("/api/hotels",authRoute)
// app.use("/api/rooms",authRoute)
app.use("/api/v1/rooms", roomRoute);
app.use("/api/v1/hotels", hotelRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/booking", bookingRoute);

app.listen(port, () => {
  connect();
  console.log("CONNECTED TO BACKEND.", port);
});
