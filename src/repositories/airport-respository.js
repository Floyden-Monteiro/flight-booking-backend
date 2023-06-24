const CrudRepository = require('./crud-repository');
const { Airport } = require('../models');

class AirportRepository extends CrudRepository {
  constructor() {
    super(Airport); //using parent constructor
  }
}

module.exports = AirportRepository;
