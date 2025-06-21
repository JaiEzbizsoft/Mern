// Signup.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/register', form);
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      alert(err.response.data.error || 'Signup failed');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 400 }}>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="form-control my-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="form-control my-2"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="form-control my-2"
        />
        <button type="submit" className="btn btn-primary w-100">
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;
