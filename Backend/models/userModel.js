const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  type: {
    type: String, // Fixed: changed 'trype' to 'type'
    enum: ['seeker', 'giver', 'admin'],
    default: 'seeker'
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);