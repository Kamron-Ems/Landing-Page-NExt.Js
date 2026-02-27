"use client"

import React from 'react'
import Img from 'next/image'
import illustration from "@/public/Hero/Illustration.png"
import img1 from "@/public/Hero/img1.png"
import img2 from "@/public/Hero/img2.png"
import img3 from "@/public/Hero/img3.png"
import {motion} from "framer-motion"
import { SlideRight, SlideUp } from '../../utility/animation'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper'; // Ajouter
import 'swiper/css'; // Import des styles de base
import 'swiper/css/pagination'; // Si tu utilises la pagination
import 'swiper/css/navigation'; // Si tu utilises la navigation avec 


// Enregistrement des module Swiper
SwiperCore.use([Navigation, Pagination, Autoplay]);

// previous


const DataHero = [
  {
    id: 1,
    title: "Lessons and insights",
    authertitle: "from 8 years",
    description: "Where to grow your business as a photographer: site or social media?",
    img: illustration,
  },
  {
    id: 2,
    title: "Master Your Code",
    authertitle: "with 10+ practical projects",
    description: "Unlock the power of programming languages to build scalable applications.",
    img: img1,
  },
  {
    id: 3,
    title: "The Future of Web Development",
    authertitle: "by industry experts",
    description: "Explore the cutting-edge tools and frameworks driving modern web applications.",
    img: illustration,
  },
  {
    id: 4,
    title: "Cybersecurity Essentials",
    authertitle: "protecting 100+ systems",
    description: "Learn how to safeguard your apps and data from real-world cyber threats.",
    img: img2,
  },
  {
    id: 5,
    title: "Data Science & Machine Learning",
    authertitle: "powered by real datasets",
    description: "Discover how to turn raw data into insights with Python, ML, and AI.",
    img: img3,
  },
]
function Hero() {

  return (
    <>
      <div className='bg-[#F5F7FA] py-32  lw-screen min-w-96 w-full overflow-hidden' >
         {/* Initialisation de Swiper avec les options */}
        <Swiper 
          spaceBetween={30} // Espacement entre les slides
          slidesPerView={1} // Affiche un slide à la fois
          loop={true} // Permet de boucler les slides
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true, // Permet de cliquer sur les dots pour changer de slide
            type: 'bullets', // Choisir le type de pagination (ici 'bullets' pour des cercles)
            renderBullet: (index, className) => {
              return `<span class="${className} custom-dot "></span>`;
            }
          }}
          navigation = {false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        >
          {DataHero.map((item)=>(
             <SwiperSlide 
              key={item.id}
             >
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
                  <span className='text-primary'>  {item.authertitle}</span>
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
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className=' object-contain '
                />
            </motion.div>
          </div>
           </SwiperSlide>
          ))
          }
        </Swiper>

      </div>
    </>
  )
}

export default Hero
