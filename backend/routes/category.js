const express = require('express');
const router = express.Router();
const Category = require('../models/category');
const multer = require('multer');
const path = require('path');

// ========= Multer Setup for Category Image Upload ==========
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Make sure uploads/ folder exists
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// ========= POST /api/category → Add New Category ==========
// category.js
router.post('/', upload.single('image'), async (req, res) => {
  try {
    console.log('📥 Category Body:', req.body);
    console.log('📸 Category File:', req.file);

    const { name } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : '';

    const newCategory = new Category({ name, image });
    const saved = await newCategory.save(); // ✅ This was the missing line

    res.status(201).json(saved);
  } catch (err) {
    console.error('🔥 Error adding category:', err);
    res.status(500).json({ message: 'Failed to add category' });
  }
});


// ========= GET /api/category → Get All Categories ==========
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    console.error('Error fetching categories:', err);
    res.status(500).json({ message: 'Failed to fetch categories' });
  }
}); 


// get total api 

router.get('/total', async (req, res) => {
  try {
    const total = await Category.countDocuments();
    res.json({ total });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching total categories' });
  }
});

module.exports = router;
