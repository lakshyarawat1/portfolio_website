import React from "react";
import heroIcons from "../constants/heroIcons";

const Contact = () => {
  return (
    <div>
      <div className="bg-[#34383d] py-16">
        <div className="headingFont text-6xl text-center">CONTACT ME</div>
        <div className="m-20 flex">
          <div className="ml-20 w-1/2">
            <label className="text-slate-300 text-2xl mr-20">Name * </label>
            <input className="bg-transparent border-b w-[90%] text-slate-300" />
          </div>
          <div className="w-1/2">
            <label className="text-slate-300 text-2xl">Email * </label>
            <input className="bg-transparent border-b w-[90%] text-slate-300" />
          </div>
        </div>
        <div className="ml-36 w-1/2">
          <label className="text-slate-300 text-2xl">Message * </label>
          <textarea className="bg-transparent border-b w-full" />
        </div>
        <div className="text-center w-full my-20">
          <div className="inline-block text-[#06c6c6] border border-[#06c6c6] px-16 py-2 hover:bg-[#06c6c6] hover:text-[#34383d]">
            Submit
          </div>
        </div>
        <div className="text-[#68fdfd] flex w-full justify-center">
          {heroIcons.map((genre, idx, key) => {
            const Icon = heroIcons[idx];
            return (
              <li
                key={genre.id}
                className="bg-[#2b2e33] rounded-full p-4 cursor-pointer mx-6 my-10 text-2xl list-none hover:bg-[#68fdfd] hover:text-[#34383d]"
              >
                <Icon key={key} />
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
