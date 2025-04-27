'use strict';

import { SEAT_TYPE } from '../utils/common/index.js';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Seats', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    airplaneId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Airplanes",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    row: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    col: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    type: {
      type: Sequelize.ENUM,
      values: [SEAT_TYPE.BUSINESS, SEAT_TYPE.ECONOMY, SEAT_TYPE.PREMIUM_ECONOMY, SEAT_TYPE.FIRST_CLASS],
      defaultValue: SEAT_TYPE.ECONOMY,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('Seats');
}