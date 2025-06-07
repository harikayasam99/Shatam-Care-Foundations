const mongoose = require('mongoose');

const userSchmea = new mongoose.Schema({

  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required:true
  },
  type: {
    trype: String,
    enum: ['seeker', 'giver', 'admin'],
    default: 'seeker', // Default type is 'seeker'
    
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchmea);