const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  icon: { type: String, required: true },
  subtext: { type: String, default: '' }
});

module.exports = mongoose.model('Service', serviceSchema);