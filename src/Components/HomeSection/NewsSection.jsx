import React from "react";
import { FaUser, FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const NewsSection = () => {
  return (
    <div className="mb-8 py-10 px-14 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
      Latest Updates and News
      </h2>

      {/* Container to keep cards centered with padding */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              <img
                src="/src/assets/experts_1.jpg"
                alt="Digital Marketing"
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                  Marketing
                </span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                The Future of Digital Marketing: Trends to Watch in 2025
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Discover the latest trends that will shape digital marketing
                strategies and consumer engagement in the coming year.
              </p>
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-2 justify-between">
                <div className="flex items-center gap-1">
                  <FaUser className="text-purple-600" />
                  Emily Rodriguez
                </div>
                <div className="flex items-center gap-1">
                  <FaCalendarAlt className="text-purple-600" />
                  Dec 10, 2024
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              <img
                src="/src/assets/experts_2.jpg"
                alt="Sustainability"
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                  Sustainability
                </span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Sustainable Business Practices: A Guide for Modern Companies
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                How businesses can implement eco-friendly practices while
                maintaining profitability and competitive advantage.
              </p>
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-2 justify-between">
                <div className="flex items-center gap-1">
                  <FaUser className="text-purple-600" />
                  David Thompson
                </div>
                <div className="flex items-center gap-1">
                  <FaCalendarAlt className="text-purple-600" />
                  Dec 8, 2024
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              <img
                src="/src/assets/experts_3.jpg"
                alt="Cybersecurity"
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                  Security
                </span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Cybersecurity in 2025: Protecting Your Digital Assets
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Essential cybersecurity strategies and best practices to
                safeguard your business in an increasingly digital world.
              </p>
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-2 justify-between">
                <div className="flex items-center gap-1">
                  <FaUser className="text-purple-600" />
                  Lisa Wang
                </div>
                <div className="flex items-center gap-1">
                  <FaCalendarAlt className="text-purple-600" />
                  Dec 5, 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
