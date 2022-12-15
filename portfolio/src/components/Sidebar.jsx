import React from 'react'
import { BsGoogle, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'

const Sidebar = () => {
  return (
    <>
      <div className='flex flex-col m-10 text-3xl absolute bottom-0 text-slate-300'>
        <div className='line ml-3 mb-4'></div>
        <BsGithub className='mb-8 hover:text-4xl ' />
        <BsGoogle className='mb-8 hover:text-4xl' />
        <BsTwitter className='mb-8 hover:text-4xl' />
        <BsInstagram className='mb-8 hover:text-4xl' />
      </div>
      <div className='flex flex-col text-3xl absolute bottom-0 right-0 mr-14'>
      <div className='vertical text-slate-300 text-2xl mr-5 mb-5'>
            <a href='#'>@lakshyarawat1</a>
        </div>
        <div className='line-r'></div>
      </div>
    </>
  )
}

export default Sidebar