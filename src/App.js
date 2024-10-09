import React from 'react';
import VideoSection from './components/VideoSection'; // Adjust the path accordingly
import Testimonial from './components/Testimonial';
import InstagramPosts from './components/InstagramPosts';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <VideoSection />
      <AboutUs />
      <Services />
      <InstagramPosts />
      <Testimonial />
      <Footer />
    
      {/* Other sections and components */}
    </div>
  );
}

export default App;
