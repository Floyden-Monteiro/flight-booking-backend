const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreate(req, res, next) {
  if (!req.body.flightNumber) {
    ErrorResponse.message = 'Some thing went wrong while creating flight';

    ErrorResponse.error = new AppError(
      ['flightNumber not found in the incoming request'],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.airplaneId) {
    ErrorResponse.message = 'Some thing went wrong while creating flight';

    ErrorResponse.error = new AppError(
      ['airplaneId not found in the incoming request'],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.departureAirportId) {
    ErrorResponse.message = 'Some thing went wrong while creating flight';

    ErrorResponse.error = new AppError(
      ['departureAirportId Id not found in the incoming request'],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.arrivalAirportId) {
    ErrorResponse.message = 'Some thing went wrong while creating flight';

    ErrorResponse.error = new AppError(
      ['arrivalAirportId Id not found in the incoming request'],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.arrivalTime) {
    ErrorResponse.message = 'Some thing went wrong while creating flight';

    ErrorResponse.error = new AppError(
      ['arrivalTime Id not found in the incoming request'],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.departureTime) {
    ErrorResponse.message = 'Some thing went wrong while creating flight';

    ErrorResponse.error = new AppError(
      ['departureTime not found in the incoming request'],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.price) {
    ErrorResponse.message = 'Some thing went wrong while creating flight';

    ErrorResponse.error = new AppError(
      ['price  not found in the incoming request'],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.totalSeats) {
    ErrorResponse.message = 'Some thing went wrong while creating flight';

    ErrorResponse.error = new AppError(
      ['totalSeats Id not found in the incoming request'],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = {
  validateCreate,
};
