// src/HomePage.js
import React from 'react';
import Header from '../components/header'; // Import the Header component
import HeaderSection from './headersection';
import Footer from '../components/footer'
import AboutSection from './about';
import Services from './services';
import Support from './support';
import Testimonials from './Testimonials';


const HomePage = () => {
  return (
    <div>
      <Header />
      <HeaderSection />
      <AboutSection />
      <Services></Services>
      <Support></Support>
      <Testimonials></Testimonials>
      <Footer />

    </div>
  );
};

export default HomePage;