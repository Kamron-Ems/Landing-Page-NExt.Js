"use client"
import React, { useState } from "react";
import Image from 'next/image'
import logo from '@/public/Logo/Logo1.png'
import { BsArrowRight, BsMenuButtonFill } from 'react-icons/bs'
// import { IonIcon } from '@ionic/react';
// import { menuOutline, closeOutline } from 'ionicons/icons';
import { BiMenu } from 'react-icons/bi'
import { GrClose } from 'react-icons/gr'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
        <div className=" shadow ">
    <nav className="py-3 px-2 bg-white container mx-auto   md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
        <div className='relative w-[140px] h-[50px]'> 
        <Image 
          src={logo} alt="" 
          // width={100} height={10}
          fill
          priority
          className='object-contain '
        /> 
        </div>

          <span
            className="text-3xl cursor-pointer mx-2 md:hidden block"
            onClick={toggleMenu}
          >
            {/* <IonIcon icon={isOpen ? closeOutline : menuOutline} /> */}
            {
              isOpen ? <GrClose/> : <BiMenu/>
            }
          </span>
        </div>

        <ul
          className={`md:flex md:items-center md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 transition-all ease-in duration-500
            ${
              isOpen
                ? "top-[80px] opacity-100 z-10"
                : "top-[-400px] opacity-0 z-[-1]"
            } md:top-auto md:opacity-100 md:z-auto`}
        >
          {/* <div className="flex items-center gap-0" > */}

          {["Home", "Service", "About", "Contact", "Blog'S"].map((item) => (
            <li key={item} className="mx-4 md:animate_link my-6 md:my-0 hover:text-primary transition-all ">
              <a href="#" className="text-xl">
                {item}
              </a>
            </li>
          ))}
          {/* </div> */}

          {/* <button className="bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded">
            Get started
          </button> */}
          <button 
            className=' flex items-center justify-center gap-2 bg-primary  rounded px-5 py-2 text-white animate_btn '
            > Register Now  
            <BsArrowRight/></button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
