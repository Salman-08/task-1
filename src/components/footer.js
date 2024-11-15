import React, { useEffect } from 'react';
import img from '../imgs/img7.png';
import AOS from 'aos'; // Import AOS

function Footer() {
  useEffect(() => {
    AOS.init(); // Initialize AOS on mount
  }, []);

  return (
    <footer className="bg-[#002a4c] text-white py-1 pt-6 mt-auto" data-aos="fade-up">
      <div className="container mx-auto px-6 md:px-12 mt-10">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

          {/* Logo and Description */}
          <div className="text-left" data-aos="fade-up">
            <img src={img} alt="PEES Logo" className="h-16 mx-auto md:mx-0 mb-4" />
            <p className="text-gray-300">
              As pioneers in sustainable energy solutions, we are dedicated to illuminating the path towards a brighter, cleaner future.
            </p>
          </div>

          {/* Solutions Links */}
          <div className="text-left" data-aos="fade-up">
            <h6 className="text-xl font-semibold mb-4">Our Solutions</h6>
            <ul className="space-y-2">
              {['Industrial Solar', 'Commercial Solar', 'Residential Solar', 'Agricultural Solar'].map((solution) => (
                <li key={solution} className="transition-transform transform transition duration-500 hover:translate-x-2">
                  <a href={`/${solution.toLowerCase().replace(' ', '-')}`} className="hover:text-yellow-300 ">
                    <i className="fa-regular fa-circle-check mr-2"></i> {solution}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-left" data-aos="fade-up">
            <h6 className="text-xl font-semibold mb-4">Contact</h6>
            <p className="flex items-center justify-start mb-2">
              <i className="fas fa-home mr-2"></i> Phase 2, Wapda Town, Lahore, Punjab Pakistan
            </p>
            <p className="flex items-center justify-start mb-2">
              <i className="fas fa-envelope mr-2"></i> info@pees.pk
            </p>
            <p className="flex items-center justify-start">
              <i className="fas fa-phone mr-2"></i> +92 300 555 4806
            </p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-8 border-b border-white pb-4">
          <a href="/#" className="hover:text-gray-200"><i className="fab fa-facebook-f"></i></a>
          <a href="/#" className="hover:text-gray-200"><i className="fab fa-twitter"></i></a>
          <a href="/#" className="hover:text-gray-200"><i className="fab fa-google"></i></a>
          <a href="/#" className="hover:text-gray-200"><i className="fab fa-instagram"></i></a>
          <a href="/#" className="hover:text-gray-200"><i className="fab fa-linkedin"></i></a>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 text-sm" >
          © 2024 Photonic Electronics & Engineering Services <br />
          Developed with <span className="text-lg">&hearts;</span> by{' '}
          <a href="https://technicmentors.com/" className="text-white font-bold hover:underline">
            Technic Mentors
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
