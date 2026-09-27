const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
  backgroundImage: { type: String, required: true },
  tagline: { type: String, default: '' }
});

module.exports = mongoose.model('Home', homeSchema);