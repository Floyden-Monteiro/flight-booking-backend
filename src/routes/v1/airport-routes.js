const express = require('express');

const { AirportController } = require('../../controllers');
const { AirportMiddlewares } = require('../../middlewares');
const router = express.Router();

// /api/v1/airport POST
router.post(
  '/',
  AirportMiddlewares.validateCreate,
  AirportController.createAirport
);

router.get('/', AirportController.getAirports);
router.get('/:id', AirportController.getAirport);
router.delete('/:id', AirportController.destroyAirport);
router.patch('/:id', AirportController.updateAirport);


module.exports = router;
