"use strict";

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.removeConstraint(
    "Airports",
    "city_fkey_constraint_name"
  );
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.addConstraint("Airports", {
    fields: ["cityId"],
    type: "foreignKey",
    name: "city_fkey_constraint_name",
    references: {
      table: "Cities",
      field: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  });
}
