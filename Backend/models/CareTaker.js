const mongoose = require("mongoose");

const CareTakerSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: [true, "Please add a name"],
      trim: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: [true, "Please specify gender"],
    },
    age: {
      type: Number,
      required: [true, "Please add age"],
    },
    experience: {
      type: Number,
      required: [true, "Please add years of experience"],
    },
    languages: [
      {
        type: String,
        required: [true, "Please specify languages you speak"],
      },
    ],
    location: {
      city: {
        type: String,
        required: [true, "Please add a city"],
      },
      state: {
        type: String,
        required: [true, "Please add a state"],
      },
      country: {
        type: String,
        required: [true, "Please add a country"],
      },
    },
    salary: {
      type: Number,
      required: [true, "Please specify your expected salary"],
    },
    availability: {
      type: String,
      enum: ["Full-time", "Part-time", "Weekends"],
      required: [true, "Please specify your availability"],
    },
    specializations: [
      {
        type: String,
        required: [true, "Please specify your specializations"],
      },
    ],
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    reviews: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        rating: {
          type: Number,
          required: true,
          min: 1,
          max: 5,
        },
        comment: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    certifications: [
      {
        name: {
          type: String,
          required: true,
        },
        issuedBy: {
          type: String,
          required: true,
        },
        year: {
          type: Number,
          required: true,
        },
      },
    ],
    description: {
      type: String,
      required: [true, "Please add a brief description about yourself"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CareTaker", CareTakerSchema);
