import React from 'react'
import heroImg from '../assets/header_bg.jpg'
import { CiMenuFries } from 'react-icons/ci'
import icons from '../constants/heroIcons'

const Hero = () => {
  return (
    <div>
          <div className='fixed bg-gradient-to-r from-[#03897e] to-[#25b380] flex flex-row'>
              <img src={heroImg} className='w-full opacity-30' /> 
              <div className='flex fixed mx-10 my-3'>
                   {
                  icons.map((genre, idx, key) => {
                      const Icon = icons[idx]

                      return (
                          <li key={genre.id} className=' cursor-pointer mx-6 my-10 text-2xl text-white opacity-60 list-none'>
                              <Icon key={key} />
                          </li>
                      )
                  })
                  }
                <CiMenuFries className='m-10 text-3xl cursor-pointer font-bold' />
              </div>
          </div>
    </div>
  )
}

export default Hero