const { Logger } = require('../config');

class CurdRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const response = await this.model.create(data);
    return response;
  }
  
  async destroy(data) {
    try {
      const response = await this.model.destroy({ where: { id: data } });
      return response;
    } catch (error) {
      Logger.error('Something went wrong in the curd repo:create');
      throw error;
    }
  }
  async get(data) {
    try {
      const response = await this.model.findByPk({ where: { id: data } });
      return response;
    } catch (error) {
      Logger.error('Something went wrong in the curd repo:create');
      throw error;
    }
  }
  async getAll(data) {
    try {
      const response = await this.model.findByAll();
      return response;
    } catch (error) {
      Logger.error('Something went wrong in the curd repo:create');
      throw error;
    }
  }
  async update(id, data) {
    try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      Logger.error('Something went wrong in the curd repo:create');
      throw error;
    }
  }
}

module.exports = CurdRepository;
