// --- FIXED CategoryForm.jsx ---
import React, { useState } from 'react';
import axios from 'axios';

const CategoryForm = () => {
  const [form, setForm] = useState({
    name: '',
    image: '',
  });

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
      const formData = new FormData();
      formData.append('name', form.name);
      if (form.image) formData.append('image', form.image);

      await axios.post('http://localhost:5000/api/category', formData);

      alert('Category added!');
      setForm({ name: '', image: '' });
    } catch (err) {
      console.error('Error adding category:', err);
      alert('Failed to add category');
    }
  };

  return (
    <div className="container py-5" style={{ maxWidth: '600px' }}>
      <h2 className="text-center mb-4" style={{ color: '#889048' }}>
        Add New Category
      </h2>

      <form
        onSubmit={handleSubmit}
        className="p-4 border rounded shadow"
        style={{ backgroundColor: '#fdfdf6' }}
        encType="multipart/form-data"
      >
        <div className="mb-3">
          <label className="form-label fw-bold">Category Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="form-control"
            placeholder="e.g. Beverages"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Optional Image</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}

            className="form-control"
            accept="image/*"
          />

          
        </div>

        <div className="text-center">
          <button type="submit" className="btn" style={{ background: '#889048', color: '#fff' }}>
            Add Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default CategoryForm;
