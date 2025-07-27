import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  progress: {
    type: Number,
    required: true,
    default: 0,
  },
}, { timestamps: true });

export default mongoose.model("Subject", subjectSchema);

