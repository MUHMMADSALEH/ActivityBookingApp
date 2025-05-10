const Booking = require('../models/Booking');

class BookingRepository {
  async create(bookingData) {
    const booking = new Booking(bookingData);
    return booking.save();
  }

  async findByUser(userId) {
    return Booking.find({ user: userId })
      .populate('activity')
      .sort({ createdAt: -1 });
  }

  async findOne(bookingData) {
    return Booking.findOne(bookingData);
  }
}

module.exports = new BookingRepository(); 