import CrudRepository from "./crud.repository.js";
import db from "../models/index.js";

const Booking = db.sequelize.model.Booking;

export default class BookingRepository extends CrudRepository{
    constructor(){
        super(Booking);
    }
    
}