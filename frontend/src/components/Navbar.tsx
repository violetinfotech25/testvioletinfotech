import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/image/logo/L-5.png';
import '../assets/css/navbar.css';

const digitalMarketingItems = [
  { name: 'Online Marketing', url: '/digital-marketing' },  
  { name: 'SEO Services Overview', url: '/digital-marketing/SEO-Service' },
  { name: 'Internet Marketing Services', url: '/digital-marketing/internet-marketing-services' },
  { name: 'Content Marketing Services', url: '/digital-marketing/Content-Marketing-Service' },
];

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light custom-navbar">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo on Left */}
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Violet Infotech Logo" className="nav-logo" />
        </Link>

        {/* Toggler on Right */}
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav nav-links align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li
              className={`nav-item dropdown ${showDropdown ? 'show' : ''}`}
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <Link
                className="nav-link dropdown-toggle"
                to="/digital-marketing"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={showDropdown ? 'true' : 'false'}
              >
                Digital Marketing
              </Link>
              <ul
                className={`dropdown-menu ${showDropdown ? 'show' : ''}`}
                aria-labelledby="navbarDropdownMenuLink"
              >
                {digitalMarketingItems.map((item, idx) => (
                  <li key={idx}>
                    <Link className="dropdown-item" to={item.url}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/web-design">Web Design</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/branding">Branding</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/plans">Plans</Link>
            </li>

            <li className="nav-item ms-lg-3">
              <Link to="/contact" className="btn btn-primary contact-btn">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;