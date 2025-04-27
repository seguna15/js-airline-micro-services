'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.addConstraint("Airports", {
    type: "FOREIGN KEY",
    name: "city_fkey_constraint_name",
    fields: ["cityId"],
    references: {
      table: "Cities",
      field: "id",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.removeConstraint(
    "Airports",
    "city_fkey_constraint_name"
  );
}
