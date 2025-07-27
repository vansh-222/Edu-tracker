// back-end/routes/subjects.js
import express from "express";
import Subject from "../models/Subject.js";

const router = express.Router();

// CREATE a subject (you already did this)
router.post("/", async (req, res) => {
  try {
    const subject = new Subject(req.body);
    const saved = await subject.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET all subjects
router.get("/", async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.json(subjects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE a subject by ID
router.put("/:id", async (req, res) => {
  try {
    const updated = await Subject.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE a subject by ID
router.delete("/:id", async (req, res) => {
  try {
    await Subject.findByIdAndDelete(req.params.id);
    res.json({ message: "Subject deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
