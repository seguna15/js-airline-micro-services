import BookingRepository from "../repositories/booking.repository.js";

export default class BookingService {

  constructor() {
    this.bookingRepository = new BookingRepository;
  }


  async createBooking(bookingData) {
    return await this.bookingRepository.create(bookingData);
  }

  async getBookingById(id) {
    return await this.bookingRepository.get(id);
  }

  async getAllBookings() {
    return await this.bookingRepository.getAll();
  }

  async updateBooking(id, bookingData) {
    return await this.bookingRepository.update(id, bookingData);
  }

  async deleteBooking(id) {
    return await this.bookingRepository.destroy(id);
  }

}