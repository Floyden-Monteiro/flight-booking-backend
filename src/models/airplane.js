'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.City, {
        foreignkey: 'cityId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }

  Airplane.init(
    {
      modelNumber: {
        type: DataTypes.STRING,
        allowNullL: false,
        validate: {
          isAlphanumeric: true,
        },
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { max: 1000 },
      },
    },
    {
      sequelize,
      modelName: 'Airplane',
    }
  );
  return Airplane;
};
