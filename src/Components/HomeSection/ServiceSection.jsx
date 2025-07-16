import React from "react";
import sproutIcon from "/src/assets/002-sprout 1.png";
import graphIcon from "/src/assets/003-graph 1.png";
import negotiationIcon from "/src/assets/004-negotiation 1.png";
import startupIcon from "/src/assets/008-startup 1.png";



const ServiceSection = () => {
  return (
    <div className="py-16 px-6 lg:px-20 bg-white">

      <div className="flex justify-between items-center flex-wrap mb-12">
        <div>
          <h3 className="text-red-500 text-lg font-semibold">Service</h3>
          <h2 className="text-3xl md:text-4xl text-[#30344E] font-bold leading-snug">
            Find the service <br /> we provide
          </h2>
        </div>
        <p className="text-gray-600 max-w-lg">
          Our consultants have years of experience in success. <br />
          Through the provision of our services.
        </p>
      </div>

       {/* Card section  */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card bg-base-100 shadow-xl">
          <figure className="pt-6">
            <img
              className="bg-[#F44C4C] rounded-2xl"
              src={sproutIcon}
              alt=""
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title">
              Grow Your Brand And <br /> Business
            </h2>
            <p>
              That community can of course lend to sales - that's how brand and
              business go hand-in-hand
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="pt-6">
            <img
              className="bg-[#52C5B6] rounded-2xl"
              src={graphIcon}
              alt=""
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title">Increase Your Conversion <br /> Rate</h2>
            <p>
              There are two ways to increase your conversion rate: increase
              their motivation and make it easier
            </p>
          </div>
        </div>
        <div className="card bg-base-100  shadow-xl">
          <figure className="pt-6">
            <img
              className="bg-[#2BCCFF] rounded-2xl"
              src={negotiationIcon}
              alt=""
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title ">
              Business Plan 
              Consulting
            </h2>
            <p>
              A business plan consultant provides strategic direction by
              creating or methodically pressure-testing
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="pt-6">
            <img
              className="bg-[#5D5FEF] rounded-2xl"
              src={startupIcon}
              alt=""
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title">Business Startup  Analysis</h2>
            <p>
              You must do different kinds of research for your startup. However,
              before you make any new decision
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection; 
