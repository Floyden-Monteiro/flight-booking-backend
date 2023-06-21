const express = require('express');

const { CityController } = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middlewares');
const router = express.Router();

// /api/v1/airplane POST
router.post('/', CityController.createCity);

// router.get('/', AirplaneController.getAirplanes);
// router.get('/:id', AirplaneController.getAirplane);
// router.delete('/:id', AirplaneController.destroyAirplane);
// router.patch('/:id', AirplaneController.updateAirplane);

module.exports = router;
