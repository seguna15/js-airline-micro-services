'use strict';
import { Model } from 'sequelize';
import { BOOKING_STATUS } from '../utils/common/index.js';
export default (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Booking.init(
    {
      flightId: { type: DataTypes.INTEGER, allowNull: false },
      userId: { type: DataTypes.INTEGER, allowNull: false },
      status: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: [
          BOOKING_STATUS.BOOKED,
          BOOKING_STATUS.CANCELLED,
          BOOKING_STATUS.PENDING,
          BOOKING_STATUS.INITIATED,
        ],
        defaultValue: BOOKING_STATUS.INITIATED,
      },
      noOfSeats: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
      totalCost: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "Booking",
    }
  );
  return Booking;
};