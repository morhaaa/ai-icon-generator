import mongoose from "mongoose";

const mongoDB = process.env.MONGO_URL_DB ?? "";

export const connect = async () => {
  //Check if is already connected
  if (mongoose.connections[0].readyState) return;
  try {
    await mongoose.connect(mongoDB);
    console.log("Connect to MongoDB");
  } catch (e) {
    throw new Error("Error to connect with mongo db");
  }
};
