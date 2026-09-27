const router = require('express').Router();
const { getAbout, updateAbout } = require('../controllers/AboutController');

router.get('/', getAbout);
router.put('/', updateAbout);

module.exports = router;
