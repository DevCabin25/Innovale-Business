import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-br from-white to-gray-100 py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative">
          <img
            src="/src/assets/Image & Elements.png"
            alt="About Us"
            className="rounded-3xl shadow-lg w-full h-auto object-cover transform transition duration-500"
          />
          <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md text-xs px-3 py-1 rounded-md shadow text-gray-700 font-medium">
            Trusted Since 2010
          </div>
        </div>

        {/* Text Section */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">
            About <span className="text-indigo-600">Us!</span>
          </h2>
          <p className="text-3xl text-[#30344E]">
            Welcome to World Best <br /> Business Company
          </p>
          <p className="text-gray-700">
            We partner with experienced and qualified Accountants, Financial Advisors, and Chartered Secretaries to provide:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start text-gray-700">
              <span className="text-indigo-500 mr-2">✔</span>
              Monthly assessment report
            </li>
            <li className="flex items-start text-gray-700">
              <span className="text-indigo-500 mr-2">✔</span>
              Tax planning consultation
            </li>
            <li className="flex items-start text-gray-700">
              <span className="text-indigo-500 mr-2">✔</span>
              Monthly rent problem solution
            </li>
          </ul>
          <button className="mt-6 inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-indigo-700 transition">
            Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
