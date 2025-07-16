import React from "react";
import bgImage from "/src/assets/BG.png";
import expert1 from "/src/assets/images/Expert/experts_1.jpg";
import expert2 from "/src/assets/images/Expert/experts_2.jpg";
import expert3 from "/src/assets/images/Expert/experts_3.jpg";
import expert4 from "/src/assets/images/Expert/experts_4.jpg";


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
          <div className="realtive rounded-xl  p-4 text-center">
            <img className="h-[250px] w-[330px] rounded-md  " src={expert1} alt="Team Member" />
            <div className="bg-white p-4 text-black absolute -mt-10  w-40 h-16 rounded-tr-md flex justify-center items-center gap-2">
              <div>
                <p className="bg-black w-6 h-[1px] mb-3"></p>
              </div>
              <div>
                <p className="text-[13px] font-semibold ">Eleanor Pena</p>
                <p className="text-[10px] text-gray-500">Senior Engineer</p>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="realtive rounded-xl  p-4 text-center">
            <img className="h-[250px] w-[330px] rounded-md  " src={expert2} alt="Team Member" />
            <div className="bg-[#52C5B6] p-4 text-black absolute -mt-10  w-40 h-16 rounded-tr-md flex justify-center items-center gap-2">
              <div>
                <p className="bg-white   w-6 h-[1px] mb-3"></p>
              </div>
              <div>
                <p className="text-[13px] font-semibold text-white">Jenny Wilson</p>
                <p className="text-[10px] text-gray-700">Project Manager</p>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="realtive rounded-xl  p-4 text-center">
            <img className="h-[250px] w-[330px] rounded-md  " src={expert3} alt="Team Member" />
            <div className="bg-white p-4 text-black absolute -mt-10  w-40 h-16 rounded-tr-md flex justify-center items-center gap-2">
              <div>
                <p className="bg-black w-6 h-[1px] mb-3"></p>
              </div>
              <div>
                <p className="text-[13px] font-semibold ">Jerome Bell</p>
                <p className="text-[10px] text-gray-500">Senior Engineer</p>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="realtive rounded-xl  p-4 text-center">
            <img className="h-[250px] w-[330px] rounded-md  " src={expert4} alt="Team Member" />
            <div className="bg-white p-4 text-black absolute -mt-10  w-40 h-16 rounded-tr-md flex justify-center items-center gap-2">
              <div>
                <p className="bg-black w-6 h-[1px] mb-3"></p>
              </div>
              <div>
                <p className="text-[13px] font-semibold ">Robert Fox</p>
                <p className="text-[10px] text-gray-500">Marketing Expert</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OurTeam;
