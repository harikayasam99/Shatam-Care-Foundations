const express = require("express");
const {
  adminDashController,
  getAllUsers,
  getUserById,
  getAllCareTakers,
  getCareTakerById,
  uploadTutorial
} = require("../controllers/AdminController");
const { protect, admin } = require("../middleware/authMiddleware");
const router = express.Router();

// Middleware to protect routes and check for admin role
router.use(protect);
router.use(admin);

// Dashboard data (counts + recent notifications)
router.get('/dashbord', adminDashController);

// Careseeker routes
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);

// Caretaker routes
router.get('/caretakers', getAllCareTakers);
router.get('/caretakers/:id', getCareTakerById);

// Upload tutorial
router.post('/upload', uploadTutorial);

module.exports = router;