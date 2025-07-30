// pages/admin/login.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AdminLogin = () => {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card shadow-lg border-0" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="card-body p-4">
          <h2 className="text-center mb-3 fw-bold" style={{ color: '#8B0000' }}>
            Saanjh by Rajasthan
          </h2>
          <h5 className="text-center mb-4">Admin Login</h5>

          <form>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" placeholder="admin@saanjh.com" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="••••••••" />
            </div>

            <button type="submit" className="btn btn-dark w-100">
              Login
            </button>
          </form>

          <div className="text-center mt-3">
            <small>
              New Admin? <Link to="/admin/signup">Create Account</Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
