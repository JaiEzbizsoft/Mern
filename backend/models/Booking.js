const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    people: String,
    date: String,
    time: String,
    message: String,
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Booking', bookingSchema);
