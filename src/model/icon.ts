import mongoose from "mongoose";

const { Schema } = mongoose;

const iconSchema = new Schema({
  imageUrl: { type: String, required: true, timestamps: true },
  prompt: { type: String, required: true, timestamps: true },
  authorId: { type: String, required: true, timestamps: true },
  generationId: { type: String, required: true, timestamps: true },
});

const Icon = mongoose.models.Icon || mongoose.model("Icon", iconSchema);

export default Icon;
