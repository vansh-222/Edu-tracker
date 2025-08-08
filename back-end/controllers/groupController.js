const Group = require('../models/Group');

// Get all groups
exports.getGroups = async (req, res) => {
  try {
    const groups = await Group.find();
    res.json(groups);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch groups' });
  }
};

// Join a group
exports.joinGroup = async (req, res) => {
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
    res.status(200).json({ message: 'Joined group successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to join group' });
  }
};

// Leave a group
exports.leaveGroup = async (req, res) => {
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
    res.status(200).json({ message: 'Left group successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to leave group' });
  }
};

// Create a group
exports.createGroup = async (req, res) => {
  try {
    const { name, description, maxMembers } = req.body;

    const newGroup = new Group({
      name,
      description,
      maxMembers,
      members: 0,
      leaveProgress: maxMembers
    });

    const savedGroup = await newGroup.save();
    res.status(201).json(savedGroup);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create group' });
  }
};

// Delete a group
exports.deleteGroup = async (req, res) => {
  try {
    const deletedGroup = await Group.findByIdAndDelete(req.params.id);
    if (!deletedGroup) {
      return res.status(404).json({ error: 'Group not found' });
    }
    res.status(200).json({ message: 'Group deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete group' });
  }
};

// Optional: Seed groups
exports.seedGroups = async (req, res) => {
  try {
    await Group.deleteMany();

    const sampleGroups = [
      {
        name: 'React Learners',
        description: 'Group for React.js learners.',
        members: 10,
        maxMembers: 100,
        leaveProgress: 90,
      },
      {
        name: 'Node.js Enthusiasts',
        description: 'Join us to explore Node.js.',
        members: 15,
        maxMembers: 100,
        leaveProgress: 85,
      },
      {
        name: 'Python Masters',
        description: 'Master Python together.',
        members: 8,
        maxMembers: 100,
        leaveProgress: 92,
      },
      {
        name: 'DSA Warriors',
        description: 'Data Structures & Algorithms focus.',
        members: 20,
        maxMembers: 100,
        leaveProgress: 80,
      },
      {
        name: 'AI & ML Club',
        description: 'Machine Learning enthusiasts group.',
        members: 30,
        maxMembers: 100,
        leaveProgress: 70,
      },
      {
        name: 'Web Dev Bootcamp',
        description: 'Front-end to back-end devs.',
        members: 25,
        maxMembers: 100,
        leaveProgress: 75,
      },
    ];

    await Group.insertMany(sampleGroups);
    res.status(201).json({ message: 'Seeded successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Seeding failed' });
  }
};