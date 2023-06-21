const { CityService } = require('../services');
const { StatusCodes } = require('http-status-codes');

const { successResponse, ErrorResponse } = require('../utils/common');

async function createCity(req, res) {
  try {
    const city = await CityService.createCity({
      name: req.body.name,
    });
    successResponse.data = city;
    return res.status(StatusCodes.CREATED).json(successResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function destroyCity(req, res) {
  try {
    const city = await CityService.cityDestroy(req.params.id);
    successResponse.data = city;
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function cityUpdate(req, res) {
  try {
    const city = await CityService.cityUpdate(req.params.id, {
      name: req.body.name,
    });
    successResponse.data = city;
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createCity,
  destroyCity,
  cityUpdate,
};
