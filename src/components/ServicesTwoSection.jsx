import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Cookie, Rocket, Users } from 'lucide-react';

export default function ServicesTwoSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    {
      icon: <Cookie className="h-12 w-12 text-[#44BBA4]" />,
      title: "No Cookie Cutters",
      description: "Value-packed deliverables tailored to your goals that hit the mark, every single time."
    },
    {
      icon: <Rocket className="h-12 w-12 text-[#44BBA4]" />,
      title: "Growth-focused Solutions",
      description: "Memorable and measurable content that not only stands out but grows your business."
    },
    {
      icon: <Users className="h-12 w-12 text-[#44BBA4]" />,
      title: "For Bots and Humans",
      description: "Quality and creative human-written SEO content your audience and SERPs will love."
    }
  ];

  return (
    <section className="w-full py-16 bg-gray-50 lg:flex lg:justify-center lg:items-center">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          data-aos="fade-up"
        >
          Here's how I can help you
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:justify-items-center">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white text-gray-900 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 w-full max-w-sm"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex flex-col items-center">
                {service.icon}
                <h3 className="mt-4 text-xl font-bold">{service.title}</h3>
              </div>
              <div className="mt-4">
                <p className="text-center text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="300">
          <button className="px-6 py-3 text-lg font-semibold text-white bg-[#44BBA4] rounded-md hover:bg-[#2e8b7a] transition-colors duration-300">
            Work with me
          </button>
        </div>
      </div>
    </section>
  );
}

