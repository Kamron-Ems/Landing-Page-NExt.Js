"use client"
import Image from 'next/image'
import logo from '@/public/Logo/Logo1.png'
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
    <div className=' min-w-[420px] px-4 relative container mx-auto flex justify-between items-center py-3 sm:space-x-12'>
      {/* Logo */}
      <div className='relative w-[140px] h-[50px]'> 
        <Image 
          src={logo} alt="" 
          // width={100} height={10}
          fill
          priority
          className='object-contain '
        /> 
      </div>
      {/* bar menu */}
      <div className='flex items-center space-x-[22.27px] ' >
        {/* Items Nav bar */}
        <div
          className={` ${menu && "hidden" } md:block bg-red-500 w-fit h-fit`} 
        >
        <div 
          className='flex md:flex-row absolute md:static duration-500 transform top-16  right-1/2 left-1/2 flex-col items-center space-x-[16.71px] space-y-5 md:space-y-0 text-text_title'
        >
            {
                DataNav.map((item)=>( 
                    <div 
                      key={item.id} 
                      className='font-medium text-lg cursor-pointer  hover:text-primary hover:scale-110 transition-transform '
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
      {/* nav for small breakpoint  */}
      {/* <div className='bg-red-200'>
        <div 
          className='absolute top-16 left-[40%] transform -translate-x-1/2 -translate-y-1/2  left-0v space-y-2'
        >
          {
            DataNav.map((item)=>(
              <div
                className=''
                key={item.id}
              >
                <span
                  className='font-medium text-lg cursor-pointer '
                >{item.title}</span>
              </div>
            ))
          }
        </div>
      </div> */}
    </div>
  )
}

export default NavBar
