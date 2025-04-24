import CrudRepository from "./crud.repository.js";
import db from "../models/index.js";

const Airplane = db.sequelize.models.Airplane;


export default class AirplaneRepository extends CrudRepository {
  constructor() {
    super(Airplane);
  }
}


