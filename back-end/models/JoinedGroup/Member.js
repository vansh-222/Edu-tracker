const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  percent: {
    type: Number,
    required: true,
    default: 0,
  },
});

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  progress: {
    type: [progressSchema],
    default: [],
  },
});

module.exports = mongoose.model("Member", memberSchema);
