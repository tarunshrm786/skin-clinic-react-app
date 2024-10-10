// import React from 'react';
// import '../css/InstagramPosts.css'; // Import your custom CSS for styling

// const InstagramPosts = () => {
//   const posts = [
//     {
//       id: 1,
//       src: "https://www.instagram.com/p/DA0ktWTSnAZ/embed",
//       caption: "Amazing skin treatments at Skin & You Clinic!",
//     },
//     {
//       id: 2,
//       src: "https://www.instagram.com/reel/DAsynqeIMxJ/embed", // Replace with actual Instagram post URLs
//       caption: "Healthy skin starts here. Join us for expert care!",
//     },
//     {
//       id: 3,
//       src: "https://www.instagram.com/reel/DAdVge3IScV/embed", // Replace with actual Instagram post URLs
//       caption: "Your journey to radiant skin begins at our clinic!",
//     },
//   ];

//   return (
//     <section className="instagram-posts-section">
//       <h2>Our Latest Instagram Posts</h2>
//       <div className="instagram-posts-container">
//         {posts.map(post => (
//           <div className="instagram-card" key={post.id}>
//             <iframe
//               src={post.src}
//               width="300"
//               height="505"
//               frameBorder="0"
//               scrolling="no"
//               allowTransparency="true"
//               allow="encrypted-media"
//             ></iframe>
//             <p>{post.caption}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default InstagramPosts;

import React, { useEffect } from 'react';
import '../css/InstagramPosts.css'; // Import your custom CSS for styling

const InstagramPosts = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.onload = () => {
      // Optional: You can call any Elfsight specific initialization code here if needed
    };

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="instagram-posts-section">
      <h2>Our Latest Instagram Posts</h2>
      <div
        className="elfsight-app-764c8a92-d538-4fc9-a2e7-828ff186b1cf"
        data-elfsight-app-lazy
      ></div>
    </section>
  );
};

export default InstagramPosts;
