const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  Question: { type: String, required: true },
  Options: {
    type: [String],
    required: true,
    validate: [arr => arr.length === 4, 'There must be exactly 4 options.']
  },
  Answer: {
    type: String,
    required: true,
    validate: {
      validator: function(ans) {
        return this.Options.includes(ans);
      },
      message: 'Answer must be one of the options.'
    }
  }
});

const tutorialSchema = new mongoose.Schema(
  {
    VideoUrl: { type: String, required: true },
    Assessment: {
      type: [questionSchema],
      required: true,
      validate: [arr => arr.length > 0, 'There must be at least one question.']
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Tutorial', tutorialSchema);