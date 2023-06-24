const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreate(req, res, next) {
  if (!req.body.name) {
    ErrorResponse.message = 'Some thing went wrong while creating airport';

    ErrorResponse.error = new AppError(
      ['name not found in the incoming request'],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.code) {
    ErrorResponse.message = 'Some thing went wrong while creating airport';

    ErrorResponse.error = new AppError(
      ['code not found in the incoming request'],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.cityId) {
    ErrorResponse.message = 'Some thing went wrong while creating airport';

    ErrorResponse.error = new AppError(
      ['City Id not found in the incoming request'],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = {
  validateCreate,
};
