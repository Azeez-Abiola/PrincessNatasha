import React from 'react';

export default function ServicesTwoSection() {
  return (
    <section className="w-full px-6 md:px-12 py-16 bg-gray-50 mt-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-12">
          Here's how I can help you
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Service Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/4 h-64 transform transition-transform duration-300 hover:-translate-y-2">
            <img src="./cookie.png" alt="Icon 1" className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">No Cookie Cutters</h3>
            <p className="text-gray-700">
              Value-packed deliverables tailored to your goals that hit the mark, every single time.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/4 h-64 transform transition-transform duration-300 hover:-translate-y-2">
            <img src="./rocket.png" alt="Icon 2" className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Growth-focused Solutions</h3>
            <p className="text-gray-700">
              Memorable and measurable content that not only stands out but grows your business.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/4 h-64 transform transition-transform duration-300 hover:-translate-y-2">
            <img src="/path/to/icon3.png" alt="Icon 3" className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">For Bots and Humans</h3>
            <p className="text-gray-700">
              Quality and creative human-written SEO content your audience and SERPs will love.
            </p>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="mt-12">
          <button className="bg-[#44BBA4] text-white px-8 py-3 rounded-md transition duration-300 hover:bg-[#F6F7EB] hover:text-[#44BBA4] hover:border-[#44BBA4] hover:border">
            Work with me
          </button>
        </div>
      </div>
    </section>
  );
}