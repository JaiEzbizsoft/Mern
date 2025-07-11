// --- FIXED MenuForm.jsx ---
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MenuForm = () => {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({
    title: '',
    category: '',
    image: '',
    price: '',
    description: '',
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/category'); // FIXED
        setCategories(res.data);
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append('title', form.title);
      data.append('category', form.category); // ✅ FIXED HERE
      data.append('image', form.image);
      data.append('price', form.price);
      data.append('description', form.description);
  
      console.log("Submitting form:", Object.fromEntries(data.entries())); // ✅ Add this log to debug
  
      await axios.post('http://localhost:5000/api/menu-items', data);
  
      alert('Item added!');
      setForm({ title: '', category: '', image: '', price: '', description: '' });
    } catch (err) {
      console.error('Error adding menu item:', err);
      alert('Failed to add item');
    }
  };
  

  return (
    <div className="container py-5" style={{ maxWidth: '600px' }}>
      <h2 className="text-center mb-4" style={{ color: '#889048' }}>
        Add New Menu Item
      </h2>

      <form
        onSubmit={handleSubmit}
        className="p-4 border rounded shadow"
        style={{ backgroundColor: '#fdfdf6' }}
        encType="multipart/form-data"
      >
        <div className="mb-3">
          <label className="form-label fw-bold">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Price (₹)</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            className="form-control"
            required
            min="0"
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="form-control"
            rows="3"
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn" style={{ background: '#889048', color: '#fff' }}>
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default MenuForm;
