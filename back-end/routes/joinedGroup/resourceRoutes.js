// routes/resourceRoutes.js
const express = require("express");
const router = express.Router();
const Resource = require("../../models/JoinedGroup/resourceModel");

// POST /api/resources – Upload resource
router.post("/", async (req, res) => {
  const { title, link, type, userId } = req.body;

  if (!title || !link || !type || !userId) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newResource = new Resource({
      title,
      link,
      type,
      uploadedBy: userId,
    });

    await newResource.save();
    res.status(201).json({ message: "Resource uploaded", resource: newResource });
  } catch (error) {
    res.status(500).json({ error: "Failed to upload resource" });
  }
});

// GET /api/resources/:userId – Get user's resources
router.get("/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const resources = await Resource.find({ uploadedBy: userId });
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch resources" });
  }
});

module.exports = router;
