import React from "react";
import { GiSpellBook } from "react-icons/gi";

const Education = () => {
  return (
    <div className=" bg-[#272c34] pb-20">
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2016/10/30/20/46/universe-1784292_1280.jpg"
          className="opacity-50 absolute w-full h-[168vh] object-cover"
        />
      </div>
      <div className="headingFont text-2xl md:text-5xl text-center p-14 font-black relative">
        EDUCATION
      </div>
      <div className="min-h-screen flex flex-col justify-center">
        <div className="py-3">
          <div className="relative antialiased">
            {/* vertical bar */}
            <div className="hidden sm:block w-1 bg-[#66dee5] mx-10 absolute h-full left-1/2 transform -translate-x-1/2"></div>
            {/* left section */}
            <div className="mt-6 ">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-start w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2">
                    <div className="p-4 headingFont text-lg md:text-5xl md:text-right">
                      12th Standard
                    </div>
                    <div className="text-white text-md md:text-2xl w-1/2 p-10 md:p-0 md:float-right font-bold">
                      2020 - 21 <br /> Paramount International School , New
                      Delhi
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-[#272c34] border-4 border-[#66dee5] w-16 h-16 absolute left-[53.1%] top-[0%] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                  <GiSpellBook className="text-[#66dee5] text-2xl" />
                </div>
              </div>
            </div>
            {/* right section */}
            <div className="mt-28">
              <div className="flex flex-col items-center">
                <div className="flex justify-end w-full mx-auto items-center">
                  <div className="absolute left-[55%]">
                    <div className="p-8 md:mt-16 -mt-16 headingFont md:text-4xl">
                      Graduation( Pursuing )
                    </div>
                    <div className="text-white md:text-2xl text-sm ml-10 font-bold">
                      2021 - 24 <br /> Bachelors in Computer Applications (BCA){" "}
                      <br /> Maharaja Surajmal Institute, Indraprastha
                      University, Delhi
                    </div>
                  </div>
                  <div className="rounded-full bg-[#272c34] border-4 border-[#66dee5] w-16 h-16 absolute left-[53.1%] top-[34%] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <GiSpellBook className="text-[#66dee5] text-2xl" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-48 ">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-start w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2">
                    <div className="p-4 headingFont md:text-5xl text-right">
                      Ethical Hacking Course
                    </div>
                    <div className="text-white md:text-2xl w-1/2 float-right font-bold">
                      2022 <br /> NPTEL ( Government of India Initiative )
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-[#272c34] border-4 border-[#66dee5] w-16 h-16 absolute left-[53.1%] top-[75%] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                  <GiSpellBook className="text-[#66dee5] text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
