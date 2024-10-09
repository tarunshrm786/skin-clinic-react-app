// import React from 'react';
// import '../css/Header.css';

// const Header = () => {
//   return (
//     <header className="header">
//       <nav className="nav-menu">
//         <ul>
//           <li><a href="#home">Home</a></li>
//           <li><a href="#treatments">Treatments</a></li>
//           <li><a href="#concern">Treatment by Concern</a></li>
//           <li><a href="#media">Media</a></li>
//           <li><a href="#aboutus">About Us</a></li>
//           <li><a href="#contactus">Contact Us</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React from 'react';
import '../css/Header.css';
import { FaSearch } from 'react-icons/fa'; // Import search icon

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Left: Logo */}
        <div className="logo">
          <img src="/logo-2.png" alt="Logo" />
        </div>

        {/* Middle: Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button className="search-btn">
            <FaSearch />
          </button>
        </div>

        {/* Right: Navigation Menu */}
        <nav className="nav-menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#treatments">Treatments</a></li>
            <li className="dropdown">
              <a href="#concern">Treatment by Concern</a>
              {/* Dropdown for Treatment by Concern */}
              <ul className="dropdown-menu">
                <li><a href="#concern1">Concern 1</a></li>
                <li><a href="#concern2">Concern 2</a></li>
              </ul>
            </li>
            <li><a href="#media">Media</a></li>
            <li className="dropdown">
              <a href="#aboutus">About Us</a>
              {/* Dropdown for About Us */}
              <ul className="dropdown-menu">
                <li><a href="#history">History</a></li>
                <li><a href="#team">Our Team</a></li>
              </ul>
            </li>
            <li><a href="#contactus">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
