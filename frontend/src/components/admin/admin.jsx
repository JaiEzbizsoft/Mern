import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Admin = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname.includes(path);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#faf6f0' }}>
      {/* Header */}
      <header
        style={{
          backgroundColor: '#889048',
          color: '#fff',
          padding: '20px 0',
          textAlign: 'center',
          letterSpacing: '1px',
        }}
      >
        <h2 style={{ marginBottom: '5px', fontWeight: 'bold' }}>Saanjh Admin Dashboard</h2>
        <p style={{ margin: 0 }}>Manage Menu & Categories</p>
      </header>

      {/* Main Content */}
      <div style={{ padding: '40px 20px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div
            style={{
              background: '#ffffff',
              padding: '30px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              borderLeft: '6px solid #889048',
            }}
          >
            {/* Nav Buttons */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                marginBottom: '30px',
              }}
            >
              <Link
                to="menu"
                style={{
                  textDecoration: 'none',
                  padding: '10px 25px',
                  borderRadius: '6px',
                  border: '2px solid #889048',
                  backgroundColor: isActive('menu') ? '#889048' : 'transparent',
                  color: isActive('menu') ? '#fff' : '#889048',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                }}
              >
                Add Menu Item
              </Link>

              <Link
                to="category"
                style={{
                  textDecoration: 'none',
                  padding: '10px 25px',
                  borderRadius: '6px',
                  border: '2px solid #889048',
                  backgroundColor: isActive('category') ? '#889048' : 'transparent',
                  color: isActive('category') ? '#fff' : '#889048',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                }}
              >
                Add Category
              </Link>
            </div>

            {/* Form Outlet */}
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
