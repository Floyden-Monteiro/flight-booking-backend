const { CityRepository } = require('../repositories');
const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/errors/app-error');

const cityRepository = new CityRepository();

async function createCity(data) {
  try {
    const city = await cityRepository.create(data);
    return city;
  } catch (error) {
    if (
      error.name == 'SequelizeValidationError' ||
      error.name == 'SequelizeUniqueConstraintError'
    ) {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      'Cannot create a new city object',
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function cityDestroy(id) {
  try {
    const city = await cityRepository.destroy(id);
    return city;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        'The city you requested is not present',
        error.statusCode
      );
    }
    throw new AppError('Not able to delete city', StatusCodes.NOT_FOUND);
  }
}

async function cityUpdate(id, data) {
  try {
    const city = await cityRepository.update(id, data);
    return city;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        'The city you requested not present',
        error.statusCode
      );
    }
    throw new AppError('Not able to update', StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports = {
  createCity,
  cityDestroy,
  cityUpdate,
};
