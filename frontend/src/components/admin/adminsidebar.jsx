import React from 'react';
import { FaBars, FaHome, FaTable, FaUtensils, FaPlus, FaSignOutAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const AdminSidebar = ({ isOpen, toggle }) => {
  const sidebarStyle = {
    width: isOpen ? 250 : 60,
    backgroundColor: '#1d1d1d',
    color: '#fff',
    height: '100vh',
    transition: 'width 0.3s ease',
    overflowX: 'hidden',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  };

  const headerStyle = {
    padding: '15px',
    borderBottom: '1px solid #333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: isOpen ? 'space-between' : 'center',
  };

  const navStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '15px',
  };

  const navItems = [
    { label: 'Dashboard', icon: <FaHome />, path: '/' },
{ label: 'Bookings', icon: <FaTable />, path: '/admin/bookings' },
    { label: 'Add Category', icon: <FaPlus />, path: '/add-category' },
    { label: 'Add Items', icon: <FaUtensils />, path: '/add-items' },
    { label: 'Logout', icon: <FaSignOutAlt />, path: '/logout' },
  ];

  return (
    <div style={sidebarStyle}>
      <div style={headerStyle}>
        {isOpen && <span style={{ fontWeight: 'bold' }}>Admin</span>}
        <FaBars onClick={toggle} style={{ cursor: 'pointer' }} />
      </div>
      <nav style={navStyle}>
        {navItems.map((item, idx) => (
          <NavLink
            key={idx}
            to={item.path}
            style={({ isActive }) => ({
              display: 'flex',
              alignItems: 'center',
              color: '#fff',
              textDecoration: 'none',
              padding: '10px',
              borderRadius: '5px',
              backgroundColor: isActive ? '#333' : '#2b2b2b',
              transition: 'background 0.3s',
            })}
          >
            <span style={{ width: '30px', textAlign: 'center' }}>{item.icon}</span>
            {isOpen && <span style={{ marginLeft: '10px' }}>{item.label}</span>}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default AdminSidebar;
