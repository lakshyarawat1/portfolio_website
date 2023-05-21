import React, { useRef } from "react";
import heroImg from "../assets/header_bg.jpg";
import { motion } from "framer-motion";
import { AiFillCaretDown } from "react-icons/ai";
import {
  SiGithub,
  SiGmail,
  SiHackerone,
  SiInstagram,
  SiTwitter,
} from "react-icons/si";

const Hero = () => {
  return (
    <div>
      <div className="bg-[#272c34] flex flex-col -mt-8">
        <img
          src="https://cdn.pixabay.com/photo/2021/09/13/13/55/cover-6621486_1280.jpg"
          className="opacity-40 absolute w-full h-[107vh] object-cover z-0"
        />
        <div className="w-full h-full flex z-10">
          <div className="hidden mx-10 my-12 md:flex md:flex-col">
            <a href="https://hackerone.com/hacker_no_8055?type=user">
              <SiHackerone className="scale-100 hover:scale-150 cursor-pointer mx-6 my-10 text-2xl text-white list-none" />
            </a>
            <a href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=userid@gmail.com&tf=1">
              <SiGmail className="scale-100 hover:scale-150 cursor-pointer mx-6 my-10 text-2xl text-white list-none" />
            </a>
            <a href="https://www.instagram.com/___alpha___j44t">
              <SiInstagram className="scale-100 hover:scale-150 cursor-pointer mx-6 my-10 text-2xl text-white list-none" />
            </a>
            <a href="https://www.twitter.com/Lakshya40740974">
              <SiTwitter className="scale-100 hover:scale-150 cursor-pointer mx-6 my-10 text-2xl text-white list-none" />
            </a>
            <a href="https://www.github.com/lakshyarawat1">
              <SiGithub className="scale-100 hover:scale-150 cursor-pointer mx-6 my-10 text-2xl text-white list-none" />
            </a>
          </div>
          <div className="text-white text-center mt-10 mx-auto h-[100vh] pt-20">
            <div className="text-4xl md:text-7xl font-black text-center opacity-90 tracking-widest">
              HI THERE
            </div>
            <div className="mt-6">I AM LAKSHYA</div>
            <div className="mt-6">WEB DEVELOPER / ETHICAL HACKER</div>
            <div className="flex-row text-center my-16">
              <button className="m-10 border border-white rounded-xl py-2 px-10 hover:bg-white hover:text-black">
                EXPLORE MY PROJECTS
              </button>
              <button className="m-10 border border-white rounded-xl py-2 px-10 hover:bg-white hover:text-black">
                ABOUT ME
              </button>
              <AiFillCaretDown className="text-white hidden md:flex text-3xl w-full mt-12 animate-bounce opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
