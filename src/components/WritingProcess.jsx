import React from 'react';

export default function WritingProcess() {
  return (
    <section className="w-full px-6 md:px-12 py-16 bg-[#F6F7EB">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-8 md:mb-0 max-w-md">
          <h3 className="text-sm font-bold text-gray-600 mb-2">MY WRITING PROCESS</h3>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Like baking a delicious cake, quality content needs the right mix. Here's my recipe.
          </h2>
          <p className="text-gray-700 mb-6">
            My goal is to create original content moats that keep your business top of mind (and the SERPs) for a long time.
          </p>
          <button className="bg-[#44BBA4] text-white px-6 py-3 rounded-md transition-transform duration-300 transform hover:scale-105">
            Let's E-E-A-T!
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#44BBA4] p-4 rounded-2xl">
          {/* Card 1 */}
          <div className="bg-white border-2 border-black rounded-lg p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] w-64 h-64 m-4">
            <h4 className="text-sm font-bold text-black mb-2">01</h4>
            <h3 className="text-xl font-bold mb-2">Ingredient prep</h3>
            <p className="text-gray-700">
              Give me a headstart. Fill out my contact form. Then, we'll preheat the oven over a quick chat to see if we're a match made in heaven.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white border-2 border-black rounded-lg p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] w-64 h-64 m-4">
            <h4 className="text-sm font-bold text-black mb-2">02</h4>
            <h3 className="text-xl font-bold mb-2">Paperwork, all of it</h3>
            <p className="text-gray-700">
              If we are, I'll share a tailored outline to kick off. Then, we'll address the routine commitments.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white border-2 border-black rounded-lg p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] w-64 h-64 m-4">
            <h4 className="text-sm font-bold text-black mb-2">03</h4>
            <h3 className="text-xl font-bold mb-2">Bake the first draft</h3>
            <p className="text-gray-700">
              To make sure the crumbs don't taste better than the cake, I'll digest your brand guide and solutions and even talk to experts so I write a crisp first draft.
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-white border-2 border-black rounded-lg p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] w-64 h-64 m-4">
            <h4 className="text-sm font-bold text-black mb-2">04</h4>
            <h3 className="text-xl font-bold mb-2">Delivery</h3>
            <p className="text-gray-700">
              We'll do up to two free revisions (without changing the original brief) before I refine the final copy and turn off the oven. Chef's kiss.
            </p>
          </div>
        </div>
      </div>
      {/* New Section with White Background */}
      <div className="bg-black py-16 border-15 border-black rounded-lg"  data-aos="slide-right">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-4 text-white">
            "All the good writers are booked & busy..."
          </h2>
          <p className="text-white mb-6">
            If you wait until tomorrow, you'll be 100% right.
          </p>
          <button className="bg-white text-black px-6 py-3 rounded-md transition-transform duration-300 transform hover:scale-105">
            Bring me onboard
          </button>
        </div>
      </div>
    </section>
  );
}