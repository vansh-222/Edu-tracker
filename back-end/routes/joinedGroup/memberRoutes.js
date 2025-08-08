const express = require("express");
const router = express.Router();
const Member = require("../../models/JoinedGroup/Member");

// GET all members
router.get("/", async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch members" });
  }
});

// POST: Add a new member
router.post("/", async (req, res) => {
  const { name, email, progress } = req.body;

  try {
    const existing = await Member.findOne({ email });
    if (existing) return res.status(400).json({ error: "Member already exists" });

    const newMember = new Member({
      name,
      email,
      progress,
    });

    await newMember.save();
    res.status(201).json(newMember);
  } catch (err) {
    res.status(500).json({ error: "Failed to add member" });
  }
});

// PUT: Update progress of a member
router.put("/:id/progress", async (req, res) => {
  const { progress } = req.body;
  try {
    const updated = await Member.findByIdAndUpdate(
      req.params.id,
      { progress },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update progress" });
  }
});
// routes/memberRoutes.js ya jaha bhi tu route handle kr rha
router.get("/group/:groupId", async (req, res) => {
  try {
    const members = await Member.find({ groupId: req.params.groupId });
    res.json(members);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch members by group" });
  }
});

module.exports = router;
