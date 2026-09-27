const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  vision: String,
  companyInfo: {
    name: String,
    empanelment: String,
    profile: String,
    regdOffice: String,
    testHouse: String,
    phone: String,
    email: String
  },
  clients: [
    {
      name: String,
      logo: String
    }
  ],
  team: [
    {
      name: String,
      role: String,
      photo: String
    }
  ]
});

module.exports = mongoose.model('About', aboutSchema);
