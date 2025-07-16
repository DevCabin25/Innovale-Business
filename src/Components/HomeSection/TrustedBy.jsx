import React from "react";
import brand1 from "/src/assets/1.png";
import brand2 from "/src/assets/2.png";
import brand3 from "/src/assets/3.png";
import brand4 from "/src/assets/4.png";


const TrustedBy = () => {
  return (
    <div className="bg-[#52C5B6] py-12">
      <div className="max-w-screen-xl mx-auto px-10 lg:px-32 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Trusted by the world's <br /> leading companies
          </h2>
          <button className="bg-[#FD5F36] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#e14c25] transition">
            Free Consultation
          </button>
        </div>

        <div className="flex flex-col items-center lg:items-start gap-6">

          <div className="flex gap-20 flex-wrap justify-center lg:justify-start text-white">
            <div className="text-center">
              <h3 className="text-3xl font-bold">150+</h3>
              <p className="text-sm">Finished Session</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold">100%</h3>
              <p className="text-sm">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold">350+</h3>
              <p className="text-sm">Trusted Clients</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 items-center">
            <img src={brand1} alt="Brand 1" className="h-10 lg:h-12 object-contain" />
            <img src={brand2} alt="Brand 2" className="h-10 lg:h-12 object-contain" />
            <img src={brand3} alt="Brand 3" className="h-10 lg:h-12 object-contain" />
            <img src={brand4} alt="Brand 4" className="h-10 lg:h-12 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
