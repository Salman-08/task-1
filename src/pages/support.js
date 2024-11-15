import React, { useEffect } from 'react';
import AOS from 'aos';
import backgroundimage from '../imgs/img10.avif';
import statsBackgroundImage from '../imgs/img11.avif'; // Import your stats background image

function Support() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set a default duration for all animations
      easing: 'ease-in-out', // Choose easing for animations
    });
  }, []);

  return (
    <>
      {/* Support Section */}
      <section className="support py-[70px] md:pl-[40px] text-white relative" data-aos="fade-up">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${backgroundimage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#69ad40] to-[#002a4ce6] opacity-100"
        ></div> {/* Gradient overlay */}

        <div className="container mx-10 text-left relative w-[70%] md:w-[50%]" data-aos="fade-up">
          <h5 className="text-md font-semibold text-[#69ad40] w-[230px] text-center px-5 py-1 bg-[#002a4c] rounded-full">Count on Us Day or Night</h5>
          <h2 className="text-4xl break-words font-bold mb-4 text-[#002a4c]" data-aos="fade-up">
            Don't Let Energy Concerns Keep You In The Dark
          </h2>
          <p className="mb-4" data-aos="fade-up">
            From sudden outages to questions about efficiency, we understand the frustrations that can arise with traditional energy sources. Our 24/7 support team ensures that you never feel alone in navigating these challenges. Reach out anytime for expert guidance and reliable solutions to keep your energy worries at bay.
          </p>
          <button className="bg-[#002a4c] text-white px-6 py-2 md:px-8 md:py-3 font-semibold rounded-full hover:bg-[#091d2e]" data-aos="fade-up" data-aos-delay="200">Get A Quote</button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats py-20" style={{
        backgroundImage: `url(${statsBackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} data-aos="fade-up">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center relative z-10">
          <div className="stat-content" data-aos="fade-up" data-aos-delay="100">
            <i className="fa-regular fa-handshake stat-icon text-black text-4xl mb-2 transform transition-transform duration-500 hover:scale-x-[-1] hover:text-[#69ad40]"></i>
            <h2 className="text-4xl font-bold text-[#002a4c]">325</h2>
            <h6 className="font-bold">Projects Completed</h6>
          </div>
          <div className="stat-content" data-aos="fade-up" data-aos-delay="200">
            <i className="fa-solid fa-truck-fast stat-icon text-black text-4xl mb-2 transform transition-transform duration-500 hover:scale-x-[-1] hover:text-[#69ad40]"></i>
            <h2 className="text-4xl font-bold text-[#002a4c]">250</h2>
            <h6 className="font-bold">Distrubutors</h6>
          </div>
          <div className="stat-content" data-aos="fade-up" data-aos-delay="300">
            <i className="fa-solid fa-face-smile stat-icon text-black text-4xl mb-2 transform transition-transform duration-500 hover:scale-x-[-1] hover:text-[#69ad40]"></i>
            <h2 className="text-4xl font-bold text-[#002a4c]">1000</h2>
            <h6 className="font-bold">Satisfied Customers</h6>
          </div>
          <div className="stat-content" data-aos="fade-up" data-aos-delay="400">
            <i className="fa-solid fa-briefcase stat-icon text-black text-4xl mb-2 transform transition-transform duration-500 hover:scale-x-[-1] hover:text-[#69ad40]"></i>
            <h2 className="text-4xl font-bold text-[#002a4c]">20</h2>
            <h6 className="font-bold">Years of Experience</h6>
          </div>
        </div>
      </section>
    </>
  );
}

export default Support;
