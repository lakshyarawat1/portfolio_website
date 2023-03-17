import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa'

const HireBanner = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#14a397] to-[#37e0e0] p-16 flex">
        <div className="text-white text-7xl ml-10">
          <FaTelegramPlane />
        </div>
        <div className="text-center w-full">
          <div className="text-white text-3xl font-black">
            HIRE ME FOR YOUR PROJECTS
          </div>
          <div className="text-white text-lg mt-5">
            I am a freelancer and available for any suitable projects. <br />
            As I am a learner too, I am also available for any cyber security
            related projects.
          </div>
        </div>
              <div className='w-1/6 border mt-14 font-black border-black h-10 text-center hover:bg-black pt-2 hover:text-white'>
                    HIRE ME
              </div>
      </div>
    </div>
  );
}

export default HireBanner