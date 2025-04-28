'use strict';

import { BOOKING_STATUS } from '../utils/common/index.js';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("Bookings", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    flightId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    status: {
      type: Sequelize.ENUM,
      allowNull: false,
      values: [
        BOOKING_STATUS.BOOKED,
        BOOKING_STATUS.CANCELLED,
        BOOKING_STATUS.PENDING,
        BOOKING_STATUS.INITIATED,
      ],
      defaultValue: BOOKING_STATUS.INITIATED,
    },
    noOfSeats: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    totalCost: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('Bookings');
}