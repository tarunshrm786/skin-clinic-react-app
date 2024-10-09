// import React, { useState } from 'react';
// import '../css/VideoSection.css';
// import Header from './Header'; // Import the Header component
// import BookingModal from '../components/BookingModal'; // Import the BookingModal component

// const VideoSection = () => {
//   const [isModalOpen, setModalOpen] = useState(false); // State for modal visibility

//   const handleBookNowClick = () => {
//     setModalOpen(true); // Open the modal
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false); // Close the modal
//   };

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
//         <h1>Welcome to the Skin & You Clinic</h1>
//         <p>Instantly Smooth Away Wrinkles and Scars for a Fresh, Youthful Glow</p>

//         {/* Call to Action Buttons */}
//         <div className="button-group">
//           <button className="btn call-btn">Call Now</button>
//           <button className="btn book-btn" onClick={handleBookNowClick}>
//             Book Now
//           </button>
//         </div>
//       </div>

//       {/* Booking Modal */}
//       <BookingModal open={isModalOpen} handleClose={handleCloseModal} />
//     </div>
//   );
// };

// export default VideoSection;

import React, { useState, useEffect, useRef } from 'react';
import '../css/VideoSection.css';
import Header from './Header'; // Import the Header component
import BookingModal from '../components/BookingModal'; // Import the BookingModal component

const VideoSection = () => {
  const [isModalOpen, setModalOpen] = useState(false); // State for modal visibility
  const [videoLoaded, setVideoLoaded] = useState(false); // State to track video loading
  const videoRef = useRef(null); // Reference for the video element

  // Lazy load the video when it enters the viewport
  useEffect(() => {
    const videoElement = videoRef.current;

    // Set up IntersectionObserver to lazy load the video
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.load(); // Load video when it enters the viewport
            setVideoLoaded(true); // Set video loaded state to true
            observer.disconnect(); // Stop observing after video loads
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the video is in view
    );

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.disconnect();
      }
    };
  }, []);

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

      {/* Video Background with lazy loading */}
      <video
        ref={videoRef}
        className="background-video"
        autoPlay
        loop
        muted
        preload="none"
        poster="/placeholder.jpg" // Use a low-resolution placeholder image
      >
        {videoLoaded && <source src="/video.mp4" type="video/mp4" />}
        Your browser does not support the video tag.
      </video>

      {/* Content Section */}
      <div className="content">
        <h1>Welcome to the Skin & You Clinic</h1>
        <p>Instantly Smooth Away Wrinkles and Scars for a Fresh, Youthful Glow</p>

        {/* Call to Action Buttons */}
        <div className="button-group">
          <button className="btn call-btn">Call Now</button>
          <button className="btn book-btn" onClick={handleBookNowClick}>
            Book Now
          </button>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal open={isModalOpen} handleClose={handleCloseModal} />
    </div>
  );
};

export default VideoSection;
