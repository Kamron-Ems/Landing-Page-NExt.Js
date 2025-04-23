"use client"
import React from 'react'
import Image from 'next/image'
import Icon from '@/public/Community/Vector.png'
import Icon1 from '@/public/Community/Vector1.png'
import Icon2 from '@/public/Community/Vector3.png'
import {motion} from "framer-motion"
import { SlideLeft , SlideUp } from '../../utility/animation'


const DataIcon = [
  {
    id:1,
    icon: Icon,
    title: "Membership Organisations",
    description: "Our membership management software provides full automation of membership renewals and payments",
    delay: 0.3,
  },
  {
    id:2,
    icon: Icon1,
    title: "National Associations",
    description: "Our membership management software provides full automation of membership renewals and payments",
    delay: 0.6,
  },
  {
    id:3,
    icon: Icon2,
    title: "Clubs And Groups",
    description: "Our membership management software provides full automation of membership renewals and payments",
    delay: 0.9,
  },
]

function Community() {
  return (
    <div className=' space-y-8 container mx-auto my-7' >
      {/* Title and Description Section */}
      <motion.div 
        variants={SlideUp(0.3)}
        initial = "hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
        className='max-w-[430px] mx-auto space-y-3'>
        {/* title */}
        <h1
        className=' h1  text-center antialiased'
        >Manage your entire community  in a single system</h1>
        {/* Description */}
        <p
          className='text-gray-700  md:text-lg text-base text-center '
        >Who is Nextcent suitable for? </p>
      </motion.div>
      {/* items list section */}
      <div 
        className='grid md:grid-cols-3 gap-y-8 gap-x-6  place-items-center '
      >
        {DataIcon.map((item)=>(
            <motion.div
              variants={SlideLeft(item.delay)}
              initial="hidden"
              whileInView="visible" 
              key={item.id}
              className=' relative md:h-60   md:max-w-72 flex bg-background hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex-col gap-2 justify-center p-6  '
            >
              <div className='space-y-3' >
                {/* Icon */}
                <div className='relative' >
                  <Image src={item.icon} alt='' 
                    width={30} 
                    height={30}  
                    className='h-10 w-10  object-contain mb-5 mx-auto'
                    />
                </div>
              
              {/* title item */}
              <h2 
                className='text-center font-bold  text-xl'>
                {item.title}
              </h2>
              </div>
              {/* description item */}
              <p
                className='text-center text-gray-700 text-base w-full antialiased'
              >
                {item.description}
              </p>
            </motion.div>
        ))}
        </div>

    {/* </div> */}
      </div>
  )
}

export default Community
