"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SlideUp } from '../../utility/animation'

export default function Card({img,title, description}) {
  return (
      <div className="container mx-auto overflow-hidden ">
    <div className="flex  items-center justify-center">
  <div className="relative flex w-full md:flex-row flex-col justify-center bg-white bg-clip-border text-gray-700 shadow-md">
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{type:"spring", stiffness: 100, delay: 0.2 }}
      className="relative h-96 md:w-2/5 w-[90%] shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-bodrder">
    <Image 
      src={img} alt="" 
      fill
      priority
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className='object-contain'
    />
    </motion.div>

    {/* Right Section */}
    
    <div className="p-6 max-w-[600px] ">
      {/* Title */}
      <motion.h4 
        variants={SlideUp(0.3)}
        initial = "hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
        className="mb-2 text-center  h1 ">
        {title}
      </motion.h4>
      {/* Description */}
      <motion.p 
        variants={SlideUp(0.6)}
        initial = "hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
        className="mb-3 font-sans w-full text-base font-normal leading-relaxed text-gray-700 antialiased"
      >
        {description}
      </motion.p>
        <button
          className="btn animate_btn "
          type="button"
        >
          Learn More          
        </button>
      {/* </motion.div> */}
    </div>
  </div>
</div>
    </div>
  )
}
