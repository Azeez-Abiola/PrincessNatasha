import React, { forwardRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Pen, KeyIcon as Strategy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, content }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-8 flex-grow">
        <Icon className={`w-12 h-12 ${isHovered ? 'text-[#44BBA4]' : 'text-gray-600'} mb-4 transition-colors duration-300`} />
        <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <p className="text-gray-600 text-sm">{content}</p>
      </div>
      <div 
        className={`bg-[#44BBA4] p-4 text-white font-semibold text-center transition-all duration-300 cursor-pointer
                    ${isHovered ? 'bg-opacity-100' : 'bg-opacity-90'} hover:bg-opacity-100`}
        onClick={() => navigate('/blog')}
      >
        <span className="relative inline-block">
          Learn More
          <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transition-all duration-300 
                            ${isHovered ? 'scale-x-100' : 'scale-x-0'}`}></span>
        </span>
      </div>
    </div>
  );
};

const ServicesSection = forwardRef((props, ref) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const services = [
    {
      icon: Pen,
      title: "Content Writing",
      description: "Craft compelling narratives that resonate with your audience and drive engagement.",
      content: "Our content writing service goes beyond just putting words on a page. We delve deep into your brand's voice, your audience's needs, and the latest SEO trends to create content that not only reads well but performs exceptionally. From blog posts that establish your authority to product descriptions that convert, our team of skilled writers ensures every piece of content serves a strategic purpose in your overall marketing goals."
    },
    {
      icon: Strategy,
      title: "Content Strategy",
      description: "Develop a comprehensive content plan that aligns with your business goals and resonates with your target audience.",
      content: "A solid content strategy is the backbone of successful digital marketing. Our approach begins with a thorough analysis of your brand, audience, and competitors. We then craft a tailored strategy that outlines the types of content you need, the platforms to focus on, and the metrics to track. Our content strategy service ensures that every piece of content you publish is purposeful, targeted, and contributes to your overall business objectives."
    }
  ];

  const scrollToContactForm = () => {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="w-full px-6 md:px-12 py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-800"
          data-aos="fade-down"
        >
          Tell your brand story in a way that 
          <span className="text-[#44BBA4] block mt-2">converts passing leads to loyal paying customers</span>
        </h2>
        <p
          className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto"
          data-aos="fade-up"
        >
          Transform your brand's voice and strategy with tailored content solutions that convert leads into loyal customers
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {services.map((service, index) => (
            <div key={index} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        <div className="text-center mb-20" data-aos="fade-up">
          <h3 className="text-3xl font-bold mb-8 text-gray-800">From ideation to execution, i've got you covered</h3>
          <div className="relative rounded-xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-1/2 h-auto mx-auto"
            >
              <source src="/Servicesimg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              
            </div>
          </div>
        </div>

        <div className="text-center" data-aos="fade-up">
          <button 
            onClick={scrollToContactForm}
            className="inline-block bg-[#44BBA4] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-[#2e8b7a] transition-all duration-300 transform hover:scale-105"
          >
            Let's Craft Your Story Together
          </button>
        </div>
      </div>
    </section>
  );
});

ServicesSection.displayName = 'ServicesSection';

export default ServicesSection;