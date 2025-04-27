'use strict';
import { Model } from 'sequelize';
import { SEAT_TYPE } from '../utils/common/index.js';
export default (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane, {
        foreignKey: "airplaneId",
      })
    }
  }
  Seat.init(
    {
      airplaneId: { type: DataTypes.INTEGER, allowNull: false },
      row: { type: DataTypes.INTEGER, allowNull: false },
      col: { type: DataTypes.STRING, allowNull: false },
      type: {
        type: DataTypes.ENUM,
        values: [SEAT_TYPE.BUSINESS, SEAT_TYPE.ECONOMY, SEAT_TYPE.PREMIUM_ECONOMY, SEAT_TYPE.FIRST],
        defaultValue: SEAT_TYPE.ECONOMY,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Seat",
    }
  );
  return Seat;
};