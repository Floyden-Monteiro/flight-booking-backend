const express = require('express');

const { AirplaneController } = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middlewares');
const router = express.Router();

console.log('inside airplane routes');

// /api/v1/airplane POST
router.post(
  '/',
  AirplaneMiddlewares.validateCreate,
  AirplaneController.createAirplane
);

router.get('/', AirplaneController.getAirplanes);
router.get('/:id', AirplaneController.getAirplane);
router.delete('/:id', AirplaneController.destroyAirplane);
router.patch('/:id', AirplaneController.updateAirplane);

module.exports = router;
