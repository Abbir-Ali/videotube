import dotenv from "dotenv";
// import express from "express";
import connectDB from "./db/index.db.js";
import app from './app.js'; // Corrected import

dotenv.config(
  {path: './.env'}
);



connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO_DB CONNECTION FAILED !!! ", err);
  });
