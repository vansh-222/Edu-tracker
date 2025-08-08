const express = require("express");
const router = express.Router();
const Member = require("../../models/JoinedGroup/Member");
const Task = require("../../models/JoinedGroup/Task");

router.get("/group/:groupId", async (req, res) => {
  try {
    const groupId = req.params.groupId;

    // 1. Find all members in the group
    const members = await Member.find({ groupId });

    const result = await Promise.all(
      members.map(async (member) => {
        const tasks = await Task.find({ createdBy: member.userId, groupId });

        const total = tasks.length;
        const totalPercent = tasks.reduce((sum, task) => sum + (task.percent || 0), 0);
        const average = total === 0 ? 0 : Math.round(totalPercent / total);

        return {
          name: member.name,
          progress: average,
        };
      })
    );

    res.json(result);
  } catch (err) {
    console.error("Error fetching activity chart data:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
