// controllers/categoryController.js

const Category = require('../models/category');

// GET all categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    console.error("Failed to fetch categories", error);
    res.status(500).json({ message: 'Failed to fetch categories' });
  }
};

// POST new category
exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : '';

    const newCategory = new Category({ name, image });
    await newCategory.save();

    res.status(201).json(newCategory);
  } catch (error) {
    console.error("Failed to add category", error);
    res.status(500).json({ message: 'Failed to add category' });
  }
};
