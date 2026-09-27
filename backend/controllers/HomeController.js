const Home = require('../models/Home');

exports.getHome = async (req, res) => {
  try {
    const home = await Home.findOne();
    res.json(home);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateHome = async (req, res) => {
  try {
    const home = await Home.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true
    });
    res.json(home);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};