// 📁 routes/subjectRoutes.js

const express = require('express');
const router = express.Router();

// 📦 Import controller functions
const {
  getSubjects,
  addSubject,
  toggleLesson
} = require('../controllers/subjectsController');

// 🧠 ROUTES

// ✅ Get all subjects
// GET /api/subjects
router.get('/', getSubjects);

// ✅ Add a new subject (with default lessons)
// POST /api/subjects
router.post('/', addSubject);

// ✅ Toggle lesson completion status
// PATCH /api/subjects/:subjectId/lessons/:lessonIndex
router.patch('/:subjectId/lessons/:lessonIndex', toggleLesson);

// 🚀 Export the router
module.exports = router;