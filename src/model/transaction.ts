import mongoose from "mongoose";

const { Schema } = mongoose;

const transactionSchema = new Schema({
  userId: { type: String, required: true, timestamps: true },
  productId: { type: String, required: true, timestamps: true },
  transactionId: { type: String, required: true, timestamps: true },
  date: { type: Date, required: true, timestamps: true },
});

const Transaction =
  mongoose.models.Transaction ||
  mongoose.model("Transaction", transactionSchema);

export default Transaction;
