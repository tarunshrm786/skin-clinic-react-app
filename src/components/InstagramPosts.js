import React from 'react';
import '../css/InstagramPosts.css'; // Import your custom CSS for styling

const InstagramPosts = () => {
  const posts = [
    {
      id: 1,
      src: "https://www.instagram.com/p/DA0ktWTSnAZ/embed",
      caption: "Amazing skin treatments at Skin & You Clinic!",
    },
    {
      id: 2,
      src: "https://www.instagram.com/reel/DAsynqeIMxJ/embed", // Replace with actual Instagram post URLs
      caption: "Healthy skin starts here. Join us for expert care!",
    },
    {
      id: 3,
      src: "https://www.instagram.com/reel/DAdVge3IScV/embed", // Replace with actual Instagram post URLs
      caption: "Your journey to radiant skin begins at our clinic!",
    },
  ];

  return (
    <section className="instagram-posts-section">
      <h2>Our Latest Instagram Posts</h2>
      <div className="instagram-posts-container">
        {posts.map(post => (
          <div className="instagram-card" key={post.id}>
            <iframe
              src={post.src}
              width="400"
              height="505"
              frameBorder="0"
              scrolling="no"
              allowTransparency="true"
              allow="encrypted-media"
            ></iframe>
            <p>{post.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstagramPosts;
