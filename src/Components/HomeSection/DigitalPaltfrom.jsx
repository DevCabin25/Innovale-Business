import React from "react";

const DigitalPlatform = () => {
  return (
    <div className="bg-base-100 py-16">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 shadow-xl rounded-xl bg-white p-6">

          <div className="w-full lg:w-1/2">
            <img
              src="/public/Image & Element.png"
              alt="Digital Platform"
              className="w-full max-w-md mx-auto rounded-lg"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold leading-snug">
              Startup digital platform <br /> for investing
            </h2>
            <div className="space-y-4">

              <div className="collapse collapse-arrow border border-[#D6D8E8] rounded-lg bg-base-200">
                <input type="radio" name="accordion" defaultChecked />
                <div className="collapse-title text-lg font-medium">
                   Securing Digital Payment
                </div>
                <div className="collapse-content text-sm text-gray-700">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                    pariatur dolores earum assumenda quisquam, tempore quo est
                    soluta, expedita veniam et deleniti optio commodi repellendus
                    exercitationem quia rerum dicta laborum.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow border  border-[#D6D8E8]  rounded-lg bg-base-200">
                <input type="radio" name="accordion" />
                <div className="collapse-title text-lg bg-[#52C5B6] font-medium">
                  Investing in Digital Company
                </div>
                <div className="collapse-content text-sm text-gray-700">
                  <p>
                    Through our Connected Content™ approach, we unite communications,
                    digital experiences, and performance marketing to help more than
                    1600 global companies.
                  </p>
                </div>
              </div>


              <div className="collapse collapse-arrow border  border-[#D6D8E8]  rounded-lg bg-base-200">
                <input type="radio" name="accordion" />
                <div className="collapse-title text-lg font-medium">
                   Building the Idea of Future
                </div>
                <div className="collapse-content text-sm text-gray-700">
                  <p>
                    We help you bring futuristic ideas to life by merging tech,
                    design, and business logic into scalable products.
                  </p>
                </div>
              </div>


              <div className="collapse collapse-arrow border  border-[#D6D8E8]  rounded-lg bg-base-200">
                <input type="radio" name="accordion" />
                <div className="collapse-title text-lg font-medium">
                   Accurate and Friendly Support
                </div>
                <div className="collapse-content text-sm text-gray-700">
                  <p>
                    Our expert support team is always ready to help you with your
                    digital transformation journey — quick, clear, and friendly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalPlatform;
