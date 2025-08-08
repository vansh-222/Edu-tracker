const express = require("express");
const router = express.Router();
const Task = require("../../models/JoinedGroup/Task");

// ✅ Get all tasks (optionally filter by groupId)
router.get("/", async (req, res) => {
  try {
    const groupId = req.query.groupId;

    let tasks;
    if (groupId) {
      tasks = await Task.find({ groupId });
    } else {
      tasks = await Task.find();
    }

    res.json(tasks);
  } catch (err) {
    console.error("Error fetching tasks:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ✅ Get tasks by user ID (for frontend use)
router.get("/user/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const tasks = await Task.find({ createdBy: userId });

    res.json(tasks);
  } catch (err) {
    console.error("Error fetching tasks for user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ✅ Add a new task
router.post("/", async (req, res) => {
  const { title, status, percent, createdBy, groupId } = req.body;

  try {
    const task = new Task({
      title,
      status: status || "Pending",
      percent: percent || 0,
      createdBy,
      groupId,
    });

    await task.save();
    res.status(201).json(task);
  } catch (err) {
    console.error("Error creating task:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET /api/tasks/group/:groupId
router.get("/group/:groupId", async (req, res) => {
  try {
    const tasks = await Task.find({ groupId: req.params.groupId });
    res.json(tasks);
  } catch (error) {
    console.error("Error fetching group tasks:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = router;
