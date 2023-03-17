import React from "react";

const Works = () => {
  return (
    <div className="bg-[#272c34] py-20">
      <div className="flex flex-row mx-32 my-10">
        <div className="p-10 bg-[#1b1e23]">
          <div className="text-5xl font-black text-white mb-4">02.</div>
          <div className="headingFont text-3xl">FRONT END DEVELOPMENT</div>
          <div className="text-white text-lg mt-8">
            In Front end development, I work in React JS with support libraries
            like tailwindcss, AnimeJS and ThreeJS. I have enough experience in
            HTML / CSS / JS and am comfortable with pure CSS too.
          </div>
        </div>
        <div className="p-10 bg-[#12939a] my-[-20px]">
          <div className="text-5xl font-black text-[#edff25] mb-4">01.</div>
          <div className="font-black text-3xl text-[#1b1e23]">
            BACK END DEVELOPMENT
          </div>
          <div className="font-black text-lg text-[#1b1e23] mt-8">
            In Backend development, I prefer to use NodeJS along with Express
            for middlewares. I have experience with django. I have been working
            with MERN stack for quite a long time and have created multiple
            projects using the same.
          </div>
        </div>
        <div className="p-10 bg-[#1b1e23]">
          <div className="text-5xl font-black text-[#b0852d] mb-4">03.</div>
          <div className="headingFont text-3xl">CYBER SECURITY</div>
          <div className="text-white text-lg mt-8">
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
