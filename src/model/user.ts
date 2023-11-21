import { UUID } from "mongodb";
import mongoose from "mongoose";

const { Schema } = mongoose;
const userSchema = new Schema({
  email: { type: String, unique: true, required: true, timestamps: true },
  name: { type: String, required: true, timestamps: true },
  balance: { type: Number, required: true, timestamps: true },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
// models ti da l'array di tutti gli elementi con schema User, se non è presente nessun Array, mongoose.model ne crea uno
