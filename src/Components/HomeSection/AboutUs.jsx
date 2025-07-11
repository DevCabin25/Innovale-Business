import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-br from-white to-gray-100 py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">


        <div class="relative w-72 overflow-hidden object-center rounded-lg">
          <img className="h-12" src="/src/assets/images/About-Us/Group 1000003669.png" alt="" />
          
          <img
            src="/src/assets//images/Expert/experts_3.jpg"
            alt="Background"
            class="w-full h-full object-cover -mt-6 ml-4 rounded-md"
          />
          {/* <!-- Circle design in front --> */}
          <div class="absolute bottom-0 right-0 w-48 h-48 bg-teal-400 rounded-tl-full"></div>
          <div className="absolute bottom-0 right-0 w-36 h-36 bg-white rounded-tl-full">
          </div>
        </div>

        <img className="absolute -mt-28 md:mt-[330px]  ml-48 w-36  z-50 " src="/src/assets/images/About-Us/Line Element.png" alt="" />

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
          <button className="mt-6 inline-block bg-[#FD5F36] text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-indigo-700 transition">
            Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
