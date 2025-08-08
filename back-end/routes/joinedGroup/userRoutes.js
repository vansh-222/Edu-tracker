const express = require("express");
const router = express.Router();
const User = require("../../models/JoinedGroup/User");

// Get specific user with completedTasks
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("completedTasks");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
