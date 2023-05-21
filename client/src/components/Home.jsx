import React, { useEffect } from "react";
import profilePic from "../assets/react.svg";
import { RiCodeSSlashLine } from "react-icons/ri";
import { SiGithub, SiKalilinux } from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const logoVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="bg-black">
      <img
        src="https://cdn.pixabay.com/photo/2016/10/29/09/25/abstract-1780158_1280.png"
        className="absolute opacity-60 w-full h-[101vh] object-cover z-0"
      />
      <div className=" bg-transparent text-center pb-20 z-10 relative">
        <div className="headingFont my-16 text-5xl inline-block text-transparent font-black bg-clip-text">
          ABOUT ME
        </div>
        <div className="flex flex-row text-white ">
          <div>
            <div className="w-[50%]  hidden md:flex md:flex-row mt-2">
              <div className="text-[140px] ml-20 my-20 text-[#25b380]">
                <RiCodeSSlashLine />
              </div>
              <div className="text-[140px] ml-36 mr-20 my-20 font-bold text-[#47d7ff] inline-block">
                <SiKalilinux />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-[55%]">
            <div className="mx-20 text-sm md:text-lg mt-5">
              Hello ! <br />I am Lakshya, Web Developer with experience in MERN
              stack, NextJs, typescript and Django. Experience with all the
              stages of web development for dynamic web projects. Having an
              in-depth knowledge in UI/UX experience and backend development
              including ReactJs, NodeJs, and Django. Learner in the field of
              ethical hacking and cyber security. Strong background in
              management and leadership.
            </div>
          </div>
        </div>
      </div>
      <div className="text-white h-[8vh] w-full text-center pt-3 relative">
        Explore my projects on Github
      </div>
    </div>
  );
};

export default Home;
