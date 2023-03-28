import React, { useRef } from "react";
import heroImg from "../assets/header_bg.jpg";
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
                <motion.div
                  animate={{ x: 0, y: 0 }}
                  initial={{ x: -100, y: -100, opacity: 0.6 }}
                  whileHover={{ scale: 1.5, opacity: 1 }}
                  drag={true}
                  whileTap={{ scale: 0.8, opacity: 1 }}
                  key={genre.id}
                  className=" cursor-pointer mx-6 my-10 text-2xl text-white list-none"
                >
                  <Icon key={key} />
                </motion.div>
              );
            })}
          </div>
          <div className="text-white text-center mt-10">
            <div className="text-8xl flex w-full text-center pl-[35%]">
              <motion.p
                initial={{ scale: 0.2, x: -200 }}
                whileTap={{ scale: 0.8, opacity: 1 }}
                animate={{ scale: 1, x: 0, opacity: 0.6 }}
                whileHover={{ scale: 1.5, opacity: 1 }}
              >
                H
              </motion.p>
              <motion.p
                initial={{ scale: 0.2, x: -200 }}
                whileTap={{ scale: 0.8, opacity: 1 }}
                animate={{ scale: 1, x: 0, opacity: 0.6 }}
                whileHover={{ scale: 1.5, opacity: 1 }}
                
              >
                i
              </motion.p>

              <motion.p
                initial={{ scale: 0.2, x: -200 }}
                whileTap={{ scale: 0.8, opacity: 1 }}
                animate={{ scale: 1, x: 0, opacity: 0.6 }}
                whileHover={{ scale: 1.5, opacity: 1 }}
                className="ml-10"
              >
                T
              </motion.p>
              <motion.p
                initial={{ scale: 0.2, x: -200 }}
                whileTap={{ scale: 0.8, opacity: 1 }}
                animate={{ scale: 1, x: 0, opacity: 0.6 }}
                whileHover={{ scale: 1.5, opacity: 1 }}
              >
                h
              </motion.p>
              <motion.p
                initial={{ scale: 0.2, x: -200 }}
                whileTap={{ scale: 0.8, opacity: 1 }}
                animate={{ scale: 1, x: 0, opacity: 0.6 }}
                whileHover={{ scale: 1.5, opacity: 1 }}
              >
                e
              </motion.p>
              <motion.p
                initial={{ scale: 0.2, x: -200 }}
                whileTap={{ scale: 0.8, opacity: 1 }}
                animate={{ scale: 1, x: 0, opacity: 0.6 }}
                whileHover={{ scale: 1.5, opacity: 1 }}
              >
                r
              </motion.p>
              <motion.p
                initial={{ scale: 0.2, x: -200 }}
                whileTap={{ scale: 0.8, opacity: 1 }}
                animate={{ scale: 1, x: 0, opacity: 0.6 }}
                whileHover={{ scale: 1.5, opacity: 1 }}
              >
                e
              </motion.p>
              <motion.p
                initial={{ scale: 0.2, x: -200 }}
                whileTap={{ scale: 0.8, opacity: 1 }}
                animate={{ scale: 1, x: 0, opacity: 0.6 }}
                whileHover={{ scale: 1.5, opacity: 1 }}
                className="ml-10"
              >
                !
              </motion.p>
              <br />
            </div>
            <div className="flex w-full text-3xl gap-2 mt-5 pl-[35%]">
              <motion.p
                initial={{ scale: 0.2, x: -200 }}
                whileTap={{ scale: 0.8, opacity: 1 }}
                animate={{ scale: 1, x: 0, opacity: 0.6 }}
                whileHover={{ scale: 1.5, opacity: 1 }}
                className="ml-10"
              >
                I
              </motion.p>
              <motion.p
                initial={{ scale: 0.2, x: -200 }}
                whileTap={{ scale: 0.8, opacity: 1 }}
                animate={{ scale: 1, x: 0, opacity: 0.6 }}
                whileHover={{ scale: 1.5, opacity: 1 }}
                className="ml-5"
              >
                a
              </motion.p>
              <motion.p
                initial={{ scale: 0.2, x: -200 }}
                whileTap={{ scale: 0.8, opacity: 1 }}
                animate={{ scale: 1, x: 0, opacity: 0.6 }}
                whileHover={{ scale: 1.5, opacity: 1 }}
                className=""
              >
                m
              </motion.p>
              <motion.p
                initial={{ scale: 0.2, x: -200 }}
                whileTap={{ scale: 0.8, opacity: 1 }}
                animate={{ scale: 1, x: 0, opacity: 0.6 }}
                whileHover={{ scale: 1.5, opacity: 1 }}
                className="ml-10"
              >
                L
              </motion.p>
              <motion.p
                initial={{ scale: 0.2, x: -200 }}
                whileTap={{ scale: 0.8, opacity: 1 }}
                animate={{ scale: 1, x: 0, opacity: 0.6 }}
                whileHover={{ scale: 1.5, opacity: 1 }}
                className=""
              >
                a
              </motion.p>
              <motion.p
                initial={{ scale: 0.2, x: -200 }}
                whileTap={{ scale: 0.8, opacity: 1 }}
                animate={{ scale: 1, x: 0, opacity: 0.6 }}
                whileHover={{ scale: 1.5, opacity: 1 }}
                className=""
              >
                k
              </motion.p>
              <motion.p
                initial={{ scale: 0.2, x: -200 }}
                whileTap={{ scale: 0.8, opacity: 1 }}
                animate={{ scale: 1, x: 0, opacity: 0.6 }}
                whileHover={{ scale: 1.5, opacity: 1 }}
                className=""
              >
                s
              </motion.p>
              <motion.p
                initial={{ scale: 0.2, x: -200 }}
                whileTap={{ scale: 0.8, opacity: 1 }}
                animate={{ scale: 1, x: 0, opacity: 0.6 }}
                whileHover={{ scale: 1.5, opacity: 1 }}
                className=""
              >
                h
              </motion.p>
              <motion.p
                initial={{ scale: 0.2, x: -200 }}
                whileTap={{ scale: 0.8, opacity: 1 }}
                animate={{ scale: 1, x: 0, opacity: 0.6 }}
                whileHover={{ scale: 1.5, opacity: 1 }}
                className=""
              >
                y
              </motion.p>
              <motion.p
                initial={{ scale: 0.2, x: -200 }}
                whileTap={{ scale: 0.8, opacity: 1 }}
                animate={{ scale: 1, x: 0, opacity: 0.6 }}
                whileHover={{ scale: 1.5, opacity: 1 }}
                className=""
              >
                a
              </motion.p>
            </div>
            <motion.div className="mt-2"
              initial={{ opacity: 0 }} animate={{ opacity: 1, delay : 1 }}
              >WEB DEVELOPER / ETHICAL HACKER</motion.div>
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
