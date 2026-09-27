const router = require('express').Router();
const {
  getServices,
  createService,
  updateService,
  deleteService
} = require('../controllers/ServiceController');

router.get('/', getServices);
router.post('/', createService);
router.put('/:id', updateService);
router.delete('/:id', deleteService);

module.exports = router;
