const express = require('express');

const { FlightController } = require('../../controllers');
const { FlightMiddlewares } = require('../../middlewares');
const router = express.Router();

// /api/v1/airport POST
router.post(
  '/',
  FlightMiddlewares.validateCreate,
  FlightController.createFlight
);

router.get('/', FlightController.getAllFlights);
router.get('/:id', FlightController.getFlight);

// api/v1/flights/seats
router.patch(
  '/:id/seats',
  FlightMiddlewares.validateUpdateSeatsRequest,
  FlightController.updateSeats
);
module.exports = router;
