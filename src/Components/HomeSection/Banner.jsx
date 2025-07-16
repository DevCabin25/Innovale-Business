import React from "react";
import BannerImage from '/src/assets/banner.png'

const Banner = () => {
  return (
    <div className="w-full  py-16 px-4 sm:px-8">
      <div className="flex flex-col md:flex-row min-h-[500px]">
        <div className="w-full md:w-1/2 bg-[#30344E] text-white flex flex-col justify-center px-8 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
            We Provide Premium Consulting Service For Your Business
          </h1>
          <p className="mb-6 text-sm md:text-base">
            The Premium Consulting Service provides a faster way to process
            plans, register dealings and create titles.
          </p>
          <button className= "w-1/2 bg-[#FD5F36] px-4 py-2 text-sm text-white rounded-md hover:bg-purple-800 transition">
            Get Started
          </button>

          <p className="mt-4 text-sm text-gray-200">
            Already member of our community?{" "}
            <span className="underline cursor-pointer text-white hover:text-gray-300">
              Sign in
            </span>
          </p>
        </div>
        <div className="w-full md:w-1/2 bg-[#52C5B6]">
          <img
            src={BannerImage}
            alt="Banner"
            className="w-full h-full object-cover max-h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
