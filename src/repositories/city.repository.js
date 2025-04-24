import CrudRepository from "./crud.repository.js";
import db from "../models/index.js";

const City = db.sequelize.models.City;


export default class CityRepository extends CrudRepository {
  constructor() {
    super(City);
  }
}


