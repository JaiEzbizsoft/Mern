import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuthPage }) => {
  return (
    <header
      id="header"
      className={`header d-flex align-items-center sticky-top ${
        isAuthPage ? 'no-bg' : ''
      }`}
    >
      <div className="container position-relative d-flex align-items-center justify-content-between">
        <Link
          to="/"
          className="logo d-flex align-items-center me-auto me-xl-0 text-decoration-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            fill="#9b9f46"
            className="bi bi-fork-knife"
            viewBox="0 0 16 16"
          >
            <path d="M13 .5c0-.276-.226-.506-.498-.465-1.703.257-2.94 2.012-3 8.462a.5.5 0 0 0 .498.5c.56.01 1 .13 1 1.003v5.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5zM4.25 0a.25.25 0 0 1 .25.25v5.122a.128.128 0 0 0 .256.006l.233-5.14A.25.25 0 0 1 5.24 0h.522a.25.25 0 0 1 .25.238l.233 5.14a.128.128 0 0 0 .256-.006V.25A.25.25 0 0 1 6.75 0h.29a.5.5 0 0 1 .498.458l.423 5.07a1.69 1.69 0 0 1-1.059 1.711l-.053.022a.92.92 0 0 0-.58.884L6.47 15a.971.971 0 1 1-1.942 0l.202-6.855a.92.92 0 0 0-.58-.884l-.053-.022a1.69 1.69 0 0 1-1.059-1.712L3.462.458A.5.5 0 0 1 3.96 0z" />
          </svg>
          <h1 className="sitename ms-2 mb-0">Saanjh by Rajasthan</h1>
        </Link>

        <nav id="navmenu" className="navmenu no-underline-links">
          <ul>
            <li><Link to="/#hero" className="text-decoration-none">Home</Link></li>
            <li><Link to="/#about" className="text-decoration-none">About</Link></li>
            <li><Link to="/#menu" className="text-decoration-none">Menu</Link></li>
            <li><Link to="/#book-a-table" className="text-decoration-none">Book a Table</Link></li>
            <li><Link to="/#chefs" className="text-decoration-none">Chefs</Link></li>
            <li><Link to="/#events" className="text-decoration-none">Events</Link></li>
            <li className="dropdown">
              <Link to="#" className="text-decoration-none">
                <span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown" />
              </Link>
              <ul>
                <li><Link to="#" className="text-decoration-none">Dropdown 1</Link></li>
                <li className="dropdown">
                  <Link to="#" className="text-decoration-none">
                    <span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown" />
                  </Link>
                  <ul>
                    <li><Link to="#" className="text-decoration-none">Deep Dropdown 1</Link></li>
                    <li><Link to="#" className="text-decoration-none">Deep Dropdown 2</Link></li>
                    <li><Link to="#" className="text-decoration-none">Deep Dropdown 3</Link></li>
                    <li><Link to="#" className="text-decoration-none">Deep Dropdown 4</Link></li>
                    <li><Link to="#" className="text-decoration-none">Deep Dropdown 5</Link></li>
                  </ul>
                </li>
                <li><Link to="#" className="text-decoration-none">Dropdown 2</Link></li>
                <li><Link to="#" className="text-decoration-none">Dropdown 3</Link></li>
                <li><Link to="#" className="text-decoration-none">Dropdown 4</Link></li>
              </ul>
            </li>
            <li><Link to="/#contact" className="text-decoration-none">Contact</Link></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list" />
        </nav>

        <Link to="/#book-a-table" className="btn-getstarted d-none d-sm-block text-decoration-none">
          Book a Table
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
