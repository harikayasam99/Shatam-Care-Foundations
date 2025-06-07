const express = require("express");
const router = express.Router();
const {
  searchCareTakers,
  getCareTaker,
  createReview,
} = require("../controllers/careTakerController");

// Middleware to protect routes
const { protect } = require("../middleware/authMiddleware");

// Search and get routes
router.get("/search", searchCareTakers);
router.get("/:id", getCareTaker);

// Review routes
router.post("/:id/reviews", protect, createReview);

module.exports = router;
