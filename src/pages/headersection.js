import React, { useEffect } from "react";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import headersection from "../imgs/img2.avif";
import AOS from 'aos';

function Home() {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of the animation in milliseconds
            easing: 'ease-in-out', // Easing option for smooth transition
        });
    }, []);

    return (
        <section className="header-section relative md:pl-20 py-20 px-6 md:px-12 md:h-auto" data-aos="fade-up">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={headersection}
                    alt="About Us"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-4 relative">
                {/* Text Content */}
                <div className="w-full md:w-1/2 py-6 md:py-9" data-aos="fade-up">
                    <h1 className="text-[40px] md:text-5xl font-bold mb-3 text-[#002a4c] leading-tight md:leading-snug">
                        Power Your Future With Limitless Solar Energy
                    </h1>
                    <p className="text-base md:text-xl font-semibold mt-3 leading-relaxed md:leading-normal">
                        Discover the boundless potential of solar energy and light up your life with our innovative solutions.
                    </p>

                    {/* Support Info */}
                    <div className="phone flex mt-4 mb-4 bg-opacity-50 bg-[#002a4c] p-3 rounded-lg items-center" data-aos="fade-up">
                        <SupportAgentIcon style={{ color: "#fff", fontSize: "32px" }} />
                        <p className="ml-3 text-sm md:text-2xl font-semibold text-white">
                            24/7 Customer Support: +92 300 555 48 06
                        </p>
                    </div>

                    {/* Button */}
                    <button className="bg-[#69ad40] text-white px-6 py-2 md:px-8 md:py-3 font-semibold rounded-full hover:bg-[#578a33]" data-aos="fade-up">
                        Get A Quote
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Home;