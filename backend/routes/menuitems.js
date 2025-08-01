const express = require('express');
const router = express.Router();
const MenuItem = require('../models/menuitems');
const Category = require('../models/category');
const multer = require('multer');
const path = require('path');

// =======================
// Multer Configuration for File Upload
// =======================
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  },
});
const upload = multer({ storage });

// =======================
// POST /api/menu-items → Add New Menu Item
// =======================
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { title, price, description, category } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : '';

    const menuItem = new MenuItem({
      title,
      price,
      description,
      image,
      category,
    });

    const savedItem = await menuItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    console.error('🔥 Error adding menu item:', err);
    res.status(500).json({ message: 'Failed to add menu item', error: err.message });
  }
});

// =======================
// GET /api/menu-items/categories → Get All Categories
// =======================
router.get('/categories', async (req, res) => {
  try {
    const categories = await Category.find().sort({ name: 1 });
    res.json(categories);
  } catch (err) {
    console.error('Error fetching categories:', err);
    res.status(500).json({ message: 'Failed to get categories' });
  }
});

// ✅ This must come before the dynamic :category route
router.get('/total', async (req, res) => {
  try {
    const total = await MenuItem.countDocuments();
    res.json({ total });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching total items' });
  }
});

// =======================
// GET /api/menu-items/:category → Get Items by Category Slug
// =======================
router.get('/:category', async (req, res) => {
  try {
    const categoryParam = req.params.category;
    const formattedName = categoryParam.replace(/-/g, ' ').trim(); // ✅ convert "south-indian" → "South Indian"

    // Find the category (case-insensitive match)
   const category = await Category.findOne({
  name: { $regex: new RegExp(`${formattedName.replace(/\s+/g, '\\s*')}`, 'i') },
});

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    // Find all menu items in this category
    const items = await MenuItem.find({ category: category._id });
    res.json(items);
  } catch (err) {
    console.error('❌ Error fetching items by category:', err);
    res.status(500).json({ message: 'Failed to fetch items' });
  }
});

module.exports = router;
