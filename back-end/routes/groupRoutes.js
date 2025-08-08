const express = require('express');
const router = express.Router();
const Group = require('../models/Group');

// Get all groups
router.get('/', async (req, res) => {
  try {
    const groups = await Group.find();
    res.json(groups);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Join a group
router.post('/:id/join', async (req, res) => {
  try {
    const group = await Group.findById(req.params.id);
    if (!group) return res.status(404).json({ error: 'Group not found' });

    if (group.members >= group.maxMembers) {
      return res.status(400).json({ error: 'Group is full' });
    }

    group.members += 1;

    if (group.leaveProgress > 0) {
      group.leaveProgress -= 1;
    }

    await group.save();
    res.json({ message: 'Joined group successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Leave a group
router.post('/:id/leave', async (req, res) => {
  try {
    const group = await Group.findById(req.params.id);
    if (!group) return res.status(404).json({ error: 'Group not found' });

    if (group.members > 0) {
      group.members -= 1;
    }

    if (group.leaveProgress < group.maxMembers) {
      group.leaveProgress += 1;
    }

    await group.save();
    res.json({ message: 'Left group successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// backend/routes/groups.js or similar
router.post('/', async (req, res) => {
  try {
    const { name, description, maxMembers } = req.body;

    const newGroup = new Group({
      name,
      description,
      maxMembers,
      members: 0,
    });

    const savedGroup = await newGroup.save();
    res.status(201).json(savedGroup);
  } catch (error) {
    console.error("Error creating group:", error);
    res.status(500).json({ error: 'Failed to create group' });
  }
});
router.delete('/groups/:id', async (req, res) => {
  try {
    const groupId = req.params.id;
    const deletedGroup = await Group.findByIdAndDelete(groupId);

    if (!deletedGroup) {
      return res.status(404).json({ message: 'Group not found' });
    }

    res.json({ message: 'Group deleted successfully', group: deletedGroup });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});




module.exports = router;