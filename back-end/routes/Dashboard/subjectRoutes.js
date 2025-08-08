import express from 'express';
import Subject from '../models/subjectModel.js'; // Adjust path if needed

const router = express.Router();

// POST: Create new subject
router.post('/', async (req, res) => {
  try {
    const subject = new Subject(req.body);
    const createdSubject = await subject.save();
    res.status(201).json(createdSubject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// POST: Delete new subject
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Subject.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Subject not found" });
    }
    res.json({ message: "Subject deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});



// GET: Get all subjects
router.get('/', async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.json(subjects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST /api/subjects/:id/topics
router.post('/:id/topics', async (req, res) => {
  const { title } = req.body;

  try {
    const subject = await Subject.findById(req.params.id);
    subject.topics.push({ title });
    await subject.save();
    res.json(subject);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add topic' });
  }
});


export default router;