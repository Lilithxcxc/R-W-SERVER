// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  displayName: String,
  avatarUrl: String,
  pet: {
    name: String,
    level: Number,
    imageUrl: String
  },
  farm: [
    {
      plantName: String,
      imageUrl: String,
      plantedAt: Date,
      isHarvested: Boolean
    }
  ]
});

module.exports = mongoose.model('User', userSchema);
