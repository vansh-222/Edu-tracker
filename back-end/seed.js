const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

const groupSchema = new mongoose.Schema({
  name: String,
  members: Number,
  maxMembers: Number
});

const Group = mongoose.model('Group', groupSchema);

const seedGroups = async () => {
  await Group.deleteMany(); // optional: clears existing
  await Group.insertMany([
    { name: "Study Group A", members: 10, maxMembers: 100 },
    { name: "Web Dev Team", members: 25, maxMembers: 100 },
    { name: "DSA Warriors", members: 60, maxMembers: 100 },
    { name: "AI Researchers", members: 45, maxMembers: 100 },
    { name: "ML Engineers", members: 70, maxMembers: 100 },
    { name: "React Learners", members: 80, maxMembers: 100 },
  ]);
  console.log("Dummy groups inserted ✅");
  mongoose.disconnect();
};

seedGroups();
