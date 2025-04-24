import { StatusCodes } from "http-status-codes";
import AppError from "../utils/errors/app.error.js";
import { Logger } from "../utils/index.js";

export default class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
   const response = await this.model.create(data);
   return response;
  }

  async destroy(data) {
   const response = await this.model.destroy({
     where: {
       id: data,
     },
   });
   return response;
  }

  async get(data) {
    const response = await this.model.findByPk(data);
    if(!response){
      throw new AppError(["Not able to find the resource"], StatusCodes.NOT_FOUND)
    }
    return response;
  }

  async getAll() {
    const response = await this.model.findAll();
    return response;
  }

  async update(id, data) {
    const response = await this.model.update(data, {
      where: {
        id,
      },
    });
    return response;
  }
}

