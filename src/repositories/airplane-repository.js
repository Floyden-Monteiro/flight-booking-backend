const CrudRepository = require('./crud-repository');
const { Airplane } = require('../models');

class AirplaneRepository extends CrudRepository {
  constructor() {
    super(Airplane); //using parent constructor
  }
}

module.exports = AirplaneRepository;
