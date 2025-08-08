const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const Task = require("./models/Task");
const User = require("./models/User");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// 👉 Use User Routes
app.use("/api/users", userRoutes);

// 👉 MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/eduTracker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ MongoDB error:", err));

// 👉 Get all tasks
app.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});

// 👉 Seed sample tasks (run once)
app.get("/api/seed", async (req, res) => {
  await Task.deleteMany();
  await Task.insertMany([
    { title: "Complete Binary Tree", status: "In Progress", percent: 60 },
    { title: "Graph Algorithms", status: "Pending", percent: 0 },
    { title: "Sorting Problems", status: "Completed", percent: 100 },
  ]);
  res.send("✅ Seed data inserted");
});

// 👉 Mark a task as complete for a user
app.post("/api/user/:userId/complete-task/:taskId", async (req, res) => {
  try {
    const { userId, taskId } = req.params;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    if (!user.completedTasks.includes(taskId)) {
      user.completedTasks.push(taskId);
      await user.save();
    }

    res.json({ success: true, message: "Task marked as complete" });
  } catch (err) {
    res.status(500).json({ error: "Error completing task" });
  }
});

// 👉 Get a user's task completion progress
app.get("/api/user/:userId/progress", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const totalTasks = await Task.countDocuments();
    const completed = user.completedTasks.length;
    const percent = totalTasks > 0 ? Math.round((completed / totalTasks) * 100) : 0;
    res.json({ percent });
  } catch (err) {
    res.status(500).json({ error: "Error getting progress" });
  }
});

// 👉 Get group-wise progress (average)
app.get("/api/group/:groupId/progress", async (req, res) => {
  try {
    const users = await User.find({ groupId: req.params.groupId });
    const totalTasks = await Task.countDocuments();

    if (totalTasks === 0 || users.length === 0) return res.json({ percent: 0 });

    let totalPercent = 0;

    for (const user of users) {
      totalPercent += (user.completedTasks.length / totalTasks) * 100;
    }

    const groupAvg = Math.round(totalPercent / users.length);
    res.json({ percent: groupAvg });
  } catch (err) {
    res.status(500).json({ error: "Error getting group progress" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
