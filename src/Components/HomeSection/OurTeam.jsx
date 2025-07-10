import React from "react";
import bgImage from "../../../public/BG.png";
const OurTeam = () => {
  return (
    <div>
      <div
        className="hero h-[280px] lg:h-[300px] relative"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-50"></div>

     
        <div className="hero-content text-neutral-content text-center z-10 mt-[-20px] lg:mt-[-40px]">
          <div className="max-w-md">
            <h1 className="text-xl sm:text-2xl font-bold text-[#FD5F36] uppercase tracking-wide mb-1">
              Our Team
            </h1>
            <p className="text-2xl sm:text-4xl font-extrabold text-white leading-snug">
              Meet with Expert
            </p>
          </div>
        </div>
      </div>
      <div className="relative z-20 -mt-32 px-6 lg:px-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <div className=" rounded-xl  p-4 text-center">
            <img src={"/public/Team Member-1.png"} alt="Team Member" />
          </div>

          {/* Card 2 */}
          <div className=" rounded-xl p-4 text-center">
            <img src={"/public/Team Member-2.png"} alt="Team Member" />
          </div>

          {/* Card 3 */}
          <div className=" rounded-xl  p-4 text-center">
            <img src={"/public/Team Member-3.png"} alt="Team Member" />
          </div>

          {/* Card 4 */}
          <div className=" rounded-xl p-4 text-center">
            <img src={"/public/Team Member-4.png"} alt="Team Member" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
