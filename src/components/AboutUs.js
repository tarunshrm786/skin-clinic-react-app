// import React from 'react';
// import '../css/AboutUs.css'; // Import your custom CSS for styling
// //import aboutImage from '../images/about-image.jpg'; // Replace with your image path

// const AboutUs = () => {
//   return (
//     <section className="about-us-section">
//       <div className="about-us-container">
//         {/* Left Side: Image */}
//         <div className="about-image">
//           <img src="/dr-geeta.png" alt="About Us" />
//         </div>
        
//         {/* Right Side: Text */}
//         <div className="about-text">
//           <h1>About Us</h1>
//           <h2>DR. GEETA MEHRA FAZALBHOY</h2>
//           <p>
//           Dr. Geeta Mehra Fazalbhoy, MD & Founder of Skin & You Clinic, Mumbai, is a globally recognized expert in dermatology and aesthetic medicine. With advanced international training and certifications, she specializes in cutting-edge, pain-free treatments for skin tightening, pigmentation, and body contouring. Her clinic is ranked among the top in India, attracting patients worldwide.


//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;

import React from 'react';
import '../css/AboutUs.css'; // Import your custom CSS for styling

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-container">
        {/* Left Side: Image */}
        <div className="about-image">
          <img src="/dr-geeta.png" alt="About Us" />
        </div>
        
        {/* Right Side: Text */}
        <div className="about-text">
          <h1>About Us</h1>
          <h2>DR. GEETA MEHRA FAZALBHOY</h2>
          <p>
            Dr. Geeta Mehra Fazalbhoy, MD & Founder of Skin & You Clinic, Mumbai, is a globally recognized expert in dermatology and aesthetic medicine. With advanced international training and certifications, she specializes in cutting-edge, pain-free treatments for skin tightening, pigmentation, and body contouring. Her clinic is ranked among the top in India, attracting patients worldwide.
          </p>
          {/* Buttons */}
          <div className="button-container">
            <button className="know-more-button">Know More</button>
            <button className="call-now-button">Instagram</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
