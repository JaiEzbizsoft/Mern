import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isAuthPage }) => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  return (
      <header
      id="header"
      className={`header d-flex align-items-center sticky-top ${isAuthPage ? 'no-bg' : ''}`}
    >
      <div className="container position-relative d-flex align-items-center justify-content-between">
        {/* Logo */}
        <a
          href="#hero"
          className="logo d-flex align-items-center me-auto me-xl-0 text-decoration-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="#9b9f46" className="bi bi-fork-knife" viewBox="0 0 16 16">
            <path d="M13 .5c0-.276-.226-.506-.498-.465-1.703.257-2.94 2.012-3 8.462a.5.5 0 0 0 .498.5c.56.01 1 .13 1 1.003v5.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5zM4.25 0a.25.25 0 0 1 .25.25v5.122a.128.128 0 0 0 .256.006l.233-5.14A.25.25 0 0 1 5.24 0h.522a.25.25 0 0 1 .25.238l.233 5.14a.128.128 0 0 0 .256-.006V.25A.25.25 0 0 1 6.75 0h.29a.5.5 0 0 1 .498.458l.423 5.07a1.69 1.69 0 0 1-1.059 1.711l-.053.022a.92.92 0 0 0-.58.884L6.47 15a.971.971 0 1 1-1.942 0l.202-6.855a.92.92 0 0 0-.58-.884l-.053-.022a1.69 1.69 0 0 1-1.059-1.712L3.462.458A.5.5 0 0 1 3.96 0z" />
          </svg>
          <h1 className="sitename ms-2 mb-0">Saanjh by Rajasthan</h1>
        </a>

        {/* Nav Menu */}
        <nav id="navmenu" className="navmenu no-underline-links">
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu-section">Menu</a></li>
            <li><a href="#book-a-table">Book a Table</a></li>
            <li><a href="#chefs">Chefs</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list" />
        </nav>

        {/* Call to Action */}
        <a href="#book-a-table" className="btn-getstarted d-none d-sm-block">
          Book a Table
        </a>

        {/* Auth/Profile Section */}
        {username ? (
          <div className="position-relative ms-3">
            <div
              className="rounded-circle text-white fw-bold text-uppercase d-flex justify-content-center align-items-center profile-icon"
              onClick={toggleProfileMenu}
              style={{ width: "38px", height: "38px", cursor: "pointer" }}
            >
              {username[0]}
            </div>

            {showProfileMenu && (
              <div className="dropdown-menu show p-2 position-absolute end-0 mt-2 border rounded shadow" style={{ minWidth: "150px", zIndex: 1000 }}>
                <div className="dropdown-item-text fw-semibold text-muted small mb-1">
                  {username}
                </div>
                <hr className="my-1" />
                <button className="dropdown-item text-danger small" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="btn btn-sm btn-outline-primary ms-3">
            Login
          </Link>
        )}
      </div>

      {/* Style */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        .profile-icon {
          background-color: #878f47;
          transition: transform 0.2s ease;
        }
        .profile-icon:hover {
          transform: scale(1.05);
        }
        .dropdown-menu {
          background: #fff;
        }
        .dropdown-item:hover {
          background: #f8f9fa;
        }
        .btn-outline-primary {
          border-color: #878f47;
          color: #878f47;
        }
        .btn-outline-primary:hover {
          background-color: #878f47;
          color: #fff;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
