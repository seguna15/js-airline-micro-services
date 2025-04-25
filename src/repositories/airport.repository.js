import CrudRepository from "./crud.repository.js";
import db from "../models/index.js";

const Airport = db.sequelize.models.Airport;


export default class AirportRepository extends CrudRepository {
  constructor() {
    super(Airport);
  }
}


