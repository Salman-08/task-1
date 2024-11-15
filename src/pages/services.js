import React, { useEffect } from 'react';
import Industrialsolution from '../imgs/img3.avif'; // Adjust the path
import Commercialsolution from '../imgs/img4.avif'; // Adjust the path
import Resdentialsolution from '../imgs/img5.avif'; // Adjust the path
import Agriculturalsolution from '../imgs/img6.avif'; // Adjust the path
import background from '../imgs/img8.avif'; // Background image
import Aos from 'aos';

function Services() {
  const handleCardClick = (service) => {
    // Navigate to the respective service page.
    window.location.href = `/services/${service}`; // Example URL path
  };
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out'
    })
  })

  return (
    <section className="solar-services py-20 relative" data-aos="fade-up">
      {/* Background Image with Grey Overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-bottom" data-aos="fade-up"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(90%)', // Apply grayscale filter
        }}
      >
        {/* Grey Overlay with opacity */}
        <div className="absolute inset-0 bg-gray-100 opacity-90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto text-center relative z-10 flex flex-col items-center justify-center h-full" data-aos="fade-up">
        <h5 className="text-md font-bold text-[#69ad40] w-100 text-center px-5 py-1 bg-[#002a4c] rounded-full mb-4" data-aos="fade-up">
          Empower, Energize, Sustain
        </h5>
        <h2 className="text-3xl md:text-4xl font-bold text-[#002a4c] max-w-[800px]" data-aos="fade-up">
          Empowering Solutions for Every Sector, Explore Our Diverse Services
        </h2>


        <div className="grid grid-cols-1 p-10 text-left md:p-20 md:grid-cols-2 lg:grid-cols-4 gap-4" data-aos="fade-up">
          {/* Card for Industrial Solar Solutions */}
          <div data-aos="fade-up" data-aos-delay="100">
            <div
              className="service-card bg-white border-gray-300 rounded-lg p-4 flex flex-col h-full cursor-pointer transform hover:translate-y-4 transition duration-500 overflow-hidden border-b-[6px] border-r-[6px] hover:border-[#69ad40]"
              onClick={() => handleCardClick('industrial')}
            >
              <img
                src={Industrialsolution}
                alt="Industrial Solar Solutions"
                className="w-full h-48 object-contain rounded-lg mb-2" // Ensures full image fits within card
              />
              <div className="border-b-2 border-gray-300 mb-2"></div>
              <h5 className="text-xl font-semibold mb-1 transition-colors duration-300 hover:text-[#69ad40]">Industrial Solar Solutions</h5>
              <p className="mb-2">Elevate your industrial operations with tailored solar solutions for sustainable energy excellence.</p>
            </div>
          </div>

          {/* Card for Commercial Solar Solutions */}
          <div data-aos="fade-up" data-aos-delay="200">
            <div
              className="service-card bg-white border-gray-300 rounded-lg p-4 flex flex-col h-full cursor-pointer transform hover:translate-y-4 transition duration-500 overflow-hidden border-b-[6px] border-r-[6px] hover:border-[#69ad40]"
              onClick={() => handleCardClick('commercial')}
            >
              <img
                src={Commercialsolution}
                alt="Commercial Solar Solutions"
                className="w-full h-48 object-contain rounded-lg mb-2" // Ensures full image fits within card
              />
              <div className="border-b-2 border-gray-300 mb-2"></div>
              <h5 className="text-xl font-semibold mb-1 transition-colors duration-300 hover:text-[#69ad40]">Commercial Solar Solutions</h5>
              <p className="mb-2">Empower your business with cost-effective solar solutions tailored to your commercial needs.</p>
            </div>
          </div>

          {/* Card for Residential Solar Solutions */}
          <div data-aos="fade-up" data-aos-delay="300">
            <div
              className="service-card bg-white border-gray-300 rounded-lg p-4 flex flex-col h-full cursor-pointer transform hover:translate-y-4 transition duration-500 overflow-hidden border-b-[6px] border-r-[6px] hover:border-[#69ad40]"
              onClick={() => handleCardClick('residential')}
            >

              <img
                src={Resdentialsolution}
                alt="Residential Solar Solutions"
                className="w-full h-48 object-contain rounded-lg mb-2" // Ensures full image fits within card
              />
              <div className="border-b-2 border-gray-300 mb-2"></div>
              <h5 className="text-xl font-semibold mb-1 transition-colors duration-300 hover:text-[#69ad40]">Residential Solar Solutions</h5>
              <p className="mb-2">Transform your home into an energy-efficient haven with our personalized residential solar solutions.</p>
            </div>
          </div>

          {/* Card for Agricultural Solar Solutions */}
          <div data-aos="fade-up" data-aos-delay="400">
            <div
              className="service-card bg-white border-gray-300 rounded-lg p-4 flex flex-col h-full cursor-pointer transform hover:translate-y-4 transition duration-500 overflow-hidden border-b-[6px] border-r-[6px] hover:border-[#69ad40]"
              onClick={() => handleCardClick('agricultural')}
            >
              <img
                src={Agriculturalsolution}
                alt="Agricultural Solar Solutions"
                className="w-full h-48 object-contain rounded-lg mb-2" // Ensures full image fits within card
              />
              <div className="border-b-2 border-gray-300 mb-2"></div>
              <h5 className="text-xl font-semibold mb-1 transition-colors duration-300 hover:text-[#69ad40]">Agricultural Solar Solutions</h5>
              <p className="mb-2">Harvest the power of the sun to drive agricultural productivity and sustainability on your farm.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
