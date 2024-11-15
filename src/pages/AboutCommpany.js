import React, { useState } from 'react';
import About1 from '../imgs/img14.avif';
import About2 from '../imgs/img15.avif';
import background from '../imgs/img13.avif';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VerifiedIcon from '@mui/icons-material/Verified';


function Company() {
    const [openAccordion, setOpenAccordion] = useState(null); // Declare the state

    const handleAccordionClick = (accordionId) => {
        setOpenAccordion(openAccordion === accordionId ? null : accordionId);
    };

    return (


        <div>
            {/* Header Section */}
            <section className="support py-[80px] md:pl-[40px] text-white relative">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(${background})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                ></div>
                <div
                    className="absolute inset-0 bg-gradient-to-r from-[#69ad40] to-[#002a4ce6] opacity-90"
                ></div>

                <div className="container mx-auto flex justify-center items-center text-center relative w-[90%] md:w-[65%]" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                    <div className="text-center">
                        <div className="flex justify-center">
                            <h5 className="text-md font-semibold text-[#69ad40] w-[230px] text-center px-5 py-1 bg-[#002a4c] rounded-full">
                                Know Our Story
                            </h5>
                        </div>
                        <h2 className="text-6xl break-words font-semibold mb-4 text-white">
                            Empowering Tomorrow With PEES Solar
                        </h2>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section className="about-us md:px-[60px] py-10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        <div className="md:col-span-2">
                            <h6 className="text-md font-semibold text-[#69ad40] w-[260px] text-center px-5 py-1 bg-[#002a4c] rounded-full" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                                Leading The Solar Revolution
                            </h6>
                            <h2 className="text-4xl font-semibold mb-4 text-[#002a4c]" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                                We Brighten Your Future!
                            </h2>
                            <p className="text-md" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                                As pioneers in sustainable energy solutions, we are dedicated to illuminating the path towards a brighter, cleaner future.
                                With a focus on innovation and environmental stewardship, we specialize in designing and implementing cutting-edge solar
                                installations for homes, businesses, and communities.
                                <br /><br />
                                Our passion for renewable energy drives us to deliver reliable, cost-effective solutions that not only reduce carbon
                                footprints but also empower our customers to take control of their energy needs. Join us in harnessing the power of the sun
                                and shaping a sustainable tomorrow for generations to come.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                                <div className="flex items-start" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                                    <i className="fa-solid fa-lightbulb text-black text-5xl mb-2 transform transition-transform duration-500 hover:scale-x-[-1] hover:text-[#69ad40]"></i>
                                    <div className="ml-3">
                                        <h5 className="font-bold">Innovative Technology</h5>
                                        <ul className="list-none pl-0 mt-2">
                                            <li>Explore the latest advancements in solar technology with our cutting-edge solutions.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex items-start" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                                    <i className="fa-solid fa-briefcase text-black text-5xl mb-2 transform transition-transform duration-500 hover:scale-x-[-1] hover:text-[#69ad40]"></i>
                                    <div className="ml-3">
                                        <h5 className="font-bold">Dedicated Support</h5>
                                        <ul className="list-none pl-0 mt-2">
                                            <li>Access round-the-clock support from our team of solar experts, ensuring a seamless experience from start to finish.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Images Section */}
                        <div className="md:col-span-1 relative md:w-[85%] w-[79%]">
                            <div className="space-y-4">
                                {/* Image 1 */}
                                <img
                                    src={About1}
                                    alt="About 1"
                                    className="img-fluid rounded-xl shadow-xl w-[300px] h-[450px]"
                                    data-aos="fade-down"
                                    data-aos-offset="200"
                                    data-aos-duration="1200"
                                />
                                {/* Image 2 */}
                                <img
                                    src={About2}
                                    alt="About 2"
                                    className="img-fluid rounded-xl shadow-xl w-[330px] h-[225px] absolute top-[45%] left-[40%] transform -translate-y-[40%]"
                                    data-aos="fade-left"
                                    data-aos-offset="200"
                                    data-aos-duration="1200"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Mission, Vision, and Quality Section */}
            <section className="mission-vision bg-[#f1f3fb] py-16">
                <div className="container mx-auto px-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Mission Card */}
                        <div
                            className="relative p-6 bg-white shadow-xl rounded-xl text-center hover:bg-[#69ad40] hover:text-white transition-all duration-500"
                            data-aos="fade-right"
                            data-aos-offset="200"
                            data-aos-duration="1200"
                        >
                            {/* Icon with Circle */}
                            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                                <div className="bg-[#002a4c] text-white w-20 h-20 rounded-full flex items-center justify-center">
                                    <TrackChangesIcon style={{ fontSize: '60px' }} />
                                </div>
                            </div>
                            {/* Content */}
                            <h5 className="text-lg font-semibold mt-12">Our Mission</h5>
                            <p className="mt-3">
                                Our mission is to empower global communities through accessible, sustainable energy solutions that pave the way for a brighter future.
                            </p>
                        </div>

                        {/* Vision Card */}
                        <div
                            className="relative p-6 bg-white shadow-xl rounded-xl text-center hover:bg-[#69ad40] hover:text-white transition-all duration-500"
                            data-aos="fade-down"
                            data-aos-offset="200"
                            data-aos-duration="1200"
                        >
                            {/* Icon with Circle */}
                            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                                <div className="bg-[#002a4c] text-white w-20 h-20 rounded-full flex items-center justify-center">
                                    <RemoveRedEyeIcon style={{ fontSize: '60px' }} />
                                </div>
                            </div>
                            {/* Content */}
                            <h5 className="text-lg font-semibold mt-12">Our Vision</h5>
                            <p className="mt-3">
                                We envision leading the renewable energy revolution, driving a brighter, greener tomorrow for generations to come.
                            </p>
                        </div>

                        {/* Quality Card */}
                        <div
                            className="relative p-6 bg-white shadow-xl rounded-xl text-center hover:bg-[#69ad40] hover:text-white transition-all duration-500"
                            data-aos="fade-left"
                            data-aos-offset="200"
                            data-aos-duration="1200"
                        >
                            {/* Icon with Circle */}
                            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                                <div className="bg-[#002a4c] text-white w-20 h-20 rounded-full flex items-center justify-center">
                                    <VerifiedIcon style={{ fontSize: '60px' }} />
                                </div>
                            </div>
                            {/* Content */}
                            <h5 className="text-lg font-semibold mt-12">Focus On Quality</h5>
                            <p className="mt-3">
                                Quality is at the core of everything we do, ensuring reliability and satisfaction with every solar installation we provide.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="about-section bg-cover bg-no-repeat text-white"
                style={{ backgroundImage: "url('/img15.avif')" }}
            >
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center items-center h-full min-h-[500px]">

                        {/* Content Column */}
                        <div className="p-6 bg-[#002a4c] bg-opacity-90 h-full md:pl-[50px]">
                            <div className="mb-6">
                                <h6
                                    className="text-md font-semibold text-white w-[220px] text-center px-5 py-1 bg-[#002a4c] rounded-full"
                                    data-aos="fade-up"
                                    data-aos-offset="200"
                                    data-aos-duration="1200"
                                >
                                    Uncover Solar Solutions
                                </h6>
                                <h2
                                    className="regular-heading text-white text-3xl font-bold mb-4"
                                    data-aos="fade-up"
                                    data-aos-offset="200"
                                    data-aos-duration="1200"
                                >
                                    Unlocking Solar's Potential for Your Home or Business
                                </h2>
                                <p
                                    className="text-white text-lg"
                                    data-aos="fade-up"
                                    data-aos-offset="200"
                                    data-aos-duration="1200"
                                >
                                    Unlock the potential of solar energy and its transformative benefits.
                                    Explore common questions about solar system installation and its advantages below.
                                </p>
                            </div>

                            {/* Accordion */}
                            <div
                                className="accordion space-y-4"
                                id="accordionPanelsStayOpenExample"
                                data-aos="fade-up"
                                data-aos-offset="200"
                                data-aos-duration="1200"
                            >
                                {/* Accordion Item */}
                                {[{
                                    question: "Q. How can solar energy reduce my electricity bills?",
                                    answer: `Solar energy can significantly reduce your electricity bills by generating electricity 
from sunlight, which reduces your reliance on traditional utility providers. With net metering 
programs, you can even earn credits for excess energy produced by your solar panels, further reducing your costs.`,
                                    id: "One"
                                }, {
                                    question: "Q. What are the environmental benefits of switching to solar power?",
                                    answer: `Switching to solar power reduces reliance on fossil fuels, which decreases greenhouse gas emissions and helps combat climate change. 
Solar energy production also requires minimal water and has a lower environmental impact compared to traditional energy sources.`,
                                    id: "Two"
                                }, {
                                    question: "Q. How long does it take to install a solar system on my property?",
                                    answer: `The time it takes to install a solar system varies depending on factors such as the size of the system, your property's characteristics, 
and local regulations. On average, residential solar installations can take anywhere from a few days to a few weeks to complete.`,
                                    id: "Four"
                                }, {
                                    question: "Q. What financial incentives are available for solar system installation?",
                                    answer: `Various financial incentives are available to encourage solar system installation, including federal tax credits, 
state and local rebates, and renewable energy incentives. These incentives can significantly reduce the upfront cost 
of installing a solar system and improve the return on investment over time.`,
                                    id: "Five"
                                }].map((item, index) => (
                                    <div
                                        key={item.id}
                                        className={`accordion-item bg-white text-black p-4  ${openAccordion === item.id ? "border-yellow-400" : "border-transparent"} ${index === 0 ? 'rounded-tl-md rounded-tr-md' : ''} ${index === 3 ? 'rounded-bl-md rounded-br-md' : ''}`}
                                    >
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button flex justify-between items-center w-full text-left text-lg font-medium focus:outline-none"
                                                type="button"
                                                onClick={() => handleAccordionClick(item.id)}
                                                aria-expanded={openAccordion === item.id ? "true" : "false"}
                                            >
                                                {item.question}
                                                {/* Down Arrow Icon */}
                                                <span className="ml-4">
                                                    {openAccordion === item.id ? (
                                                        <i className="fas fa-angle-down rotate-180"></i>  // Down Arrow Icon when opened
                                                    ) : (
                                                        <i className="fas fa-angle-down"></i>  // Down Arrow Icon when closed
                                                    )}
                                                </span>
                                            </button>
                                        </h2>
                                        <div className={`accordion-body mt-2 ${openAccordion === item.id ? "block" : "hidden"}`}>
                                            {item.answer}
                                        </div>
                                    </div>
                                ))}
                            </div>


                            {/* Button */}
                            <div className="mt-6" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                                <a href="#contact">
                                    <button className="text-lg bg-[#69ad40] text-white px-6 py-2 md:px-8 md:py-3 font-semibold rounded-full hover:bg-[#578a33]">
                                        Convert to Solar System
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Company;
