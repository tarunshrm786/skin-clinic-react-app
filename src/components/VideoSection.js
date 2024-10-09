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
//       </div>
//     </div>
//   );
// };

// export default VideoSection;

import React from 'react';
import '../css/VideoSection.css';
import Header from './Header'; // Import the Header component

const VideoSection = () => {
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
          <button className="btn book-btn">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
