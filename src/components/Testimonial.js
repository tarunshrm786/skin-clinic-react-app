import React from 'react';
import Slider from 'react-slick';
import '../css/Testimonial.css'; // Import your custom CSS for styling

// Sample testimonials
const testimonials = [
  {
    name: 'John Doe',
    text: 'I had an amazing experience at Skin & You Clinic. The doctors are highly knowledgeable and caring.',
    position: 'Patient',
  },
  {
    name: 'Jane Smith',
    text: 'The results from my treatment were beyond my expectations. Highly recommend this clinic!',
    position: 'Patient',
  },
  {
    name: 'Emily Johnson',
    text: 'The staff is incredibly friendly, and the atmosphere is calming. I felt well taken care of.',
    position: 'Patient',
  },
  {
    name: 'Michael Brown',
    text: 'The treatment options are great, and the doctors are very thorough in their explanations.',
    position: 'Patient',
  },
];

const Testimonial = () => {
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Loop the slides
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Time between slides
    cssEase: 'linear', // Transition effect
  };

  return (
    <section className="testimonial-section">
      <h2>What Our Clients Say</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide">
            <p>"{testimonial.text}"</p>
            <h4>- {testimonial.name}</h4>
            <p className="position">{testimonial.position}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonial;
