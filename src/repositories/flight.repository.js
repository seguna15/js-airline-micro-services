import CrudRepository from "./crud.repository.js";
import db from "../models/index.js";
import { Sequelize } from "sequelize";

const Flight = db.sequelize.models.Flight;
const Airplane = db.sequelize.models.Airplane;
const Airport = db.sequelize.models.Airport;
const City = db.sequelize.models.City;

export default class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight);
  }

  async getAllFlights(filter, sort){
    const response = await Flight.findAll({
      where: filter,
      order: sort,
      include: [
        {
          model: Airplane,
          required: true,
          as: "airplaneDetail",
        },
        {
          model: Airport,
          required: true,
          as: "departureAirportDetail",
          on: {
            col1: Sequelize.where(
              Sequelize.col("Flight.departureAirport"),
              "=",
              Sequelize.col("departureAirportDetail.code")
            ),
          },
          include: {
            model: City,
            required: true,
            as: "cityDetail",
          },
        },
        {
          model: Airport,
          required: true,
          as: "arrivalAirportDetail",
          on: {
            col1: Sequelize.where(
              Sequelize.col("Flight.arrivalAirport"),
              "=",
              Sequelize.col("arrivalAirportDetail.code")
            ),
          },
          include: {
            model: City,
            required: true,
            as: "cityDetail",
          },
        },
      ],
    });
    return response;
  }
}


