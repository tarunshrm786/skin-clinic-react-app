// import React from 'react';
// import '../css/Services.css'; // Import your custom CSS for styling

// const services = [
//   {
//     image: '/services1.png', // Replace with your image paths
//     title: 'Body & face laser hair removal',
//     subText: 'Get personalized skincare advice from our experts.',
//   },
//   {
//     image: '/services2.png', // Replace with your image paths
//     title: 'Tattoo removal',
//     subText: 'Advanced laser treatments for skin rejuvenation.',
//   },
//   {
//     image: '/services3.png', // Replace with your image paths
//     title: 'Fat Loss & Inch loss',
//     subText: 'Comprehensive services for all skin conditions.',
//   },
//   {
//     image: '/services4.png', // Replace with your image paths
//     title: 'Botox',
//     subText: 'Enhance your natural beauty with our aesthetic procedures.',
//   },
//   {
//     image: '/services5.png', // Replace with your image paths
//     title: 'Body and Face Tightening',
//     subText: 'Safe and effective body contouring treatments.',
//   },
// ];

// const Services = () => {
//   return (
//     <section className="services-section">
//       <h2>Our Services</h2>
//       <div className="services-container">
//         {services.map((service, index) => (
//           <div key={index} className="service-card" style={{ backgroundColor: getCardColor(index) }}>
//             <img src={service.image} alt={service.title} className="service-image" />
//             <h3 className="service-title">{service.title}</h3>
//             <p className="service-subtext">{service.subText}</p>
//             <button className="know-more-button">Know More</button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// // Function to get card color based on the index
// const getCardColor = (index) => {
//   const colors = [
//     '#e0f7fa', // Light cyan
//     'white', // Light purple
//     '#ffe4b5', // Light pink
//     'white', // Light lavender
//     '#fff8e1', // Light blue
//   ];
//   return colors[index % colors.length];
// };

// export default Services;

import React from 'react';
import '../css/Services.css'; // Import your custom CSS for styling

const services = [
  {
    image: '/services1.png', // Replace with your image paths
    title: 'Body & face laser hair removal',
    subText: 'Get personalized skincare advice from our experts.',
  },
  {
    image: '/services2.png', // Replace with your image paths
    title: 'Tattoo removal',
    subText: 'Advanced laser treatments for skin rejuvenation.',
  },
  {
    image: '/services3.png', // Replace with your image paths
    title: 'Fat Loss & Inch loss',
    subText: 'Comprehensive services for all skin conditions.',
  },
  {
    image: '/services4.png', // Replace with your image paths
    title: 'Botox',
    subText: 'Enhance your natural beauty with our aesthetic procedures.',
  },
  {
    image: '/services5.png', // Replace with your image paths
    title: 'Body and Face Tightening',
    subText: 'Safe and effective body contouring treatments.',
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card" style={{ backgroundColor: getCardColor(index) }}>
            <img src={service.image} alt={service.title} className="service-image" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-subtext">{service.subText}</p>
            <button className="know-more-button">Know More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

// Function to get card color based on the index
const getCardColor = (index) => {
  const colors = [
    '#e0f7fa', // Light cyan
    'white', // Light purple
    '#ffe4b5', // Light pink
    'white', // Light lavender
    '#fff8e1', // Light blue
  ];
  return colors[index % colors.length];
};

export default Services;
