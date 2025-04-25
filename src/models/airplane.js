import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Airplane extends Model {
    static associate(models) {
      // define association here
      this.hasMany(models.Flight, {
        foreignKey: "airplaneId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    }
  }
  Airplane.init(
    {
      modelNumber: { type: DataTypes.STRING, allowNull: false, validate: { notEmpty: true, isAlphanumeric: true } },
      capacity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0, validate: { min: 0 , max: 1000} },
    },
    {
      sequelize,
      modelName: "Airplane",
    }
  );
  return Airplane;
};