const CrudRepository = require('./crud-repository');
const { Flight, Airplane, Airport } = require('../models');
const { Sequelize } = require('sequelize');

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight); //using parent constructor
  }

  async getAllFlights(filter, sort) {
    const response = await this.model.findAll({
      where: filter,
      order: sort,
      include: [
        {
          model: Airplane,
          require: true,
          as: 'airplaneDetail',
        },
        {
          model: Airport,
          require: true,
          as: 'departureAirport',
          on: {
            col1: Sequelize.where(
              Sequelize.col('Flight.departureAirportId'),
              '=',
              Sequelize.col('departureAirport.code')
            ),
          },
        },
        {
          model: Airport,
          require: true,
          as: 'arrivalAirport',
          on: {
            col1: Sequelize.where(
              Sequelize.col('Flight.arrivalAirportId'),
              '=',
              Sequelize.col('arrivalAirport.code')
            ),
          },
        },
      ],
    });

    return response;
  }
}

module.exports = FlightRepository;
