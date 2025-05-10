const { validationResult } = require('express-validator');
const bookingRepository = require('../repositories/BookingRepository');
const activityRepository = require('../repositories/ActivityRepository');

class BookingController {
  async createBooking(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { activityId } = req.body;
      const userId = req.user.userId;

      const activity = await activityRepository.findById(activityId);
      if (!activity) {
        return res.status(404).json({ message: 'Activity not found' });
      }

      const existingBooking = await bookingRepository.findOne({
        user: userId,
        activity: activityId
      });

      if (existingBooking) {
        return res.status(400).json({ message: 'You have already booked this activity' });
      }

      const booking = await bookingRepository.create({
        user: userId,
        activity: activityId,
        status: 'pending'
      });

      res.status(201).json({
        message: 'Booking created successfully',
        booking: {
          id: booking._id,
          activity: booking.activity,
          status: booking.status,
          createdAt: booking.createdAt
        }
      });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  }

  async getMyBookings(req, res) {
    try {
      const userId = req.user.userId;
      const bookings = await bookingRepository.findByUser(userId);
      res.json(bookings.map(booking => ({
        id: booking._id,
        activity: booking.activity,
        status: booking.status,
        createdAt: booking.createdAt
      })));
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  }
}

module.exports = new BookingController(); 