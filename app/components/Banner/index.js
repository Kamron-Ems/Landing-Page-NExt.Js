"use client"
import React from 'react'
import {motion} from "framer-motion"
import { SlideLeft } from '../../utility/animation'
// Icons
import { MdPayments } from "react-icons/md";
import { BsCalendarEventFill } from "react-icons/bs";
import { TbUsers } from "react-icons/tb";
import { LiaHandshake } from "react-icons/lia";

 const DataBanner= [
    {
        id:1,
        icon: <TbUsers/>,
        numebres: 2245341,
        text: "Members",
        delay:0.3,
    },
    {
        id:2,
        icon: <LiaHandshake/>,
        numebres: 46328,
        text: "Clubs",
        delay:0.6,
    },
    {
        id:3,
        icon: <BsCalendarEventFill/>,
        numebres: 828867,
        text: "Event Bookings",
        delay:0.9,
    },
    {
        id:4,
        icon: <MdPayments/>,
        numebres: 1926436,
        text: "Payments",
        delay:1.2,
    },
 ]

function Banner() {
  return (
    <div className='bg-[#F5F7FA] py-11'>
      <div className='container mx-auto flex md:flex-row flex-col gap-7 justify-between sm:px-40 px-20 ' >
      {/* Left section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{type:"spring", stiffness: 100, delay: 0.2 }}
        // animate={{opacity:1}}
        className='space-y-[6px] md:w-96 max-w-96'
      >
        <h1 className='h1' >
            <span>Helping a local</span><br/>
            <span className='text-primary' >business reinvent itself</span>
        </h1>
        <p className='text-gray-700'>
            We reached here with our hard work and dedication
        </p>
      </motion.div>
      {/* Right section */}
      <div className='grid sm:grid-cols-2 gap-y-7 gap-x-10 place-items-start md:w-96 max-w-96 ' >
        {
          DataBanner.map((item)=>(
              <motion.div 
                variants={SlideLeft(item.delay)}
                initial="hidden"
                whileInView="visible" 
                key={item.id}
                className='flex items-center w-fit gap-3 '
              >
              {/* icon */}
              <div className=' text-primary  text-[33px] ' >{item.icon}</div>
              {/* Information */}
              <div className='flex flex-col' >
                {/* number */}
                <span className='font-bold text-xl text-text_title ' >{item.numebres}</span>
                {/* title */}
                <span className='text-gray-500 text-sm' >{item.text}</span>
              </div>
              </motion.div>
          ))
        }
      </div>
    </div>
    </div>
  )
}

export default Banner
