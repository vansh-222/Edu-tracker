const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  name: String,
  description: String,
  members: {
    type: Number,
    default: 0
  },
  maxMembers: Number
});

module.exports = mongoose.model('Group', groupSchema);
