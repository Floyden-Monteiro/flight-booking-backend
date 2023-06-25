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

module.exports = router;
