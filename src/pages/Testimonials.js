import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Client from '../imgs/img13.png';
import testimonialimg from '../imgs/img12.avif';

export default function Testimonials() {
    useEffect(() => {
        AOS.init();
    }, []);

    const settings = {
        dots: true,
        fade: true,
        arrows: false,
        autoplay: true,
        infinite: true,
        pauseOnHover: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        appendDots: dots => (
            <div style={{ position: 'relative', top: '0px' }}>
                <ul style={{ display: "flex", justifyContent: "center", marginTop: "25px" }}>
                    {dots}
                </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "white", // Default color for all dots
                    opacity: "0.8"
                }}
            />
        )
    };

    return (
        <div className="relative py-10">
            {/* Testimonials Content */}
            <div className="relative container mx-auto text-center max-w-3xl px-4">
                <span className="inline-block px-4 py-1 mb-2 text-sm font-semibold uppercase bg-[#002a4c] text-[#69ad40] rounded-full">
                    Testimonials
                </span>
                <h2
                    className="text-3xl md:text-4xl font-bold text-[#002a4c]"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-duration="1200"
                >
                    What Our Clients Say!
                </h2>
            </div>

            {/* Slider Section with Background Image */}
            <div
                className="relative mx-auto mt-10 item-center text-center"
                style={{
                    width: '100%',  // Make the slider container full width
                    maxWidth: '1116px',  // Max width for larger screens
                    height: '358px',
                    backgroundImage: `url(${testimonialimg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-[#69ad40] opacity-90"></div>

                <Slider {...settings} data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                    {[{
                        feedback: "Switching to solar with PEES Solar was our best move yet. Great savings and amazing support!",
                        name: "Nimra Ihsan",
                        position: "Manager HR",
                        company: "The Educators",
                    },
                    {
                        feedback: "Thanks to this company, going solar was a breeze. Professional, knowledgeable, and always there to help.",
                        name: "Asim Rasool",
                        position: "Director",
                        company: "Apex College",
                    },
                    {
                        feedback: "No more power outages thanks to their solar solution. Couldn't be happier!",
                        name: "Sikandar Nawaz Cheema",
                        position: "Principal",
                        company: "Falcon Central School",
                    },
                    {
                        feedback: "Impressive ROI with their commercial solar services. Their support is top-notch.",
                        name: "Faizan Minhas",
                        position: "General Manager",
                        company: "Dar e Arqam Schools",
                    },
                    ].map((testimonial, index) => (
                        <div key={index} className="flex flex-col items-center p-6 text-center" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                            {/* Center the image using flex utilities */}
                            <div className="flex justify-center items-center mb-4">
                                <img
                                    className="rounded-full bg-gray-200 p-1 w-20 h-20 mb-4 border-4 border-white"
                                    src={Client}
                                    alt="client"
                                />
                            </div>
                            <p className="text-lg font-semibold text-white mb-4">{testimonial.feedback}</p>
                            <h5 className="text-lg font-bold text-white">{testimonial.name}</h5>
                            <span className="text-sm text-white opacity-80 italic">
                                {testimonial.position} <span className="font-normal">({testimonial.company})</span>
                            </span>
                        </div>

                    ))}
                </Slider>
            </div>
        </div>
    );
}
