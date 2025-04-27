'use strict';

import { SEAT_TYPE } from '../utils/common/index.js';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  /**
   * Add seed commands here.
   *
   * Example:
   * await queryInterface.bulkInsert('People', [{
   *   name: 'John Doe',
   *   isBetaMember: false
   * }], {});
  */
  await queryInterface.bulkInsert("Seats", [
    {
      airplaneId: 4,
      row: 1,
      col: "A",
      type: SEAT_TYPE.ECONOMY,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      airplaneId: 4,
      row: 1,
      col: "B",
      type: SEAT_TYPE.ECONOMY,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      airplaneId: 4,
      row: 1,
      col: "C",
      type: SEAT_TYPE.ECONOMY,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      airplaneId: 4,
      row: 1,
      col: "D",
      type: SEAT_TYPE.ECONOMY,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      airplaneId: 4,
      row: 1,
      col: "E",
      type: SEAT_TYPE.ECONOMY,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      airplaneId: 4,
      row: 1,
      col: "F",
      type: SEAT_TYPE.ECONOMY,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      airplaneId: 4,
      row: 2,
      col: "A",
      type: SEAT_TYPE.ECONOMY,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      airplaneId: 4,
      row: 2,
      col: "B",
      type: SEAT_TYPE.ECONOMY,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      airplaneId: 4,
      row: 2,
      col: "C",
      type: SEAT_TYPE.ECONOMY,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      airplaneId: 4,
      row: 2,
      col: "D",
      type: SEAT_TYPE.ECONOMY,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      airplaneId: 4,
      row: 2,
      col: "E",
      type: SEAT_TYPE.ECONOMY,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      airplaneId: 4,
      row: 2,
      col: "F",
      type: SEAT_TYPE.ECONOMY,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
 
}
export async function down(queryInterface, Sequelize) {
  /**
   * Add commands to revert seed here.
   *
   * Example:
   * await queryInterface.bulkDelete('People', null, {});
   */
}
