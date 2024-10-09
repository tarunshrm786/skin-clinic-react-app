// import React from 'react';
// import '../css/Footer.css';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         {/* First Column: Get In Touch */}
//         <div className="footer-column">
//           <h3>Get In Touch</h3>
//           <p>
//             Let's Connect and Make Your Vision a Reality. Reach Out Today!
//           </p>
//           <p>Skin & You Clinic, 115 B Mittal Court, Nariman Point, Mumbai – 21.</p>
//           <p>Email: <a href="mailto:helpdesk@skinandyou.in">helpdesk@skinandyou.in</a></p>
//           <p>Phone: <a href="tel:+919920033331">+91 99200 33331</a></p>
//         </div>
        
//         {/* Second Column: Quick Links */}
//         <div className="footer-column">
//           <h3>Quick Links</h3>
//           <ul>
//             <li><a href="#treatments">Treatments</a></li>
//             <li><a href="#skin-faq">Skin & FAQ</a></li>
//             <li><a href="#photogallery">Photogallery</a></li>
//             <li><a href="#blogs">Blogs</a></li>
//             <li><a href="#about-us">About Us</a></li>
//             <li><a href="#prepare-appointment">How to Prepare for an Appointment</a></li>
//           </ul>
//         </div>
        
//         {/* Third Column: Newsletter */}
//         <div className="footer-column">
//           <h3>Newsletter</h3>
//           <p>Subscribe to our newsletter to get the latest updates!</p>
//           <input type="email" placeholder="Your Email Address" />
//           <button>Subscribe</button>
//           <div className="follow-us">
//             <h4>Follow Us</h4>
//             <p>Follow us on our social media channels for more updates!</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; // Importing social media icons
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* First Column: Get In Touch */}
        <div className="footer-column">
          <h3>Get In Touch</h3>
          <p>
            Let's Connect and Make Your Vision a Reality. Reach Out Today!
          </p>
          <p>Skin & You Clinic, 115 B Mittal Court, Nariman Point, Mumbai – 21.</p>
          <p>Email: <a href="mailto:helpdesk@skinandyou.in">helpdesk@skinandyou.in</a></p>
          <p>Phone: <a href="tel:+919920033331">+91 99200 33331</a></p>
        </div>
        
        {/* Second Column: Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#treatments">Treatments</a></li>
            <li><a href="#skin-faq">Skin & FAQ</a></li>
            <li><a href="#photogallery">Photogallery</a></li>
            <li><a href="#blogs">Blogs</a></li>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#prepare-appointment">How to Prepare for an Appointment</a></li>
          </ul>
        </div>
        
        {/* Third Column: Newsletter */}
        <div className="footer-column">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter to get the latest updates!</p>
          <input type="email" placeholder="Your Email Address" />
          <button>Subscribe</button>
          <div className="follow-us">
            <h4>Follow Us</h4>
            <p>Follow us on our social media channels for more updates!</p>
            {/* Social Media Icons */}
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/skinandyou.clinic/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
