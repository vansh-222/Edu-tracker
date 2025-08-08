const mongoose = require("mongoose");

const activityChartSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  progress: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("ActivityChart", activityChartSchema);
