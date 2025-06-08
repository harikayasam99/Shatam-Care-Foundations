const CareTaker = require('../models/CareTaker');
const CareSeeker = require('../models/CareSeeker');
const EmergencyNotification = require('../models/EmergencyNotification');
const Tutorial = require('../models/Tutorial');



// Dashboard controller (returns counts and last 24h notifications)
const adminDashController = async (req, res) => {
  try {
    const careTakerCount = await CareTaker.countDocuments();
    const careSeekerCount = await CareSeeker.countDocuments();

    // Get notifications from last 24 hours
    const since = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const recentNotifications = await EmergencyNotification.find({ createdAt: { $gte: since } }).sort({ createdAt: -1 });

    res.json({
      caretakers: careTakerCount,
      careseekers: careSeekerCount,
      recentEmergencyNotifications: recentNotifications.map(n => ({
        id: n._id,
        name: n.name,
        phone: n.phone,
        message: n.message,
        createdAt: n.createdAt
      }))
    });
  } catch (error) {
    res.status(500).json({ message: 'Dashboard fetch error', error: error.message });
  }
};

// Get all careseekers
const getAllUsers = async (req, res) => {
  try {
    const careSeekers = await CareSeeker.find();
    res.json(careSeekers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching careseekers', error: error.message });
  }
};

// Get careseeker by ID
const getUserById = async (req, res) => {
  try {
    const careSeeker = await CareSeeker.findById(req.params.id);
    if (!careSeeker) return res.status(404).json({ message: 'Careseeker not found' });
    res.json(careSeeker);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching careseeker', error: error.message });
  }
};

// Get all caretakers
const getAllCareTakers = async (req, res) => {
  try {
    const caretakers = await CareTaker.find();
    res.json(caretakers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching caretakers', error: error.message });
  }
};

// Get caretaker by ID
const getCareTakerById = async (req, res) => {
  try {
    const caretaker = await CareTaker.findById(req.params.id);
    if (!caretaker) return res.status(404).json({ message: 'Caretaker not found' });
    res.json(caretaker);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching caretaker', error: error.message });
  }
};


const uploadTutorial = async (req, res) => {
  try {
    const { VideoUrl, Assessment } = req.body;

    // Validate input
    if (!VideoUrl || !Assessment || !Array.isArray(Assessment) || Assessment.length === 0) {
      return res.status(400).json({ message: 'VideoUrl and Assessment (with questions) are required.' });
    }

    // Validate each question
    for (const q of Assessment) {
      if (
        !q.Question ||
        !q.Options ||
        !Array.isArray(q.Options) ||
        q.Options.length !== 4 ||
        !q.Answer ||
        !q.Options.includes(q.Answer)
      ) {
        return res.status(400).json({ message: 'Each question must have Question, 4 Options, and Answer (which must be one of the options).' });
      }
    }

    const tutorial = new Tutorial({ VideoUrl, Assessment });
    await tutorial.save();
    res.status(201).json({ message: 'Tutorial uploaded successfully', tutorial });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading tutorial', error: error.message });
  }
};

module.exports = {
  adminDashController,
  getAllUsers,
  getUserById,
  getAllCareTakers,
  getCareTakerById,
  uploadTutorial
};