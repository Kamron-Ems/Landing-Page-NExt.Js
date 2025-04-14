"use client"
import Image from 'next/image'
import React, { useState } from 'react'
// import { Menu } from 'lucide-react';
import { BiCloset, BiMenu } from 'react-icons/bi'
import { BsArrowRight, BsMenuButtonFill } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'

const DataNav = [
    {
        id:1,
        title:"Home"
    },
    {
        id:2,
        title:"Features"
    },
    {
        id:3,
        title:"community"
    },
    {
        id:4,
        title:"Blog"
    },
    {
        id:5,
        title:"Pricing"
    }
]

function NavBar() {

  const [menu, setMenu]= useState(true)

  return (
    <div className='min-w-96 px-4 relative container mx-auto flex justify-between items-center py-3 sm:space-x-12'>
      {/* Logo */}
      <div> 
        <Image 
          src="/Logo/Logo1.png" alt="" width={100} height={10}
          className='w-[100] h-[100]'
        /> 
      </div>
      {/* bar menu */}
      <div className='flex items-center space-x-[22.27px] ' >
        {/* Items Nav bar */}
        <div
          className={` ${menu && "hidden" } md:block bg-redd-500 w-fit h-fit`} 
        >
        <div 
          className='flex md:flex-row absolute md:static duration-500 transform top-16  right-1/2 left-1/2 flex-col items-center space-x-[16.71px] space-y-5 md:space-y-0 text-text_title'
        >
            {
                DataNav.map((item)=>( 
                    <div 
                      key={item.id} 
                      className='font-medium cursor-pointer md:bg-white hover:text-black '
                    >{item.title}</div>
                ))
            }
        </div>
        </div>
        {/* Action Register Button */}
        <button 
          className='flex items-center justify-center gap-2 bg-primary rounded px-5 py-2 text-white '> Register Now  <BsArrowRight /></button>
            {/* <Menu /> */}
            <div className='md:hidden pr-3' onClick={()=>setMenu(!menu)}> 
              { menu ?
                <BiMenu className='text-2xl text-[#2194f3] '/>
                :
                <GrClose className='text-2xl text-[#2194f3]'  />
              }  
            </div>
      </div>
    </div>
  )
}

export default NavBar
