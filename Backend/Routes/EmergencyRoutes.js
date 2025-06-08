const express = require('express');
const router = express.Router();
const EmergencyNotification = require('../models/EmergencyNotification');

// POST /api/notifications - Save a new emergency notification
router.post('/', async (req, res) => {
  try {
    const { name, phone, message } = req.body;
    if (!name || !phone || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
    const notification = new EmergencyNotification({ name, phone, message });
    await notification.save();
    res.status(201).json({ message: 'Notification saved successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;