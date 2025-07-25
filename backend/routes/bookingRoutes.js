const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const nodemailer = require('nodemailer');
require('dotenv').config();  // To use environment variables for sensitive info

// POST: Submit booking
router.post('/book', async (req, res) => {
  try {
    const { name, email, phone, people, date, time, message } = req.body;
    if (!name || !email || !phone || !people || !date || !time) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const booking = new Booking(req.body);
    await booking.save();

    // Send booking received email
    sendMail(booking.email, 'Booking Received', 'We’ve received your booking request!');

    res.status(200).json({ message: 'Booking saved successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
});

// GET: All bookings (for admin)
router.get('/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve bookings.' });
  }
});

router.get('/total',async (req, res) => {
  try{
    const totalbooking = await Booking.countDocuments();
    res.json({ total: totalbooking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve total bookings.' });
  }
} )
// PUT: Approve / Reject booking
router.put('/booking/:id/status', async (req, res) => {
  const { status } = req.body;

  // Validate the status value
  if (!['approved', 'rejected'].includes(status)) {
    return res.status(400).json({ error: 'Invalid status value.' });
  }

  try {
    // Find the booking and update the status
    const booking = await Booking.findByIdAndUpdate(req.params.id, { status }, { new: true });

    if (booking) {
      // Email message
      const msg =
        status === 'approved'
          ? 'Your table booking is confirmed!'
          : 'Sorry, your booking request was rejected.';

      // Send an email to the customer
      await sendMail(booking.email, 'Booking Status Update', msg);
      return res.json(booking);  // Respond with the updated booking
    } else {
      return res.status(404).json({ error: 'Booking not found.' });
    }
  } catch (err) {
    console.error('Error updating booking:', err);
    res.status(500).json({ error: 'Failed to update booking status.' });
  }
});

// Send email function
const sendMail = (to, subject, message) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Saanjh by Rajasthan" <${process.env.GMAIL_USER}>`,
    to,
    subject,
    html: `<p>${message}</p>`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error('Error sending email:', err);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};
module.exports = router;
