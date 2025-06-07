const CareTaker = require("../models/CareTaker");

// @desc    Search care takers
// @route   GET /api/caretakers/search
// @access  Public
const searchCareTakers = async (req, res) => {
  try {
    const {
      minSalary,
      maxSalary,
      gender,
      languages,
      location,
      availability,
      specializations,
    } = req.query;

    // Build query
    const query = {};

    // Add salary range to query
    if (minSalary || maxSalary) {
      query.salary = {};
      if (minSalary) query.salary.$gte = Number(minSalary);
      if (maxSalary) query.salary.$lte = Number(maxSalary);
    }

    // Add gender filter
    if (gender) {
      query.gender = gender;
    }

    // Add languages filter
    if (languages) {
      const languageArray = languages.split(",").map((lang) => lang.trim());
      query.languages = { $in: languageArray };
    }

    // Add location filter
    if (location) {
      const locationObj = JSON.parse(location);
      if (locationObj.city) query["location.city"] = locationObj.city;
      if (locationObj.state) query["location.state"] = locationObj.state;
      if (locationObj.country) query["location.country"] = locationObj.country;
    }

    // Add availability filter
    if (availability) {
      query.availability = availability;
    }

    // Add specializations filter
    if (specializations) {
      const specializationsArray = specializations
        .split(",")
        .map((spec) => spec.trim());
      query.specializations = { $in: specializationsArray };
    }

    const careTakers = await CareTaker.find(query)
      .populate("user", "email")
      .sort("-rating");

    res.json({
      success: true,
      count: careTakers.length,
      data: careTakers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error searching care takers",
      error: error.message,
    });
  }
};

// @desc    Get single care taker
// @route   GET /api/caretakers/:id
// @access  Public
const getCareTaker = async (req, res) => {
  try {
    const careTaker = await CareTaker.findById(req.params.id)
      .populate("user", "email")
      .populate("reviews.user", "email");

    if (!careTaker) {
      return res.status(404).json({
        success: false,
        message: "Care taker not found",
      });
    }

    res.json({
      success: true,
      data: careTaker,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching care taker",
      error: error.message,
    });
  }
};

// @desc    Create a review
// @route   POST /api/caretakers/:id/reviews
// @access  Private (only authenticated users)
const createReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;

    const careTaker = await CareTaker.findById(req.params.id);

    if (!careTaker) {
      return res.status(404).json({
        success: false,
        message: "Care taker not found",
      });
    }

    // Check if user already reviewed
    const alreadyReviewed = careTaker.reviews.find(
      (review) => review.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      return res.status(400).json({
        success: false,
        message: "Care taker already reviewed",
      });
    }

    const review = {
      user: req.user._id,
      rating: Number(rating),
      comment,
    };

    careTaker.reviews.push(review);

    // Calculate average rating
    careTaker.rating =
      careTaker.reviews.reduce((acc, item) => item.rating + acc, 0) /
      careTaker.reviews.length;

    await careTaker.save();

    res.status(201).json({
      success: true,
      message: "Review added",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error adding review",
      error: error.message,
    });
  }
};

module.exports = {
  searchCareTakers,
  getCareTaker,
  createReview,
};
