const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // For .env support

const app = express();
const PORT = process.env.PORT || 5000;

// ======== MIDDLEWARE ========
app.use(cors());
app.use(express.json());

// Serve uploaded images statically (public access)
app.use('/uploads', express.static('uploads')); // Make sure /uploads folder exists

// ======== MONGO CONNECTION ========
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected'))
.catch((err) => console.error('❌ MongoDB Connection Error:', err));

// ======== ROUTES ========
app.use('/api/auth', require('./routes/auth'));              // Auth routes
app.use('/api/category', require('./routes/category'));      // Category routes (image upload, name)
app.use('/api/menu-items', require('./routes/menuitems')); // ✅ Correct
       // Menu item routes (upload, link to category)

// ======== START SERVER ========
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
