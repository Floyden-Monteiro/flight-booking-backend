const express = require('express');

const { CityController } = require('../../controllers');
const { CityMiddlewares } = require('../../middlewares');
const router = express.Router();

// /api/v1/airplane POST
router.post(
  '/',
  CityMiddlewares.validateCreateRequest,
  CityController.createCity
);

router.delete('/:id', CityController.destroyCity);
router.patch('/:id', CityController.cityUpdate);

// router.get('/', AirplaneController.getAirplanes);
// router.get('/:id', AirplaneController.getAirplane);
// router.delete('/:id', AirplaneController.destroyAirplane);
// router.patch('/:id', AirplaneController.updateAirplane);

module.exports = router;
