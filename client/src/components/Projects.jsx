import React from 'react'
import imageOne from '../assets/images.jpg'
import { AiOutlineSwap } from 'react-icons/ai'

const Projects = () => {
  return (
    <div className="bg-[#1b1e23] text-center py-20">
      <div className="headingFont text-5xl">SOME OF MY WORKS</div>
      <div className="bg-gradient-to-r from-[#12a978] to-[#06c6c6] p-20 mt-10 flex">
        <div className="bg-[#213f71] rounded-3xl">
                  <div className=''>
                      <img src={imageOne} className='opacity-40 rounded-3xl' />
                  </div>
        </div>
      </div>
    </div>
  );
}

export default Projects