const express = require('express');
const router = express.Router();
const MenuItem = require('../models/menuitems');
const multer = require('multer');
const path = require('path');
const Category = require('../models/category');

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
    console.log('📥 Body:', req.body);
    console.log('📸 File:', req.file);

    const { title, price, description, category } = req.body; // ✅ FIXED: get `category` directly

    const image = req.file ? `/uploads/${req.file.filename}` : '';

    const menuItem = new MenuItem({
      title,
      price,
      description,
      image,
      category, // ✅ FIXED: use correct field
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

// =======================
// GET /api/menu-items/:category → Get Items by Category
// =======================
// GET /api/menu-items/:categoryId → fetch items by category ID
// GET /api/menu/:categoryName
// GET /api/menu/:categoryName
// ✅ Get items by category name (case-insensitive)
router.get('/:category', async (req, res) => {
  try {
    const categoryParam = req.params.category;

    // Find category by name (case-insensitive match)
    const category = await Category.findOne({
      name: { $regex: new RegExp(`^${categoryParam}$`, 'i') },
    });

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    // Find all items that match the category _id
    const items = await MenuItem.find({ category: category._id });

    res.json(items);
  } catch (err) {
    console.error('❌ Error fetching items by category:', err);
    res.status(500).json({ message: 'Failed to fetch items' });
  }
});




module.exports = router;
