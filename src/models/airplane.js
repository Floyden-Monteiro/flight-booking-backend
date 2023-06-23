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
      this.hasMany(models.Fight, {
        foreignkey: 'airplaneId',
        onDelete: 'CASCADE',
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

/**
 * Query to check if constraint has been applied
 * select * from INFORMATION_SCHEMA.KEY_COLUMN_USAGE where TABLE_NAME = 'airports' AND CONSTRAINT_SCHEMA = 'flights';
 */
