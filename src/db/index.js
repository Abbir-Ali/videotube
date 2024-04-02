import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  console.log(process.env.MONGODB_URI);
  try {
    const connetionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    )
    console.log(
      `\n MONGO_DB CONNECTED !! DB HOST : ${connetionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGO_DB CONNECTION FAILED:", error);
    process.exit(1)
  }
};
export default connectDB;
