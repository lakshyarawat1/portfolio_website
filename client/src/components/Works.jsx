import React from "react";

const Works = () => {
  return (
    <div className="bg-[#272c34] -mt-10">
      <img
        src="https://cdn.pixabay.com/photo/2018/01/25/14/15/nature-3106216_1280.jpg"
        className="opacity-40 absolute w-full h-[120vh] object-cover z-0"
      />
      <div className="flex flex-col md:flex-row md:mx-32 mx-10 my-10 relative py-32">
        <div className="p-10 bg-[#1b1e23] md:w-1/3">
          <div className="text-5xl font-black text-white mb-4 drop-shadow-lg">
            02.
          </div>
          <div className="headingFont text-2xl">FRONT END DEVELOPMENT</div>
          <div className="text-white text-md mt-8">
            In Front end development, I work in React JS with support libraries
            like tailwindcss, AnimeJS and ThreeJS. I have enough experience in
            HTML / CSS / JS and am comfortable with pure CSS too.
          </div>
        </div>
        <div className="p-10 bg-[#00BFA6] my-[-20px] md:w-1/3">
          <div className="text-5xl font-black text-[#f4ff55] mb-4">01.</div>
          <div className="font-black text-2xl text-[#1b1e23]">
            BACK END DEVELOPMENT
          </div>
          <div className="font-black text-md text-[#1b1e23] mt-8">
            In Backend development, I prefer to use NodeJS along with Express
            for middlewares. I have experience with django. I have been working
            with MERN stack for quite a long time and have created multiple
            projects using the same.
          </div>
        </div>
        <div className="p-10 bg-[#1b1e23] md:w-1/3">
          <div className="text-5xl font-black text-[#b0852d] mb-4">03.</div>
          <div className="headingFont text-2xl">CYBER SECURITY</div>
          <div className="text-white text-md mt-8">
            Cyber Security is my passion, I have expert knowledge in networking
            and linux environments. I have worked in kali linux for a long time
            and I am familiar with famous cyber security tools like burpsuite,
            john the ripper and aircrack.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
