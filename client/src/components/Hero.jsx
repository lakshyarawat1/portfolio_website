import React, {useState} from "react";
import heroImg from "../assets/header_bg.jpg";
import { CiMenuFries } from "react-icons/ci";
import icons from "../constants/heroIcons";
import { motion } from "framer-motion";
import { AiFillCaretDown } from "react-icons/ai";
const Hero = () => {

  return (
    <div>
      <div className="bg-gradient-to-r from-[#03897e] to-[#25b380] flex flex-row">
        <img src={heroImg} className="opacity-30 absolute w-full" />
        <div className="w-full h-full">
          <div className="flex mx-10 my-3">
            {icons.map((genre, idx, key) => {
              const Icon = icons[idx];
              return (
                <li
                  key={genre.id}
                  className=" cursor-pointer mx-6 my-10 text-2xl text-white opacity-60 list-none"
                >
                  <Icon key={key} />
                </li>
              );
            })}
          </div>
          <div className="text-white opacity-80 text-center mt-10">
            <div className=" text-8xl">
              Hi There ! <br />
            </div>
            <div className="text-4xl mt-4">
              I am Lakshya <br />
            </div>
            <div className="mt-2">WEB DEVELOPER / ETHICAL HACKER</div>
          </div>
          <div className="flex-row text-center my-10">
            <button className="m-10 border border-black py-2 px-10">
              Explore my projects
            </button>
            <button className="m-10 border border-black py-2 px-10">
              About Us
            </button>
            <AiFillCaretDown className="text-white text-3xl w-full mt-8 animate-bounce opacity-60" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
