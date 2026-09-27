const router = require('express').Router();
const { getHome, updateHome } = require('../controllers/HomeController');

router.get('/', getHome);
router.put('/', updateHome);

module.exports = router;
