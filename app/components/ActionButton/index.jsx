"use client"
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { SlideUp } from '../../utility/animation'

function ActionButton() {
  return (
    <div className='bg-background w-full overflsow-x-hidden mt-48'>
      <div className='container mx-auto space-y-7 p-10  '>
        <motion.h1 
          variants={SlideUp(0.3)}
          initial = "hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          className='font-semibold text-6xl max-w-[618px] text-center mx-auto text-[#263238] ' 
        >
          Pellentesque suscipit fringilla libero eu.
        </motion.h1>
        <motion.div
          variants={SlideUp(0.6)}
          initial = "hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
        >
          <button className='btn animate_btn mx-auto flex items-center justify-center gap-2 font-medium' >Get a Demo<BsArrowRight/></button>
        </motion.div>
      </div>
    </div>
  )
}

export default ActionButton
