const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    icon: { type: String, required: true },
    shortDesc: { type: String, default: '' },
    details: { type: String, default: '' },
    images: [{ type: String }]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', projectSchema);