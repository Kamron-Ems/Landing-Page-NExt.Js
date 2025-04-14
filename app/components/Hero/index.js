"use client"
import React from 'react'
import Img from 'next/image'
import illustration from "@/public/Hero/Illustration.png"
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
      <div className='bg-[#F5F7FA]  min-w-96' >
        {/* <Slider {...settings}> */}
        <div className=''>
          {DataHero.map((item)=>(
            <div 
              key={item.id}
              className='py-24 flex flex-col-reverse md:flex-row h-full w-full px-[100px] gap-20 items-center justify-center'
            >
            {/* Right Text section */}
            <div className='space-y-[22px] w-[320px] sm:w-[340px] md:w-[457px] lg:w-[600px] ' >
              {/* Presentation Block */}
              <div className='space-y-3' >
                {/* title section */}
                <h1 
                  className='font-semibold text-4xl md:text-5xl lg:text-6xl text-text_title leading-none '
                >
                  {item.title}
                  <span className='text-primary'>  from 8 years</span>
                </h1>
                {/* a litle description */}
                <p className='text-xs lg:text-base text-text_title/90 ' >{item.description}</p>
              </div>
                {/* button Action */}
                <button className='btn' >Register</button>
            </div>
            {/* Left Image section */}
            <div 
              // className='hidden md:block'
            >
              <Img 
                src={item.img} alt={"f"} 
                height={300}
                width={300}
                className=' w-[272.16px] h-[283px] lg:w-[282.16px] lg:h-[293px] object-contain '
              />
            </div>
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
