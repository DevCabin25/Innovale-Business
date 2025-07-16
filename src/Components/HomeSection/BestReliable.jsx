import React from "react";
import BusinessSolution from "/src/assets/Image & Elements (7).png";

const BestReliable = () => {
  return (
    <div className="bg-base-200 py-16">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12 xl:px-20 flex flex-col lg:flex-row items-center gap-16">

        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Best Reliable Solution <br className="hidden lg:block" /> For Your Business
          </h1>
          <p className="text-gray-600 mb-8">
            We help our clients succeed by creating brand identities, digital
            experiences, and print materials that communicate clearly and achieve
            marketing goals effectively.
          </p>
          <button className="bg-[#FD5F36] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 mb-10">
            Get Started Now
          </button>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                First-class <br /> Investment Solutions
              </h2>
              <p className="text-gray-600 text-sm">
                We can help you with your business strategy, architecture,
                mapping, and optimisation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Building <br /> the Idea of Future
              </h2>
              <p className="text-gray-600 text-sm">
                Offering performance-driven partnerships. CIBA specializes in
                business process outsourcing.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <img
            src={BusinessSolution}
            alt="Business Solution"
            className="w-full max-w-md mx-auto rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default BestReliable;
