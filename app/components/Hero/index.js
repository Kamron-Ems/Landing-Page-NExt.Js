"use client"
import React from 'react'
import Img from 'next/image'
import illustration from "@/public/Hero/Illustration.png"
import {motion} from "framer-motion"
import { SlideRight, SlideUp } from '../../utility/animation'
// import Slider from "react-slick";
// Import du modul slide
import Slider from "react-slick";
// Fichier style pour le slide
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// previous


const DataHero = [
  {
    id:1,
    title: "Lessons and insights",
    description: "Where to grow your business as a photographer: site or social media?",
    img: illustration,
  },
  // {
  //   id:2,
  //   title: "Lessons and insights",
  //   description: "Where to grow your business as a photographer: site or social media?",
  //   img: illustration,
  // },
  // {
  //   id:3,
  //   title: "Lessons and insights",
  //   description: "Where to grow your business as a photographer: site or social media?",
  //   img: illustration,
  // },
]
function Hero() {

  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
};

  return (
    <>
      <div className='bg-[#F5F7FA] py-24  min-w-96' >
        {/* <Slider {...settings}> */}
        <div className=''>
          {DataHero.map((item)=>(
            <div 
              key={item.id}
              className='py-24 flex flex-col-reverse md:flex-row h-full w-full px-[100px] gap-20 items-center justify-center'
            >
            {/* Right Text section */}
            <div className='space-y-9 w-[320px] sm:w-[340px] md:w-[457px] lg:w-[600px] ' >
              {/* Presentation Block */}
              <div className='space-y-5' >
                {/* title section */}
                <motion.h1
                  variants={SlideRight(0.6)}
                  initial="hidden"
                  animate="visible" 
                  className='font-semibold text-4xl md:text-5xl lg:text-6xl text-text_title leading-none '
                >
                  {item.title}
                  <span className='text-primary'>  from 8 years</span>
                </motion.h1>
                {/* a litle description */}
                <motion.p 
                  variants={SlideRight(1.2)}
                  initial="hidden"
                  animate="visible"
                  className='text-xs lg:text-lg text-gray-500' 
                >
                  {item.description}
                </motion.p>
              </div>
                {/* button Action */}
                <motion.div
                  variants={SlideRight(1.4)}
                  initial="hidden"
                  animate="visible"
                >
                  <button 
                    className='btn animate_btn' 
                    >Register</button>
                  </motion.div>
            </div>
            {/* Left Image section */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{type:"spring", stiffness: 100, delay: 0.2 }}
              className='relative w-[350px] h-[350px] lg:w-[282.16px] lg:h-[293px]'
            >
              <Img 
                src={item.img} alt={"Hero image"} 
                // height={300}
                // width={300}
                fill
                priority
                className=' object-contain '
                />
            </motion.div>
          </div>
          ))
          }
        </div>
          {/* </Slider> */}
      </div>
    </>
  )
}

export default Hero
