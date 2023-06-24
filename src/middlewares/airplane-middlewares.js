const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');


function validateCreate(req, res, next) {
  if (!req.body.modelNumber) {
    ErrorResponse.message = 'Some thing went wrong while creating airplne';

    ErrorResponse.error = new AppError(
      ['model number not found in the incoming request'],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = {
  validateCreate,
};
