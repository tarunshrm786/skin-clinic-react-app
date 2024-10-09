import React from 'react';
import '../css/Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-menu">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#treatments">Treatments</a></li>
          <li><a href="#concern">Treatment by Concern</a></li>
          <li><a href="#media">Media</a></li>
          <li><a href="#aboutus">About Us</a></li>
          <li><a href="#contactus">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

// import React from 'react';
// import '../css/Header.css';

// const Header = () => {
//   return (
//     <header className="header">
//       <nav className="nav-menu">
//         <ul>
//           <li><a href="#home">Home</a></li>
//           <li className="dropdown">
//             <a href="#treatments" className="dropdown-link">Treatments</a>
//             <ul className="dropdown-menu">
//               <li><a href="#concern">Treatment by Concern</a></li>
//               <li><a href="#skin-care">Skin Care</a></li>
//               <li><a href="#hair-care">Hair Care</a></li>
//               <li><a href="#anti-aging">Anti-aging</a></li>
//             </ul>
//           </li>
//           <li><a href="#media">Media</a></li>
//           <li><a href="#aboutus">About Us</a></li>
//           <li><a href="#contactus">Contact Us</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
