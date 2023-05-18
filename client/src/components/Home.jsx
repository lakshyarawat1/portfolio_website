import React, { useEffect } from "react";
import profilePic from "../assets/react.svg";
import { RiCodeSSlashLine } from "react-icons/ri";
import { SiKalilinux } from "react-icons/si";
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
    <div>
      <div className="bg-[#1b1e23] text-center pb-20">
        <div className="headingFont my-16 text-5xl inline-block text-transparent font-black bg-clip-text">
          ABOUT ME
        </div>
        <div className="flex flex-row text-white">
          <div>
            <div className="w-[50%]  flex flex-row  mt-2">
              <motion.div
                className="text-9xl ml-20 my-20 text-[#25b380]"
                initial="hidden"
                animate={controls}
                variants={logoVariants}
              >
                <RiCodeSSlashLine />
              </motion.div>
              <div className="text-9xl ml-36 mr-20 my-20 font-bold text-[#47d7ff] inline-block">
                <SiKalilinux />
              </div>
            </div>
            <button className="bg-gradient-to-r from-[#12a978] to-[#06c6c6] font-black text-lg px-5 py-3 rounded-lg">
              Download Resume
            </button>
          </div>
          <div className="flex flex-col">
            <div className="mx-20 text-xl mt-5">
              Hello ! <br />I am Lakshya, Web Developer with experience in MERN
              stack and Django. Experience with all the stages of web
              development for dynamic web projects. Having an in-depth knowledge
              in UI/UX experience and backend development including ReactJs,
              NodeJs, Django and ExpressJs. Learner in the field of ethical
              hacking and cyber security. Strong background in management and
              leadership.
            </div>
            <div className="mt-16 text-left ml-20 flex">
              <div className="headingFont text-3xl">NAME :</div>
              <div className="text-3xl ml-10">Lakshya</div>
            </div>
            <div className="mt-5 text-left ml-20 flex">
              <div className="headingFont text-3xl">DATE OF BIRTH :</div>
              <div className="text-3xl ml-10">01st May 2003</div>
            </div>
            <div className="mt-5 text-left ml-20 flex">
              <div className="headingFont text-3xl">NATIONALITY :</div>
              <div className="text-3xl ml-10">Indian</div>
            </div>
            <div className="mt-5 text-left ml-20 flex">
              <div className="headingFont text-3xl">ADDRESS :</div>
              <div className="text-3xl ml-10">New Delhi</div>
            </div>
            <div className="mt-5 text-left ml-20 flex">
              <div className="headingFont text-3xl">EMAIL :</div>
              <div className="text-3xl ml-10">lakshya.paramount@gmail.com</div>
            </div>
            <div className="mt-5 text-left ml-20 flex">
              <div className="headingFont text-3xl">CONTACT NO :</div>
              <div className="text-3xl ml-10">(+91) 8368692002</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
