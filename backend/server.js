const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // For .env support

const app = express();
const PORT = process.env.PORT || 5000;

// ======== MIDDLEWARE ========
app.use(cors());
app.use(express.json());

// Serve uploaded images statically
app.use('/uploads', express.static('uploads')); // Ensure 'uploads' folder exists

// ======== MONGO CONNECTION ========
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected'))
.catch((err) => console.error('❌ MongoDB Connection Error:', err));

// ======== ROUTES ========
app.use('/api/auth', require('./routes/auth'));              // Auth routes
app.use('/api/category', require('./routes/category'));      // Category routes
app.use('/api/menu-items', require('./routes/menuitems'));  // Menu item routes
app.use('/api/bookings', require('./routes/bookingRoutes'));
; // ✅ New Booking routes (added)

// ======== START SERVER ========
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
