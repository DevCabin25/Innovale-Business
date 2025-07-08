import React from "react";

const Testimonials = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-0">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          What Our Customers Are <br /> Saying About Us
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Main Testimonial Card */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <p className="text-gray-600 mb-6">
              “Wow. Amazing Company amazing Expert Manager. They know how to get things done when it comes to online trading. So impressed by the knowledge and sincerity. Thank you Mrs Victoria for your amazing company.”
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
              <div>
                <h4 className="font-bold text-gray-800">Jenny Wilson</h4>
                <p className="text-sm text-gray-500">Digital Marketer</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="rating">
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-yellow-400" checked readOnly />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-yellow-400" checked readOnly />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-yellow-400" checked readOnly />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-yellow-400" checked readOnly />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-yellow-400" checked readOnly />
              </div>
            </div>
          </div>

          {/* Small Bubble Cards */}
          <div className="relative flex flex-col gap-4">
            <div className="bg-white p-4 shadow rounded-lg w-56 ml-auto">
              <p className="text-gray-600 text-sm">Great service for my company….</p>
            </div>
            <div className="bg-teal-400 text-white p-4 shadow rounded-lg w-64">
              <p className="text-sm">Wow! Amazing company amazing Expert Manager….</p>
            </div>
            <div className="bg-white p-4 shadow rounded-lg w-56 ml-auto">
              <p className="text-gray-600 text-sm">Great service for my company….</p>
            </div>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center items-center mt-8 space-x-2">
          <div className="w-8 h-8 flex items-center justify-center bg-white text-gray-400 rounded-full border">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-orange-500"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
