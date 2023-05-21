import React from "react";

const Skills = () => {
  return (
    <div className="bg-[#1b1e23] ">
      <img
        src="https://cdn.pixabay.com/photo/2016/03/26/05/14/fractal-1280076_1280.jpg"
        className="opacity-70 absolute w-full h-[107vh] object-cover z-0"
      />
      <div className="py-10 relative">
        <div className="headingFont text-4xl py-20 text-center">
          PROFESSIONAL SKILLS
        </div>
        <div className="flex flex-row text-white text-center">
          <div className="w-1/2">
            <div className="mx-20 my-10">
              <div className="headingFont text-2xl my-5 text-left mx-5">
                HTML / CSS / JS
              </div>
              <div className="text-right mr-10 mb-2 text-[#66dee5]">90%</div>
              <div className="w-full bg-black rounded-full">
                <div className="bg-[#66dee5] text-xs text-[#66dee5] font-bold text-center p-0.25 rounded-full w-[90%]">
                  90%
                </div>
              </div>
            </div>
            <div className="mx-20 my-10">
              <div className="headingFont text-3xl my-5 text-left mx-5">
                REACT JS
              </div>
              <div className="text-right mr-10 mb-2 text-[#66dee5]">80%</div>
              <div className="w-full bg-black rounded-full">
                <div className="bg-[#66dee5] text-xs text-[#66dee5] font-bold text-center p-0.25 rounded-full w-[80%]">
                  80%
                </div>
              </div>
            </div>
            <div className="mx-20 my-10">
              <div className="headingFont text-3xl my-5 text-left mx-5">
                NODE JS
              </div>
              <div className="text-right mr-10 mb-2 text-[#66dee5]">80%</div>
              <div className="w-full bg-black rounded-full">
                <div className="bg-[#66dee5] text-xs text-[#66dee5] font-bold text-center p-0.25 rounded-full w-[80%]">
                  80%
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="mx-20 my-10">
              <div className="headingFont text-3xl my-5 text-left mx-5">
                DJANGO
              </div>
              <div className="text-right mr-10 mb-2 text-[#66dee5]">70%</div>
              <div className="w-full bg-black rounded-full">
                <div className="bg-[#66dee5] text-xs text-[#66dee5] font-bold text-center p-0.25 rounded-full w-[70%]">
                  70%
                </div>
              </div>
            </div>
            <div className="mx-20 my-10">
              <div className="headingFont text-3xl my-5 text-left mx-5">
                NETWORKING
              </div>
              <div className="text-right mr-10 mb-2 text-[#66dee5]">90%</div>
              <div className="w-full bg-black rounded-full">
                <div className="bg-[#66dee5] text-xs text-[#66dee5] font-bold text-center p-0.25 rounded-full w-[90%]">
                  90%
                </div>
              </div>
            </div>
            <div className="mx-20 my-10">
              <div className="headingFont text-3xl my-5 text-left mx-5">
                KALI LINUX
              </div>
              <div className="text-right mr-10 mb-2 text-[#66dee5]">80%</div>
              <div className="w-full bg-black rounded-full">
                <div className="bg-[#66dee5] text-xs text-[#66dee5] font-bold text-center p-0.25 rounded-full w-[80%]">
                  80%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
