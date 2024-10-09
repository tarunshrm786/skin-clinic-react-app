// import React from 'react';
// import '../css/VideoSection.css';
// import Header from './Header'; // Import the Header component

// const VideoSection = () => {
//   return (
//     <div className="video-section">
//       {/* Add the Header */}
//       <Header />

//       {/* Video Background */}
//       <video autoPlay loop muted className="background-video">
//         <source src="/video.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Content Section */}
//       <div className="content">
//         <h1>Welcome to the Skin Clinic</h1>
//         <p>Discover the best treatments for your skin</p>

//         {/* Call to Action Buttons */}
//         <div className="button-group">
//           <button className="btn call-btn">Call Now</button>
//           <button className="btn book-btn">Book Now</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoSection;

// VideoSection.js
import React, { useState } from 'react';
import '../css/VideoSection.css';
import Header from './Header'; // Import the Header component
import BookingModal from '../components/BookingModal'; // Import the BookingModal component

const VideoSection = () => {
  const [isModalOpen, setModalOpen] = useState(false); // State for modal visibility

  const handleBookNowClick = () => {
    setModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Close the modal
  };

  return (
    <div className="video-section">
      {/* Add the Header */}
      <Header />

      {/* Video Background */}
      <video autoPlay loop muted className="background-video">
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Section */}
      <div className="content">
        <h1>Welcome to the Skin Clinic</h1>
        <p>Discover the best treatments for your skin</p>

        {/* Call to Action Buttons */}
        <div className="button-group">
          <button className="btn call-btn">Call Now</button>
          <button className="btn book-btn" onClick={handleBookNowClick}>Book Now</button>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default VideoSection;
