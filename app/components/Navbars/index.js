"use client"
import React, { useState, useEffect } from "react";
import Image from 'next/image'
import logo from '@/public/Logo/Logo1.png'
import { BsArrowRight, BsMenuButtonFill } from 'react-icons/bs'
import { BiMenu } from 'react-icons/bi'
import { GrClose } from 'react-icons/gr'
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [showNavbar, setShowNavbar] = useState(true);
const [lastScrollY, setLastScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 800 && currentScrollY > lastScrollY) {
       // J'affiche la barre de navigation'
      setShowNavbar(true);
    }
      else if (currentScrollY < 100 ) {
       // J'affiche la barre de navigation'
       setShowNavbar(true);
     }
     else if (currentScrollY < 800 && currentScrollY < lastScrollY ) {
      // Je cache la barre de navigation'
      setShowNavbar(false);
    }
  
    setLastScrollY(currentScrollY);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY]);

  return (
    <>
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className={` fixed top-0 left-0 backdrop-blur-lg w-full z-50 transition-transform duration-500 ${showNavbar ? 'translate-y-0' : '-translate-y-full'} shadow`}
    >
    <nav className="py-3 px-2 bg-whites container mx-auto   md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
        <div className='relative w-[140px] h-[50px]'> 
        <Image 
          src={logo} alt="" 
          fill
          priority
          className='object-contain '
        /> 
        </div>

          <span
            className="text-3xl cursor-pointer mx-2 md:hidden block"
            onClick={toggleMenu}
          >
            {
              isOpen ? <GrClose/> : <BiMenu/>
            }
          </span>
        </div>

        <ul
          className={`md:flex md:items-center md:static absolute bg-whites  w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 transition-all ease-in duration-500
            ${
              isOpen
                ? "top-[80px] opacity-100 z-10"
                : "top-[-400px] opacity-0 z-[-1]"
            } md:top-auto md:opacity-100 md:z-auto`}
        >
          {["Home", "Service", "About", "Contact", "Blog'S"].map((item) => (
            <li key={item} className="mx-4 md:animate_link my-6 md:my-0 hover:text-primary transition-all ">
              <a href="#" className="text-xl">
                {item}
              </a>
            </li>
          ))}
  
          <button 
            className=' flex items-center justify-center gap-2 bg-primary  rounded px-5 py-2 text-white animate_btn '
            > Register Now  
            <BsArrowRight/></button>
        </ul>
      </nav>
    </motion.div>
    </>
  );
};

export default Navbar;
