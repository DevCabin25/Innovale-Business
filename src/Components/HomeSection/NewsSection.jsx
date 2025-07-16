import React from "react";
import { FaUser, FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import updateNews1 from "/src/assets/images/update-news/update_and_news_1.jpg";
import updateNews2 from "/src/assets/images/update-news/update_and_news_2.jpg";
import updateNews3 from "/src/assets/images/update-news/update_and_news_3.jpg";


const NewsSection = () => {
  return (
    <div className="mb-8 py-10 px-14 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Latest Updates and News
      </h2>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              <img
                src={updateNews1}
                alt="Digital Marketing"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Simple Juice Recipes to boost your immune system
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Objectively restore stand-alone markets rather than
                enterprise-wide products.
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
                src={updateNews2}
                alt="Sustainability"
                className="w-full h-64 object-cover "
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                4 steps for measuring the impact of product
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Clearly, the rise of time spent on social media creates a strain
                on all of its users, and these effects
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
                src={updateNews3}
                alt="Cybersecurity"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                The modern product manager’s tech stack
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                The essential tools for the modern product manager for capturing
                feedback, prioritizing, ideating
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
