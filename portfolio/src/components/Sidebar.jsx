import React from 'react'
import { BsGoogle, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'
import { AiOutlineCloseCircle , AiOutlineMenu } from 'react-icons/ai'
import { sideItems } from '../constants/sideItems'
import { useState } from 'react'

const Sidebar = () => {

  const [ toggleSidebar, setToggleSidebar] = useState(true);

  return (
    <>
    <div className='side fixed'>
      <div className='m-10 mt-32 text-3xl absolute text-slate-300 flex-col'>
          <div className='line ml-3 mb-4'></div>
          <BsGithub className='mb-8 hover:text-4xl ' />
          <BsGoogle className='mb-8 hover:text-4xl' />
          <BsTwitter className='mb-8 hover:text-4xl' />
          <BsInstagram className='mb-8 hover:text-4xl' />
        </div>
        <div className='flex flex-col text-3xl ml-[81rem] mt-48'>
        <div className='vertical text-slate-300 text-2xl mr-5 mb-5'>
              <a href='#'>@lakshyarawat1</a>
          </div>
          <div className='line-r'></div>
        </div>
    </div>
    <div className='mobileSide hidden'>
    {
      toggleSidebar ?
       <div className='text-3xl text-white m-10'>
          <AiOutlineMenu onClick={() => setToggleSidebar(false)} className='cursor-pointer' />
        </div> 
      :
        <div className='left-0 top-0 h-full bg-white opacity-80 w-full sidebar fixed'>
                  <div className='text-3xl mt-5 right ml-[21rem]'>
                    <AiOutlineCloseCircle 
                      onClick={() => setToggleSidebar(true)}
                    />
                  </div>
                  <div className='absolute text-2xl m-8 font-bold border-b-2 border-black w-4/5'>
                      My Portfolio
                  </div>
                  <div className='absolute mt-24 ml-16 w-2/3'>
                    {
                      sideItems.map((sideItem, key) => {
                        return(
                          <div key={key} className='text-slate-900 mt-10 text-2xl border-b-2 border-slate-400 pb-2'>
                            <a href={sideItem.url}>
                            {sideItem.name}
                            </a>
                          </div>
                        )
                      })
                    }
                  </div>
            </div>
          }
      </div>
    </>
  )
}

export default Sidebar