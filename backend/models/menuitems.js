const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, default: '' },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }, // ✅ Reference
  description: { type: String },
  price: { type: Number }
});

module.exports = mongoose.model('MenuItem', MenuItemSchema);
