import React, { useEffect } from 'react';
import About from '../imgs/img9.avif'; // Adjust the import path for your image
import ElectricMeterIcon from '@mui/icons-material/ElectricMeter'; // Assuming you’re using this icon
import AOS from 'aos';

function AboutSection() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      easing: 'ease-in-out', // Easing option for smooth transition
    });
  }, []);

  return (
    <section className="header-section relative md:pl-20 py-10 px-6 md:px-12 md:h-auto">
      <div className="mx-auto px-6 md:pl-[21px]">
        <div className="flex flex-col md:flex-row items-center justify-center">

          {/* Left Column */}
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10" data-aos="fade-up">
            <h5 className="text-md font-semibold text-[#69ad40] w-[135px] text-center px-5 py-1 bg-[#002a4c] rounded-full">Who We Are</h5>
            <h2 className="text-4xl md:text-4xl font-bold mt-4 mb-4 text-[#002a4c]" data-aos="fade-up">
              Empowering Communities, Building a Sustainable Future
            </h2>
            <p className="text-gray-600 mb-6" data-aos="fade-up">
              Step into the future with PEES Solar, where solar innovation meets sustainable living. We're not just a solar company; we're the architects of a greener tomorrow. Join us in redefining energy solutions for a world that demands both progress and preservation.
            </p>
            <img src={About} alt="About Us" className="w-full h-auto mb-4" data-aos="fade-up" />
            <button className="text-lg bg-[#69ad40] text-white px-6 py-2 md:px-8 md:py-3 font-semibold rounded-full hover:bg-[#578a33]" data-aos="fade-up">
              Go Solar Today
            </button>
          </div>

          {/* Right Column (Cards Section) */}
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 w-full">
            {/* Card 1 */}
            <div className="bg-[#002a4c] shadow-lg rounded-lg p-10 text-center h-[300px] hover:bg-[#69ad40] transition-all duration-500" data-aos="fade-up">
              <div className="icon-box text-white text-5xl mb-3">
                <i className="fa-solid fa-leaf"></i>
              </div>
              <h5 className="text-2xl font-semibold text-white">Environmental Friendliness</h5>
              <p className="text-lg md:text-lg text-white m-2">Save your world with clean and green energy.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#002a4c] shadow-lg rounded-lg p-10 text-center h-[300px] hover:bg-[#69ad40] transition-all duration-300" data-aos="fade-up">
              <div className="icon-box text-white text-5xl mb-3">
                <ElectricMeterIcon style={{ fontSize: "50px" }} />
              </div>
              <h5 className="text-2xl font-semibold text-white">Energy Independence</h5>
              <p className="text-lg md:text-lg text-white mt-2">Save your world with clean and green energy.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#002a4c] shadow-lg rounded-lg p-10 text-center h-[300px] hover:bg-[#69ad40] transition-all duration-300" data-aos="fade-up">
              <div className="icon-box text-white text-5xl mb-3">
                <i className="fa-solid fa-sack-dollar"></i>
              </div>
              <h5 className="text-2xl font-semibold text-white">Immediate Cost Savings</h5>
              <p className="text-lg md:text-lg text-white mt-2">Save your world with clean and green energy.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#002a4c] shadow-lg rounded-lg p-10 text-center h-[300px] hover:bg-[#69ad40] transition-all duration-300" data-aos="fade-up">
              <div className="icon-box text-white text-5xl mb-3">
                <i className="fa-solid fa-plug-circle-xmark"></i>
              </div>
              <h5 className="text-2xl font-semibold text-white">Minimization Of Downtime</h5>
              <p className="text-lg md:text-lg text-white mt-2">Save your world with clean and green energy.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;
