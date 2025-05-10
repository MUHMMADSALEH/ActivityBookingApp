const express = require('express');
const router = express.Router();
const BookingController = require('../controllers/BookingController');
const auth = require('../middlewares/auth');
const { bookingValidator } = require('../middlewares/validators');

router.post('/', auth, bookingValidator, BookingController.createBooking);
router.get('/me', auth, BookingController.getMyBookings);

module.exports = router; 