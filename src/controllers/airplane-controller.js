const { AirplaneService } = require('../services');
const { StatusCodes } = require('http-status-codes');

const { successResponse, ErrorResponse } = require('../utils/common');

/*
   POST
   req-body {modelNumber :"aribus320", capacity:200};
*/

async function createAirplane(req, res) {
  try {
    console.log('inside controller routes');

    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    successResponse.data = airplane;
    return res.status(StatusCodes.CREATED).json(successResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getAirplanes(req, res) {
  try {
    const airplane = await AirplaneService.getAirplanes();
    successResponse.data = airplane;
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
};
